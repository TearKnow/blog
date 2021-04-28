以下代码可以实现类型js一样的效果，每隔1秒往浏览器输出一个值，主要用了flush方法，数据强制输出到浏览器，不然数据会到配置的buffer值，才往浏览器传输

环境：xampp，windows。使用windows+nginx不行，可能是nginx里也有fastcgi_buffer的限制

```
<?php
for ($i = 0; $i < 10; $i++) {
    echo $i.'<br />';
    echo str_repeat(" ", 1024 * 4);//因为PHP默认buffer值4096，所以如果这里改成1024*2 那么就会2个数字一起显示
    flush();
    sleep(1);
}
?>
```
备注：onedrive里搜索flush，有说明
