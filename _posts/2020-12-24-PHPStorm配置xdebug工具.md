---
layout:     post
author:     YF
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - Other
---
php版本7.2
去官网下载了xdebug 3.0.1的版本，死活调试不成功，后来换成Xdebug 2.9.6就可以了，太坑了

php.ini
zend_extension = php_xdebug-2.9.6-7.2-vc15-x86_64.dll
xdebug.remote_enable = 1
xdebug.remote_host=localhost
xdebug.remote_port=9003
xdebug.remote_autostart=1
xdebug.idekey="PHPSTORM"
