---
layout:     post
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - Git
---

场景：有一个公用的分支需要发布，但是临时取消自己的发布任务了，但是又提交过3次，commitId从老到新本别是aaa1,aaa2,aaa3
现在需要回滚这3个提交，从最新开始

```php
git revert -n aaa3
git revert -n aaa2
git revert -n aaa1
```

如果就提交了1次，之间 git revert aaa就行