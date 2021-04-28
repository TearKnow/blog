在看https://github.com/GuoZhaoran/spikeSystem案例的时候发现有用channel作为锁的功能，看了下不太明白，所以自己写了个小例子，能成功模拟出锁的功效，成功的例子，使用ab模拟高并发，貌似是串行的，因为能明显感受到请求baidu的100个链接

并发命令：ab -n 100 -c 100 192.168.1.53:3005/sayHi

```
package main

import (
    "fmt"
    "net/http"
    "log"

)

var (
	done chan int
)

func init() {
	done = make(chan int, 1)
	done <- 1
}

var globalnum = 1

//为什么 https://github.com/GuoZhaoran/spikeSystem 里需要 done <- 1 这样的，但是去掉又不对。但是在这个例子中又不会有问题

func sayHi(w http.ResponseWriter, r *http.Request)  {
	x := <-done
	fmt.Println(globalnum) //在终端打印的
    fmt.Fprint(w, x) //页面上打印的
	
	rsp , _:= http.Get("http://www.baidu.com")
	_ = rsp
	
	globalnum += 1
	
	done <- 1
}

func main() {
    http.HandleFunc("/sayHi", sayHi)
    log.Fatal(http.ListenAndServe("0.0.0.0:3005", nil))
}
```

1. 错误1
如果把网络channel去掉，像下面的代码，则打印的globalnum就是错的了，次数类似打印1个1和99个2，其实在并发100个的时候，就请求了2次baidu
```
func sayHi(w http.ResponseWriter, r *http.Request)  {
	//x := <-done
	fmt.Println(globalnum) //在终端打印的
    //fmt.Fprint(w, x) //页面上打印的
	
	rsp , _:= http.Get("http://www.baidu.com")
	_ = rsp
	
	globalnum += 1
	
	//done <- 1
}
```

2. 在#1的基础上，不请求网络，也就是不需要耗时的情况时，是打印1~100
```
func sayHi(w http.ResponseWriter, r *http.Request)  {
	//x := <-done
	fmt.Println(globalnum) //在终端打印的
    //fmt.Fprint(w, x) //页面上打印的
	
	//rsp , _:= http.Get("http://www.baidu.com")
	//_ = rsp
	
	globalnum += 1
	
	//done <- 1
}
```

3. 这样写也是可以的
```
package main

import (
    "fmt"
    "net/http"
    "log"

)

var (
    done chan int
)

func init() {
    done = make(chan int, 1)
    //done <- 1
}

var globalnum = 1

//为什么 https://github.com/GuoZhaoran/spikeSystem 里需要 done <- 1 这样的，但是去掉又不对。但是在这个例子中又不会有问题

func sayHi(w http.ResponseWriter, r *http.Request)  {
    
	done <- 1
    fmt.Println(globalnum) //在终端打印的
    
    
    rsp , _:= http.Get("http://www.baidu.com")
    _ = rsp
    
    globalnum += 1
    
    x := <-done
	fmt.Fprint(w, x) //页面上打印的
}

func main() {
    http.HandleFunc("/sayHi", sayHi)
    log.Fatal(http.ListenAndServe("0.0.0.0:3005", nil))
}
```

不太明白其中的原理为什么会出现，参考这2篇文章 (onedrive\go channel 001目录)
https://www.cnblogs.com/wongbingming/p/13035179.html
https://studygolang.com/articles/6024

主要是因为如果通道带缓冲，发送方则会阻塞直到发送的值被拷贝到缓冲区内；如果缓冲区已满，则意味着需要等待直到某个接收方获取到一个值。接收方在有值可以接收之前会一直阻塞。

怎么理解上面那句话呢，就是缓冲区里满了，下次在写入会被阻塞。比如如下代码，缓冲区满了，后面的第二次就被阻塞了，第一次的接受方一直没获取，导致代码被阻塞了（接收方在有值可以接收之前会一直阻塞）。
```
func sayHi(w http.ResponseWriter, r *http.Request)  {
	done <- 1
    fmt.Println(globalnum) //在终端打印的
    
    rsp , _:= http.Get("http://www.baidu.com")
    _ = rsp
    
    globalnum += 1
    
    //x := <-done
	fmt.Fprint(w, 1) //页面上打印的
}
```
