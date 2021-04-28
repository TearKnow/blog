laravel框架中有很多实现了ArrayAccess这个接口，那么这个接口有什么用呢，看字面意思就是像数组一样使用，实际的效果也是这样的，要实现这个接口需要重新4个方法，举例如下
```
<?php
class test implements ArrayAccess{
	public function offsetExists($param){
		echo '类似数组isset:'.$param."\n";
	}
	
	public function offsetGet($param){
		echo '类似数组getparam'.$param."\n";
	}
	
	public function offsetSet($name, $value){
		echo '类似数组set:'.$name.":".$value."\n";
	}
	public function offsetUnset($param){
		echo '类似数组unset:'.$param."\n";
	}
}

$obj = new test;


echo $obj['get'];

$obj['name'] = 'jack';

echo isset($obj['test']);

unset($obj['nothiskey']);
```
输出“
类似数组getparamget
类似数组set:name:jack
类似数组isset:test
类似数组unset:nothiskey
”
