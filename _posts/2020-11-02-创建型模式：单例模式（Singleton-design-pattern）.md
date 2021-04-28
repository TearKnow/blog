---
layout:     post
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - DesignPattern
---
比如在用pdo连接数据库的时候，可以用单例模式，那么就可以不需要一直new PDO了，减少资源使用
```
<?php

class Single {
	private $name;//声明一个私有的实例变量

	private function __construct(){//声明私有构造方法为了防止外部代码使用new来创建对象。

	}

	static public $instance;//声明一个静态变量（保存在类中唯一的一个实例）

	static public function getinstance(){//声明一个getinstance()静态方法，用于检测是否有实例对象
		if(!self::$instance) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	public function setname($n){ 
		$this->name = $n; 
	}

	public function getname(){
		return $this->name; 
	}

}

$oa = Single::getinstance();
$ob = Single::getinstance();

$oa->setname('aaa');
$ob->setname('bbb');

echo $oa === $ob ? 1 : 0;//1，验证是同一个
echo $oa->getname();//bbb
echo $ob->getname();//bbb
```
