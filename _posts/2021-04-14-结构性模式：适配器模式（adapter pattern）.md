适配器模式是Adapter，也称Wrapper，是指如果一个接口需要B接口，但是待传入的对象却是A接口，怎么办？
所以引出定义适配器模式是指：定义一个类，将一个已经存在的类，转换成目标接口所期望的行为形式。

适配器模式有2种。一种适配对象，一种适配class（其实就是继承，但是有不好的点，就是会有多余的方法出来，比如220v的是不需要的，当前就应该只有5v的）

什么时候需要用适配器模式？只要记住一点。当你有动机修改一个已经投入生产的接口，这时候就可以考虑试用适配器模式。适配器模式是用于解决接口不兼容问题有效方法。

###已220v电压转换为5v为例

1. 对象适配器模式
```
/*
【适配器模式中主要角色】
目标(Target)角色：定义客户端使用的与特定领域相关的接口，这也就是我们所期待得到的
源(Adaptee)角色：需要进行适配的接口
适配器(Adapter)角色：对Adaptee的接口与Target接口进行适配；适配器是本模式的核心，适配器把源接口转换成目标接口，此角色为具体类。
*/


//1. 对象适配器模式
/**
 * 目标角色
 */
interface Target {
    public function output5v();
}
 
/**
 * 源角色
 */
class Adaptee {
 
    /**
     * 源类含有的方法
     */
    public function output220v() {
        return 220;
    }
}
 
/**
 * 类适配器角色
 */
class Adapter implements Target {
    private $_adaptee;
 
    public function __construct(Adaptee $adaptee) {
        $this->_adaptee = $adaptee;
    }
 
    /**
     * 委派调用Adaptee的sampleMethod1方法
     */
    public function output5v() {
        $origin = $this->_adaptee->output220v();
		echo "原始电压是" .$origin. '当前是5v' . PHP_EOL;
    }
 
}
 

class Client {
    public static function main() {
        $adaptee = new Adaptee();
        $adapter = new Adapter($adaptee);//传入了一个不兼容的对象
        $adapter->output5v();
    }
}
Client::main();
```

2. 类适配器模式（不推荐，把220v方法也暴露了）
```
<?php 

/**
 * 目标角色
 */
interface Target {
    public function output5v();
}
 
/**
 * 源角色
 */
class Adaptee {
 
    /**
     * 源类含有的方法
     */
    public function output220v() {
        return 220;
    }
}
 
/**
 * 类适配器角色
 */
class Adapter extends Adaptee implements Target {
    private $_adaptee;
 
    public function __construct(Adaptee $adaptee) {
        $this->_adaptee = $adaptee;
    }
 
    /**
     * 委派调用Adaptee的sampleMethod1方法
     */
    public function output5v() {
        $origin = $this->_adaptee->output220v();
		echo "原始电压是" .$origin. '当前是5v' . PHP_EOL;
    }
 
}
 

class Client {
    public static function main() {
        $adaptee = new Adaptee();
        $adapter = new Adapter($adaptee);//传入了一个不兼容的对象
        $adapter->output5v();
    }
}
Client::main();
```
