职责链模式（又叫责任链模式），可以一级级把请求往下传递下去。

```
<?php

/**
 * 设计这样一个场景：一个http请假，需要3个判断。1.是否是爬虫 2.是否登录 3.是否有权限。都通过的话，返回success，否则返回failed
 *
 * 这样做的好处就是不需要把3个判断写在一个方法里。符合单一职责原则，也符合开闭原则，松耦合
 */
class httpRequest{
    public $notFrequency;//是否频繁访问，true代表正常，如果是false，表示是frequency，代表是爬虫
    public $isLogin;//是否登录
    public $hasPermission;//是否有权限
}

abstract class handler{
    public $next;

    public function setNext(handler $next){
        $this->next = $next;
    }

    abstract function process(httpRequest $request);
}


class frequencyHandler extends handler{

    public function process(httpRequest $request){
        if($request->notFrequency){//正常访问
            echo '不是爬虫' . "\n";
            if($this->next){//如果有下个步骤
                if($this->next->process($request)){//下级通过
                    return true;
                }else{
                    return false;
                }
            }else{
                return true;
            }
        }else{//爬虫
            return false;
        }
    }

}

class loginHandler extends handler{

    public function process(httpRequest $request){
        if($request->isLogin){//正常访问
            echo '登录成功' . "\n";
            if($this->next){//如果有下个步骤
                if($this->next->process($request)){//下级通过
                    return true;
                }else{
                    return false;
                }
            }else{
                return true;
            }
        }else{//爬虫
            return false;
        }
    }

}

class permissionHandler extends handler{

    public function process(httpRequest $request){
        if($request->hasPermission){//正常访问
            echo '有权限' . "\n";
            if($this->next){//如果有下个步骤
                if($this->next->process($request)){//下级通过
                    return true;
                }else{
                    return false;
                }
            }else{
                return true;
            }
        }else{//爬虫
            return false;
        }
    }

}


$request = new httpRequest();
$request->notFrequency = true;//可以更改这里的参数试下，true or false
$request->isLogin = true;//可以更改这里的参数试下，true or false
$request->hasPermission = true;//可以更改这里的参数试下，true or false

$frequency = new frequencyHandler();
$login = new loginHandler();
$permission = new permissionHandler();

$frequency->setNext($login);
$login->setNext($permission);

$frequency->process($request);

```

参考：https://www.jianshu.com/p/9a1aab8e9719
