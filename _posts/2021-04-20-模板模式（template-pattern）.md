---
layout:     post
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - DesignPattern
---

* 在模板模式（Template Pattern）中，一个抽象类公开定义了执行它的方法的方式/模板。
 * 它的子类可以按需要重写方法实现，但调用将以抽象类中定义的方式进行。这种类型的设计模式属于行为型模式。
 * 定义一个操作中的算法的骨架，而将一些步骤延迟到子类中。模板方法使得子类可以不改变一个算法的结构即可重定义该算法的某些特定步骤。

```
<?php


abstract class game{
	abstract function init();
	abstract function start();
	abstract function end();
	
	public final function play(){
		$this->init();
		$this->start();
		$this->end();
	}
}

class football extends game{
	public function init(){
		echo '足球游戏初始化 ' . "<br>";
	}
	
	public function start(){
		echo '足球游戏开始 ' . "<br>";
	}
	
	public function end(){
		echo '足球游戏结束 ' . "<br>";
	}
}

class basketball extends game{
	public function init(){
		echo '篮球游戏初始化 ' . "<br>";
	}
	
	public function start(){
		echo '篮球游戏开始 ' . "<br>";
	}
	
	public function end(){
		echo '篮球游戏结束 ' . "<br>";
	}
}

$f = new football;
$f->play();

$b = new basketball;
$b->play();


/*
输出：
足球游戏初始化
足球游戏开始
足球游戏结束
篮球游戏初始化
篮球游戏开始
篮球游戏结束
*/
```
