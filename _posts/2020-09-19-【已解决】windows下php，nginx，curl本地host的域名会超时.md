也是很奇怪的一件事情，在本地host文件设置了一个127.0.0.1 test.abc.com的关系
然后php进行curl的时候，死活会超时

aa.php文件内容
```
$ch = curl_init();
$sUrl = 'http://192.168.3.5/bb.php';//192.168.3.5是本机ip地址 bb.php里就是打印了一串东西

$host = array("Host: test.abc.com");//怀疑是php读取不到host文件，所以用了这样的方式
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL, $sUrl);
curl_setopt($ch, CURLOPT_TIMEOUT, 2);  
curl_setopt($ch, CURLOPT_HTTPHEADER, $host);
$sResult = curl_exec($ch);
if($sError = curl_error($ch)){
	die($sError);
}
curl_close($ch);

var_dump($sResult);
```

在命令行下 php aa.php 也是可以获取内容的，就是在浏览器里http://test.abc.com/aa.php会超时，感觉还是域名没解析到，虽然curl的时候指定了host。

test.abc.com的nginx配置

```

log_format access '$upstream_addr' --- '$upstream_response_time' --- '$http_host' --- '$uri';

server {
	listen 80;
	
	server_name test.abc.com;

	root /sites/test;

	access_log /env/tmp/testacc.log access;

	location / {
		
		if (!-e $request_filename) {
			rewrite ^ /index.php last;
		}
		index index.php;
	}

	location ~ \.php$ {
        if (!-e $request_filename) {
            rewrite ^ /index.php last;
        }
		fastcgi_pass backend;
		fastcgi_index index.php;
		include fastcgi.conf;
        fastcgi_param  PATH_INFO $fastcgi_script_name;
	}
}
```
这里也很奇怪，server_name test.abc.com;改成server_name xxx.com 随便输入个域名，会到下面的配置文件中去
```
server {
    listen 80 default;
    server_name _;

    root /site/test;
	
    #access_log off;
	access_log /env/tmp/defaultacc.log bbb;
	
    location / {
        return 403 "Here";
    }
}
```
头疼，都不知道问题出在哪里，mac上是可以操作的，windows下配合nginx失败。。。先记录一笔吧

2020-09-19更新
证实了，果然是win下没有php-fpm的原因(参考评论区)，大于一个php-cgi会阻塞，因为本事运行会占用一个，然后curl也是本机的话又一个，被阻塞了，所以timeout。
试了一波如果curl另外一台windows电脑上的链接，这台windows也是这样情况不能curl自己本地的域名
$sUrl = 'http://192.168.3.18/win.php';// 可以打印另外一台windows上的输出
所以在windows上编程是太坑了
