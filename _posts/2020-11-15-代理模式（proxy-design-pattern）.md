---
layout:     post
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - DesignPattern
---
代理模式在访问对象的时候引入一定程度的间接性，realSubject和proxy需要实现相同的接口
```
<?php
interface Rent{
    public function letOut();
};

class Man implements Rent{
    public function letOut()
    {
        //echo "男人出租，房租为100<br>";
        return 100;
    }
}

class proxyZhongJie implements Rent{
    public function letOut()
    {
        $man = new Man();
        $manLetOut = $man->letOut();
        $money = 10 + $manLetOut;
        echo "中介出租，房租为" . $money;
        return $money;
    }
}

//租客不能直接中房东那里出租，需要从中介来租房
$zhongjie = new proxyZhongJie();
$zhongjie->letOut();
```
