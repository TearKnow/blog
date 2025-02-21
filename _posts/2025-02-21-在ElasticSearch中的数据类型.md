---
layout:     post
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - ElasticSearch
---

遇到一个场景，不同的国家有不同的price，然后新增了price字段，需要放入到elastic search中，因为有些是小数点，有些整数，期望index/_mapping GET是那些价格字段是float，而不是long（整型类型），如果是long，可能存入的是小数，但是聚合（比如排序）会是整数了

现在新增字段类型是直接根据插入时，es自己判断类型。所以会有这样一个问题，如果第一条插入的是整型，那就完蛋了会变成long类型，第一条是小数的那就运气好会是期望的float。

然后自己直接通过es的api发现确实是这样，插入整数和小数点，类型是long和float【确定不是es的版本问题】。



看网站代码以前的那种金额的都套了个floatval()，这次新增的print字段也是对的，而且index/_mapping GET也是float。

看搜索项目中就不对，也用了floatval()，搞不懂为什么。后来就用了个恶心的方法加了0.00001，这样会强制变成float

疑问就是，两边都套了flatval()，为什么一边好，一边不好。



后来研究了下网站的源码，因为ElasticSearch的vendor包里有$this->serializer->serialize($item)操作，序列化的方法里有$data = json_encode($data, JSON_PRESERVE_ZERO_FRACTION);

但是搜索项目中，不是用的vendor用了一个EasySwoole的什么东西插入的，可能没处理数据。


按照这个方法，自己写了个例子，果然，所以api传json到es也就可以了。

```
$arr = ['price' => floatval(19)];
$json = json_encode($arr, JSON_PRESERVE_ZERO_FRACTION);
echo $json;//{"price":19.0}

$arr = ['price' => 19];
$json = json_encode($arr, JSON_PRESERVE_ZERO_FRACTION);
echo $json;//{"price":19}
```