---
layout:     post
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - Laravel
---
**背景：想知道web.php这个文件是如何被加载运行的**

在sendRequestThroughRouter()中会启动一些类
```
public function bootstrap()
{
	if (! $this->app->hasBeenBootstrapped()) {
		$this->app->bootstrapWith($this->bootstrappers());
	}
}

public function bootstrapWith(array $bootstrappers)
{
	$this->hasBeenBootstrapped = true;
	/*
	$bootstrappers 打印出
	array(6) {
	  [0]=>
	  string(56) "Illuminate\Foundation\Bootstrap\LoadEnvironmentVariables"
	  [1]=>
	  string(49) "Illuminate\Foundation\Bootstrap\LoadConfiguration"
	  [2]=>
	  string(48) "Illuminate\Foundation\Bootstrap\HandleExceptions"
	  [3]=>
	  string(47) "Illuminate\Foundation\Bootstrap\RegisterFacades"
	  [4]=>
	  string(49) "Illuminate\Foundation\Bootstrap\RegisterProviders"
	  [5]=>
	  string(45) "Illuminate\Foundation\Bootstrap\BootProviders"
	}
	*/

	foreach ($bootstrappers as $bootstrapper) {
		$this['events']->dispatch('bootstrapping: '.$bootstrapper, [$this]);

		$this->make($bootstrapper)->bootstrap($this);

		$this['events']->dispatch('bootstrapped: '.$bootstrapper, [$this]);
	}
}
```
**代码1**

上面会运行6个类，这里举例了RegisterProviders的过程，也就是上面中的第5个
```
//在代码1中进行bootstrap，这里是Illuminate\Foundation\Bootstrap\RegisterProviders
public function bootstrap(Application $app)
{
	$app->registerConfiguredProviders();
}

//上面RegisterProviders的bootstrap中运行了如下方法
public function registerConfiguredProviders()
{
    //Illuminate里和app里的分开
	$providers = Collection::make($this->config['app.providers'])
					->partition(function ($provider) {
						return Str::startsWith($provider, 'Illuminate\\');
					});

    //添加一些其它的类文件
	$providers->splice(1, 0, [$this->make(PackageManifest::class)->providers()]);
    //所有的provider，真正去注册 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	(new ProviderRepository($this, new Filesystem, $this->getCachedServicesPath()))
				->load($providers->collapse()->toArray());
}

//接上面最后一行Illuminate\Foundation\ProviderRepository.php
public function load(array $providers)
{
    //这里foreach的是很多的provider
	foreach ($manifest['eager'] as $provider) {
	    $this->app->register($provider);//注册provider，运行每个provider的register方法
    }
}
```
到这里所有的provider register结束。

***上面是Illuminate\Foundation\Bootstrap\RegisterProviders的运行过程***
***下面是Illuminate\Foundation\Bootstrap\BootProviders的运行过程，在代码1中，这个会最后运行***
IIlluminate\Foundation\Bootstrap\BootProviders.php 对app进行了boot
```
//Illuminate\Foundation\Bootstrap\BootProviders.php
public function bootstrap(Application $app)
{
	$app->boot();
}

//Illuminate\Foundation\Application.php
public function boot()
{
	//对每个service provider进行bootProvider操作
	array_walk($this->serviceProviders, function ($p) {
		$this->bootProvider($p);
	});
}
//对每个provider进行boot操作
protected function bootProvider(ServiceProvider $provider)
{
	if (method_exists($provider, 'boot')) {
		return $this->call([$provider, 'boot']);
	}
}
```
会自动运行每个provider的boot方法，所以到了这里就能看RouteServiceProvider.php 中的boot方法到底做了什么，因为它也是provider中的一个。

**分析route的boot方法，下面是来自不同文件的方法，为了看起来方便，把它们整合到了一起**
```
public function boot()
{
	$this->loadRoutes();

	$this->app->booted(function () {
		$this->app['router']->getRoutes()->refreshNameLookups();
		$this->app['router']->getRoutes()->refreshActionLookups();
	});
}

protected function loadRoutes()
{
	if (method_exists($this, 'map')) {
		$this->app->call([$this, 'map']);
	}
}

public function map()
{
	$this->mapApiRoutes();
	$this->mapWebRoutes();
}

protected function mapWebRoutes()
{
	Route::middleware('jack route web');

	Route::middleware('web')
		 ->namespace($this->namespace)
		 ->group(base_path('routes/web.php'));
}
```
到这里就一步步分析了web.php是如何被加载的。也许会疑问group是什么作用，为什么web.php传进了这个group里，继续来研究。。。

其实在Route::middleware('web')是没有middleware这个静态方法的，所以调用的是Illuminate\Routing\Router.php中的__call 这个魔术方法，在这个__call里其实是new 的RouteRegistrar，所以到Illuminate\Routing\RouteRegistrar.php中找group方法。
```
public function group($callback)
{
	/*
	 * array(2) {
		  ["middleware"]=>
		  array(1) {
			[0]=>
			string(3) "web"
		  }
		  ["namespace"]=>
		  string(20) "App\Http\Controllers"
		}
		$callback就是group里传入的文件路径
	 * */


	$this->router->group($this->attributes, $callback);
}

//Illuminate\Routing\Router.php
public function group(array $attributes, $routes)
{
    //放入到$this->groupStack中
	$this->updateGroupStack($attributes);

	$this->loadRoutes($routes);

	array_pop($this->groupStack);
}

protected function loadRoutes($routes)
{
	if ($routes instanceof Closure) {
		$routes($this);
	} else {
        //传入web.php的路径，D:\sites\laravel\routes\web.php
		(new RouteFileRegistrar($this))->register($routes);
	}
}

public function register($routes)
{
	$router = $this->router;

	require $routes;//这里就把web.php require进来了
}
```
到这里解释了web.php是如何被加载进来的 : )
