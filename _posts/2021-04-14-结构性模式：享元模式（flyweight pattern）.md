---
layout:     post
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - DesignPattern
---
享元模式的设计思想是尽量复用已创建的对象，常用于工厂方法内部的优化
因此，享元模式就是通过工厂方法创建对象，在工厂方法内部，很可能返回缓存的实例，而不是新创建实例，从而实现不可变实例的复用

```
class student{
	public $id;
	public $name;
	private $redis;
	
	public function __construct($id, $name){
		$this->id = $id;
		$this->name = $name;
		
		$redis = new \Redis();
		$redis->connect('127.0.0.1', 6379);
		$this->redis = $redis;
	}

	public function create(){
		$cacheKey = 'student' . $this->id;
		$tmpGet = $this->redis->get($cacheKey);
		if(!$tmpGet){
			echo 'create new student' . PHP_EOL;
			$student = new student($this->id, $this->name);
			$this->redis->set($cacheKey, serialize($student));
		}else{
			echo 'from cache' . PHP_EOL;
			$student = unserialize($tmpGet);
			echo $student->id . ' name is : ' . $student->name;
		}
		
		return $student;
	}
	
}

$obj = new student(1, 'tom');
$result = $obj->create();
```
