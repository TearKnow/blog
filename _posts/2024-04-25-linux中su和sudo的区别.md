---
layout:     post
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - Linux
---

```vue
在Linux中，sudo和su是两个不同的命令，用于在系统中切换用户身份或执行命令。它们之间的主要区别在于：

su (Switch User):

su命令允许用户切换到另一个用户的身份。默认情况下，如果没有指定要切换到的用户，则会尝试切换到超级用户(root)。
使用su命令切换用户时，需要知道目标用户的密码。
一旦切换到目标用户，用户在新的身份下执行的所有操作都具有该用户的权限。
sudo (Superuser Do):

sudo命令允许普通用户以另一个用户的身份执行特定的命令，通常是超级用户(root)。这允许系统管理员控制谁可以执行特定命令以及在何种条件下。
sudo命令需要用户输入自己的密码，而不是目标用户的密码。
通常，sudo命令会记录用户执行的命令，以便进行审计。
因此，su主要用于完全切换用户身份，而sudo用于以另一个用户的身份执行特定命令，具有更精细的权限控制。
```

举例：
现在A账号，大部分时间都在此账号下操作，想切到www-data用户  

su www-data需要密码，但是可以sudo su，这个按照上面解释等同于sudo su root，切到了root用户，再想切到www-data，就只要su www-data也行，其实已经root了，不需要再切什么了。

