---
layout:     post
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - Tensorflow
---
例子说明：
有10个样本，每个样本有6种类型的预测值，可以认为是有十行六列的matrix，里面的值代表各个分类的百分比，比如某个样本[0, 0, 0.2, 0.6, 0.1, 0.1]，那边代表3的概率为60%（0.6的索引值为3)，实际的预测值为2。经过排序后为[0.6, 0.2, 0.1, 0.1, 0 , 0]对应的index也就是预测值为[3,2,4,5,0,1]，那么top1的概率为0/1=0(前1个里没有2)，top2的概率为1/1=100%（前2个中有2）。  
```
def accuracy(output, target, topk):
    eachProb = tf.argsort(output, direction='DESCENDING') #这里指每个样本0-5的概率，最大概率的排在前面。
    eachTop = tf.transpose(eachProb, perm=[1, 0])#转置一下，变成shape为[6,10] 第一行代表top1的预测，第一 二行代表top2的预测（在第一 二中满足一个就算预测对了）
    batch_size = target.shape[0]

    target_ = tf.broadcast_to(target, eachTop.shape)
    #print(eachTop)
    #print(target_)

    correct = tf.equal(eachTop, target_)
    #print(correct)

    correctNum = tf.cast(correct, dtype=tf.int32)
    print(correctNum)

    res = []
    for i in topk:
        topIRows = correctNum[:i]
        sum = tf.reduce_sum(topIRows)
        res.append(float(sum.numpy() * (100.0 / batch_size) ))#float32 和 int32是不能做乘法的
    return res

output = tf.random.normal([10, 6])#10个样本，每个样本有6个分类（可以认为是0-5的数值）
output = tf.math.softmax(output, axis=1)
target = tf.random.uniform([10], maxval=6, dtype=tf.int32)

acc = accuracy(output, target, (1,2,3,4,5,6))#第三个参数指top1，top2...top6的概率，有一个对就算对了
print(acc)
```
