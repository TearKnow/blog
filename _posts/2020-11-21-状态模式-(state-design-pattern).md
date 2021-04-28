
 参考《大话设计模式》
  当有很多if else判断的时候，要修改一段if else里的逻辑，会显得很容易出错，而且不容易维护，这时可以使用状态模式
  场景：按照上班时间11点前干活，11-13点休息，13点之后干活。如果明天放假，说今天13点之后就下班，那么只要改一个类就行了，方便修改

```
<?php 
interface state{
    function doIt($obj);
}

class amState implements state{
    function doIt($obj){
        if($obj->hour <= 11){
            echo $obj->hour.'上午干活' . "<br>";
        }else{
            $newObj = new pmState();
            $obj->setState($newObj);
            $obj->doIt();
        }
    }
}

class pmState implements state{
    function doIt($obj){
        if($obj->hour <= 13){
            echo $obj->hour.'中午休息' . "<br>";
        }else{
            $newObj = new eveningState();
            $obj->setState($newObj);
            $obj->doIt();
        }
    }
}

class eveningState implements state{
    function doIt($obj){
        //如果明天放假，今天下午放假，直接改这个类就可以了，不需要改其他代码
        echo $obj->hour.'下班了' . "<br>";

//        if($obj->hour <= 18){
//            echo $obj->hour.'下午不想干活' . "<br>";
//        }else{
//            echo $obj->hour.'下班了' . "<br>";
//        }
    }
}


class man{
    public $hour;
    public function __construct(){
        $this->state = new amState();
    }

    public function setState($state){
        $this->state = $state;
    }

    public function doIt(){
        $this->state->doIt($this);
    }
}


$obj = new man();
$obj->hour = 8;
$obj->doIt();
$obj->hour = 12;
$obj->doIt();
$obj->hour = 14;
$obj->doIt();
$obj->hour = 19;
$obj->doIt();
```
