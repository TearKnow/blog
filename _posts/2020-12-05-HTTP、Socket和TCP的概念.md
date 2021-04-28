---
layout:     post
author:     YF
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - 网络
---
网络有7层模型，一般都简化为5层：
应用层：主要是文件传输，电子邮件等应用层的服务，类似HTTP、FTP、SMTP等
传输层：提供端对端的接口，类似TCP、UDP
网络层：为数据包选择路由，类似IP、ICMP
数据链路层：传输有地址的帧、错误检测功能，类似ARP
物理层：物理媒介，1000BASE-SX等

http和tcp是属于不同的层
比如写一个聊天工具，不属于上面的应用层，所以需要与应用层下面的层打交道，就是与tcp udp打交道，自己实现非常复杂而且出错，所以提供了socket这个api，socket可以脱离应用层，通过socket可以与底层打交道。
