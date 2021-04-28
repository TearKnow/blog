---
layout:     post
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - Tensorflow
---
找出2d函数的最小值 f(x, y) = (x^2 + y - 11)^2 + (x + y^2 - 7)^2，有4个最小值，根据初始化的默认值的不同，回得到不同的结果
```
def myFunc(x):#矩阵运算
    return (x[0] ** 2 + x[1] - 11) ** 2 + (x[0] + x[1] ** 2 - 7) ** 2

x = np.arange(-6, 6, 0.1)
y = np.arange(-6, 6, 0.1)
X, Y = np.meshgrid(x, y)

Z = myFunc([X, Y])
print(X.shape)
print(Z.shape)

x = tf.constant([2., 5.])#初始化的默认值

for i in range(200):#迭代200次
    with tf.GradientTape() as tape:
        tape.watch([x])
        y = myFunc(x)

    grads = tape.gradient(y, [x])
    x = x - 0.01 * grads[0]

    print(x.numpy(), y.numpy())

```
