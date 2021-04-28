---
layout:     post
author:     YF
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - Other
---
背景：本机ip 192.168.3.118，虚拟机ip 192.168.3.101，需要在虚拟机上安装es，虚拟机上有建A用户，es不允许root用户启动，没注明root用户的，都是A用户操作。

1. 下载elasticsearch-7.6.1.tar.gz 版本
2. 在/usr/local下解压#1，tar -zxvf elasticsearch-7.6.1.tar.gz
3. cd elasticsearch-7.6.1  修改config/elasticsearch.yml
```
cluster.name: my-application
node.name: node-1
path.data: /usr/local/elasticsearch-7.6.1/data
path.logs: /usr/local/elasticsearch-7.6.1/log
network.host: 0.0.0.0
http.port: 9200
discovery.seed_hosts: ["0.0.0.0", "[::1]"]
cluster.initial_master_nodes: ["node-1", "node-2"]
```
4. root用户修改vim /etc/security/limits.conf 
```
* hard nofile 655360 
* soft nofile 131072 
* hard nproc 4096 
* soft nproc 4096
```

5. root用户修改 /etc/sysctl.conf文件最后添加一行
vm.max_map_count=262144，然后执行/sbin/sysctl -p立即生效

6. 启动es，到bin目录 ./elasticsearch ，过一会后启动成功，在虚拟机里curl 192.168.3.101:9200 有数据返回，表示成功。但是到本机运行没反应，考虑应该使端口的原因，虚拟机里没打开9200端口。
所以继续
```
firewall-cmd --zone=public --add-port=9200/tcp --permanent
firewall-cmd --reload
```
firewall-cmd --zone=public --list-ports 可以查看所有开放的端口，有9200了

7.最后./elasticsearch -d  可以在后台启动，本机也可以192.168.3.101:9200在浏览器访问了。
