---
layout:     post
author:     YF
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - Other
---
今天在windows下本来想安装一个wordpress的，发现输入网址后没反应，原来是nginx没启动，没有nginx的进程导致的，奇怪了，前几天明明能够用的，怎么今天突然不行了呢？

查看了nginx的启动log，发现nginx的pid写不进去，就试着把文件删了，重新启动了，也没有自动生成。想着是不是nginx的conf文件哪天手一抖，多改了一个地方，用nginx -t 测了下，也报错了，报错的信息比log文件里的多，一阵窃喜，想着从中找出一些有用的东西，发现里面说0.0.0.0:443bind失败了，然后`netstat -aon | findstr "443"` 果然有这样的一个进程存在，通过pid找到了那个进程，原来是vmware的，好吧，还真是在前几天安装了vmware，最后就把vmware开机自启动关了，还在“管理->服务和应用程序->服务”中将“VMware Workstation Server”服务的启动类型改为手动。

最后windows重启了一下，测试了下启动nginx可以用，然后把虚拟机也打开试下，也正常运行，至此问题解决。