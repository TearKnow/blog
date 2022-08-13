---
layout:     post
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - Mysql
---

数据的ACID：原子性（atomicity，或称不可分割性）、一致性（consistency）、隔离性（isolation，又称独立性）、持久性（durability）

## redo log
mysql 执行DML时，是先在内存中进行操作，在每隔一段时间刷到磁盘中去。在这个过程中，如果在内存中提交了，突然宕机了，但是还没刷到磁盘中，这时就需要先在redo log中进行记录下，到时可以从里面去恢复，保证持久性。

redo log 跟bin log 的区别，redo log是存储引擎层产生的，而bin log是数据库层产生的。假设一个事务，对表做10万行的记录插入，在这个过程中，一直不断的往redo log顺序记录，而bin log不会记录，直到这个事务提交，才会一次写入到bin log文件中。


## undo log
执行事务的过程中，最后一个失败了，需要回滚，就需要执行undo log。比如原来有个insert语言，在undo log中就对应一个delete的操作