在laravel中，使用了Symfony来创建请求的，里面有这么一段

```
    private static function createRequestFromFactory(array $query = [], array $request = [], array $attributes = [], array $cookies = [], array $files = [], array $server = [], $content = null)
    {
        if (self::$requestFactory) {
            $request = (self::$requestFactory)($query, $request, $attributes, $cookies, $files, $server, $content);

            if (!$request instanceof self) {
                throw new \LogicException('The Request factory must return an instance of Symfony\Component\HttpFoundation\Request.');
            }

            return $request;
        }

        return new static($query, $request, $attributes, $cookies, $files, $server, $content);
    }
```
new static就是实例化自己，但是与new self是有点区别的。new static与new self需要在父类里才有作用，new static 返回的是调用者本身，new self是父类
```
<?php
class B{
    public static function func(){
        return new static();
    }

    public static function funcself(){
        return new self();
    }
}

class A extends B{

}

$obj = A::func();
var_dump(get_class($obj));//打印"A"

$obj = A::funcself();
var_dump(get_class($obj));//打印"B"
```
