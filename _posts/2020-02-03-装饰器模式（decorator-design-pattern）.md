装饰器可以想象给某样东西进行装饰，比如说给一辆车进行改装，可以改个轮毂，也可以改个排气，也可以改个大灯等等。改装完后，老板需要计算总共花了多少钱，那就需要把改装的项目花费进行合计，就可以用装饰器模式。像一个物品传给快递员，快递员把货进行包装，司机拿到一麻袋的物品，有点一环扣一环的感觉。

参考：[https://phpenthusiast.com/blog/the-decorator-design-pattern-in-php-explained](https://phpenthusiast.com/blog/the-decorator-design-pattern-in-php-explained)

```
<?php  
/** 
 * 场景：买一辆车SUV, SPORTSCAR，算出总的价格和描述有哪些功能。 
 * 期间可以选装很多的配件，比如轮胎，天窗，颜色等，这个时候就是要需要装饰者模式了 
 */  
  
// 不太好的方法，如果又来一辆跑车的话，又要写一遍下面所有的方法  
/* 
class suv{ 
    public $cost = 100000; 
    function cost(){ 
        return $this->cost; 
    } 
 
    function description(){ 
        return 'this is suv car'; 
    } 
 
    function wheel(){//选装轮胎 
        $this->cost = $this->cost + 10000; 
    } 
 
    function color(){//选装颜色 
        $this->cost = $this->cost + 5000; 
    } 
} 
$obj = new SUV(); 
$obj->wheel(); 
$obj->color(); 
echo '总价: '.$obj->cost; 
*/  
  
//使用装饰器来做  
interface car{  
    function cost();  
    function description();  
}  
  
class suv implements car {  
  
    public function cost()  
    {  
        return '300000';  
    }  
  
    public function description()  
    {  
        return 'this is a suv';  
    }  
}  
  
abstract class carFeature implements car{  
    public $car;  
  
    public function __construct($car){  
        $this->car = $car;  
    }  
  
    abstract function cost();  
  
    abstract function description();  
}  
  
class carWithColor extends carFeature{  
    public function cost(){  
        return 1000 + $this->car->cost();  
    }  
  
    public function description(){  
        return $this->car->description() . ' with color';  
    }  
}  
  
class carWithWheel extends carFeature{  
    public function cost(){  
        return 500 + $this->car->cost();  
    }  
  
    public function description(){  
        return $this->car->description() . ' with wheel';  
    }  
}  
  
$suv = new suv();  
$suvWithColor = new carWithColor($suv);  
$suvWithColorWithWheel = new carWithWheel($suvWithColor);  
echo $suvWithColorWithWheel->cost()."<br>";  
echo $suvWithColorWithWheel->description();  
  
//这样的话就可以为每辆车添加配置，然后价格也会累加起来  
```
