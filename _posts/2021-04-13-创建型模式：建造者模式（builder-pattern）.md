---
layout:     post
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - DesignPattern
---
使用多个简单的对象一步一步构建成一个复杂的对象，可能是需要有顺序的。这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式

优点：
建造者独立，易扩展；
便于控制细节风险。
缺点：
产品必须有共同点，范围有限制；
如内部变化复杂，会有很多的建造类。

#####建造者模式包含几个角色：
Builder：抽象建造者类，规范产品的组件，一般是由子类实现。
ConcreteBuilder：具体建造者类，实现抽象类定义的所有方法，并且返回一个组建好的对象。
Director：指挥者（组装者）类，负责安排已有模块的顺序，然后告诉Builder开始建造。
Product：产品类，通常是实现了模板方法模式，也就是有模板方法和基本方法。


```php
<?php

//产品类 Product
class Car{
	public $name;
	public $engine;
	public $chassis;//底盘
	
	public function setName($name){
		$this->name = $name;
	}
	
	public function setEngine($engine){
		$this->engine = $engine;
	}
	
	public function setchassis($chassis){
		$this->chassis = $chassis;
	}
	
	public function show(){
		echo '品牌：' . $this->name . "<br>";
		echo '引擎：' . $this->engine . "<br>";
		echo '底盘：' . $this->chassis . "<br>";
	}
}

//抽象建造者类 （Builder）
interface IBuilder{
	public function builderName();
	public function builderEngine();
	public function builderchassis();
}

//具体建造者类 （ConcreteBuilder）
class bmwBuilder implements IBuilder{
	public $car;
	
	public function __construct(){
		$this->car = new Car();
	}
	
	public function builderName(){
		$this->car->setName('宝马');
	}
	
	public function builderEngine(){
		$this->car->setEngine('v6引擎');
	}
	
	public function builderChassis(){
		$this->car->setChassis('运动底盘');
	}
	
	public function getCar(){
		return $this->car;
	}
}

class benzBuilder implements IBuilder{
	public $car;
	
	public function __construct(){
		$this->car = new Car();
	}
	
	public function builderName(){
		$this->car->setName('奔驰');
	}
	
	public function builderEngine(){
		$this->car->setEngine('v8引擎');
	}
	
	public function builderChassis(){
		$this->car->setChassis('舒适底盘');
	}
	
	public function getCar(){
		return $this->car;
	}
}

//组装者类 （Director）
class CarDirector{
	public function make(IBuilder $builder){
		$builder->builderName();
		$builder->builderEngine();
		$builder->builderChassis();
		
		return $builder->getCar();
	}
}

//最后，客户端调用
$director = new CarDirector();
$bmwBuilder = new bmwBuilder();
$car = $director->make($bmwBuilder);
$car->show();

echo '=====================' . "<br>";

$benzBuilder = new benzBuilder();
$car1 = $director->make($benzBuilder);
$car1->show();

/*
 * 输出：
 * 品牌：宝马
引擎：v6引擎
底盘：运动底盘
=====================
品牌：奔驰
引擎：v8引擎
底盘：舒适底盘
*/
```

参考：https://www.kancloud.cn/jacksunmico/php-design-pattern/616797
