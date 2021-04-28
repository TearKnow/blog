---
layout:     post
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - DesignPattern
---
策略模式定义了一系列的算法，并将每一个算法封装起来，而且使它们还可以相互替换。策略模式让算法独立于使用它的客户而独立变化，即封装变化的算法。
在这个例子中有move的一系列算法，和attack的一系列算法。使用它们的客户可以随意改变move的方式或者attack的方式。

优点：解耦，开闭原则
缺点：

1、客户端必须知道所有的策略类，并自行决定使用哪一个策略类。这就意味着客户端必须理解这些算法的区别，以便适时选择恰当的算法类。换言之，策略模式只适用于客户端知道所有的算法或行为的情况。
!!!这个可以用简单工厂结合，就不用客户端知道所有策略类!!!

2、 策略模式造成很多的策略类，每个具体策略类都会产生一个新类。

```php
<?php
/*
场景：一个职务大战僵尸的，有各种不同行走和不同攻击方式的僵尸
*/

interface moveable{
	public function move();
}

interface attackable{
	public function attack();
}

abstract class jiangshi{
	public $moveable;
	public $attackable;
	
	public function setMoveable($moveable){
		$this->moveable = $moveable;
	}
	
	public function getMoveable(){
		return $this->moveable;
	}
	
	public function setAttackable($attackable){
		$this->attackable = $attackable;
	}
	
	public function getAttackable(){
		return $this->attackable;
	}
	
	public abstract function display();

}

class stepByStep implements moveable{
	public function move()
    {
        echo "一步一步走 \n";
    }
}

class runQuickly implements moveable{
    public function move()
    {
        echo "快速跑\n";
    }
}

class biteAttack implements attackable{
	public function attack()
    {
        echo "咬\n";
    }
}

class normalJiangshi extends jiangshi{
    public function __construct($moveable, $attack)
    {
        $this->moveable = $moveable;
        $this->attackable = $attack;
    }

    public function display(){
		echo "我是普通僵尸 \n";
	}
	
	public function move(){
		$this->moveable->move();
	}

	public function attack(){
	    $this->attackable->attack();
    }
}

$normal = new normalJiangshi(new stepByStep(), new biteAttack());
$normal->display();
$normal->move();
$normal->attack();

$normal->setMoveable(new runQuickly());
$normal->move();
```
输出：
我是普通僵尸
一步一步走
咬
快速跑
