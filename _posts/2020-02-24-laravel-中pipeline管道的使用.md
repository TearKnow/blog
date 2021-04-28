array_reduce的使用，利用管道可以指定的东西传递给每个任务，然后将结果返回给下一个任务，有点类似装饰器的感觉，见例子[https://www.jianshu.com/p/4108e3aa723e](https://www.jianshu.com/p/4108e3aa723e)

```
<?php
interface Middleware{
    public static function handle(Closure $next);
}

class What implements Middleware{
    public static function handle(Closure $next){
        echo 'start what'."\n";
        $next();
        echo 'next what'."\n";
    }
}

class StartSession implements Middleware{
    public static function handle(Closure $next){
        echo '开启session'."\n";
        $next();
        echo '保存session'."\n";
    }
}

class ShareErrorsFromSession implements Middleware{
    public static function handle(Closure $next){
        echo '如果session'."\n";
        $next();
        echo 'end如果session'."\n";
    }
}


function getSlice(){
    return function ($stack, $pipe){
        return function ()use($stack, $pipe){
            return $pipe::handle($stack);
        };
    };
}

function then(){
    $pipes = ['ShareErrorsFromSession', 'StartSession', 'What'];
    $firstSlice = function (){
        echo '请求向路由器传递'."\n";
    };
    $pipes = array_reverse($pipes);

    //输入顺序是 What, StartSession, ShareErrorsFromSession
    //输出顺序是 ShareErrorsFromSession， StartSession, What

    call_user_func(array_reduce($pipes, getSlice(), $firstSlice));
    //如果使用call_user_func(array_reduce($pipes, 'getSlice', $firstSlice));，那么getSlice要这么写（比较好理解，因为现在的getSlice有3个return不太好理解。可以这么理解array_reduce第二个参数直接传了一个方法，不是名字，那么现在的getSlice里的就是下面的方法）
    /*
function getSlice($stack, $pipe){
    return function ()use($stack, $pipe){
        $pipe::handle($stack);
    };
}
    */
}
then();

echo '-------------- test demo 与这个原理类似------------------'."\n";

$c = function (){
  echo 'this is c'."\n";
};

$a = function ()use($c){
  echo "start a \n";
  $c();
  echo "end a\n";
};

$b = function ()use($a){
    echo 'start b'."\n";
    $a();
    echo 'end b'."\n";
};

call_user_func($b);
```
