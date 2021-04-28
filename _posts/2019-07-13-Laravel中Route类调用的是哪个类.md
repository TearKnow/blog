**背景：web.php中Route::get() 调用的是哪个类下的方法**
这里的Route其实是个别名，在config/app.php中有设置，可以自己新建一个别名，然后在web.php里试下，知道了这个点后，就可以慢慢发现里面的奥秘。
```
'aliases' => [
    'Route' => Illuminate\Support\Facades\Route::class,
]
```
那么到底这里是如何通过别名来实现的呢？

其实没有什么思路，但是肯定的一点是用了配置文件的aliases，所以在整个项目中搜索“app.aliases”，所以在Illuminate\Foundation\Bootstrap\RegisterFacades.php中发现了它，这个类文件，其实也是在bootstrap的时候去运行的。

**以下代码对不同文件中的方法进行了合并**
```
public function bootstrap(Application $app)
{
	Facade::clearResolvedInstances();

	Facade::setFacadeApplication($app);

	AliasLoader::getInstance(array_merge(
		$app->make('config')->get('app.aliases', []),
		$app->make(PackageManifest::class)->aliases()
	))->register();//注释1
}

public static function getInstance(array $aliases = [])
{
	if (is_null(static::$instance)) {//到这里去了
		return static::$instance = new static($aliases);//new了一个当前类
	}

	$aliases = array_merge(static::$instance->getAliases(), $aliases);

	static::$instance->setAliases($aliases);

	return static::$instance;
}

//运行注释1中的register方法
public function register()
{
	if (! $this->registered) {
		$this->prependToLoaderStack();

		$this->registered = true;
	}
}

protected function prependToLoaderStack()
{
	spl_autoload_register([$this, 'load'], true, true);
}

//$this->aliases是所有的对应别名，但是这里的$alias是怎么传入的呢？？？可以参考下面例子
/*
function load($className){
	echo $className;//打印ABC
}
spl_autoload_register('load', true, true);
$obj = new ABC();
*/
public function load($alias)
{
	if (static::$facadeNamespace && strpos($alias, static::$facadeNamespace) === 0) {
		$this->loadFacade($alias);

		return true;
	}

	if (isset($this->aliases[$alias])) {
        //设置Illuminate\Support\Facades\Route 别名为Route
		return class_alias($this->aliases[$alias], $alias);
	}
}

```

***Illuminate\Support\Facades\Route又是怎么变成Illuminate\Routing\Router的呢？***
因为Illuminate\Support\Facades\Route中没有get方法(web.php中route::get()使用)，所以运行了父类Facade中的__callStatic方法
```
public static function __callStatic($method, $args)
{
	$instance = static::getFacadeRoot();

	if (! $instance) {
		throw new RuntimeException('A facade root has not been set.');
	}

	return $instance->$method(...$args);
}

public static function getFacadeRoot()
{
	return static::resolveFacadeInstance(static::getFacadeAccessor());//传的是router
}

//Illuminate\Support\Facades\Route.php中对getFacadeAccessor重写了
protected static function getFacadeAccessor()
{
	return 'router';
}

//app中的router给了它 ！！！！！！！！！！！
protected static function resolveFacadeInstance($name)
{
	if (is_object($name)) {
		return $name;
	}

	if (isset(static::$resolvedInstance[$name])) {
		return static::$resolvedInstance[$name];
	}

	return static::$resolvedInstance[$name] = static::$app[$name];
}

```
但是 static::$app[‘router’]又是什么时候赋值的呢？？？
在注释1中，其实就通过Facade::setFacadeApplication($app); 把app赋值给了static::$app，那就只要看app中的router是哪里来的就可以了。
其实在laravel\bootstrap\app.php中一开始实列化后就有这个key了。
```
public function __construct($basePath = null)
{
	if ($basePath) {
		$this->setBasePath($basePath);
	}

	$this->registerBaseBindings();
	$this->registerBaseServiceProviders();
	$this->registerCoreContainerAliases();
}

  
protected function registerBaseServiceProviders()
{
	$this->register(new RoutingServiceProvider($this));
}

class RoutingServiceProvider extends ServiceProvider
{
    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        $this->registerRouter();
    }

    protected function registerRouter()
    {
        $this->app->singleton('router', function ($app) {
            return new Router($app['events'], $app);
        });
    }
}
```
接着调用Illuminate\Routing\Router.php的convertToControllerAction方法，来获取实际的controller是什么。app\Providers\RouteServiceProvider.php中有设置了namespace，就是controller的位置在App\Http\Controllers
到这里就把所有的问题解释清楚了。

===========
2021-04-15更新
###所以Route::get();可以直接这么使用
```
<?php

//laravel中\Illuminate\Foundation\Bootstrap\RegisterFacades.php 其实就是给一些类取了别名。
/*
AliasLoader::getInstance(array_merge(
            $app->make('config')->get('app.aliases', []),
            $app->make(PackageManifest::class)->aliases()
        ))->register();

		
$this->prependToLoaderStack();


spl_autoload_register([$this, 'load'], true, true);


if (isset($this->aliases[$alias])) {
	return class_alias($this->aliases[$alias], $alias);
}
*/
class A{

}
class_alias('A', 'B');

$obj = new B;
echo "<pre>";
var_dump($obj);
```
