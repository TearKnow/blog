---
layout:     post
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - Algorithm
	- PHP
---

在做leetcode179的时候，没思路，看了题解后，发现人家几行代码就搞定了，主要用了usort这个内置函数

看了下这个usort的使用，一直记不住，因为自定义方法里有需要返回-1 0 1的情况

后来看到有这样的记忆方法：

    如果是-1，则$a位置和$b不变

    如果是1，则$a位置$b互换

---

### 例1 从小到大排序
```php
<?php 

function mysort($str1, $str2) {
	return $str1 < $str2 ? -1 : 1;//因为是从小到大，小的已经在前面了，所以不需要交互，返回-1
}

$nums = [2, 5, 11, 18, 1, 7];
usort($nums, 'mysort');

var_dump($nums);
```

### 例2 先奇后偶，奇偶里再从大到小排序
```php
<?php 

//奇数和偶数里，先奇后偶，然后再进行从大到小排序
//1是互换，-1是不换
function mysort($str1, $str2) {
	if(($str1 % 2 == 1) && ($str2 % 2 == 0)){//奇偶
		return -1;
	}
	
	if(($str1 % 2 == 0) && ($str2 % 2 == 1)){//偶奇
		return 1;
	}
	
	//奇奇 or 偶偶
	return $str1 > $str2 ? -1 : 1;
	
}

$nums = [2, 5, 11, 18, 1, 7];
usort($nums, 'mysort');

var_dump($nums);
```

### 例3 leetcode 179 使用usort解
```php
<?php 

//大的排在前面
function largestNumber($nums) {
	usort($nums, function ($a, $b){
		return $a.$b < $b.$a ? 1 : -1;
	});
	return implode('', $nums);
}

$nums = [3,30,34,5,9];
$result = largestNumber($nums);

echo $result;
```