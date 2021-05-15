---
layout:     post
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - Algorithm
	- todo
---

### 二叉搜索树中的搜索(Leetcode700)
```php
function searchBST($root, $val) {
    if(!$root){
        return null;
    }
    if($root->val == $val){
        return $root;
    }
    if($root->val > $val){
        return $this->searchBST($root->left, $val);
    }
    if($root->val < $val){
        return $this->searchBST($root->right, $val);
    }
}
```

### todo插入


### todo删除二叉搜索树中的节点（Leetcode450）


### 4验证