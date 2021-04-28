这里只是介绍一下原型模式的核心思想，其实在实际开发中直接clone即可。
```
<?php

abstract class Prototype{
    abstract function cloned();
}

/**具体原型类
 * Class Plane
 */
class Plane extends Prototype{

    public $color;

    function fly()
    {
        echo "飞机飞啊飞!<br/>";
    }

    function cloned()
    {
        return clone $this;
    }
}


$plane1 = new Plane();
$plane1->color = "Blue";

$plane2 = $plane1->cloned();

$plane1->fly();
$plane2->fly();

echo "plane1的颜色为：{$plane1->color}<br/>";
echo "plane2的颜色为：{$plane2->color}<br/>";
```

参考：https://developer.aliyun.com/article/236432
