简单利用梯度的方法，更新权值，使得loss降低。
涉及到矩阵的相乘，[a, b]@[b, c] => [a, c]，
下面代码有三个层

```
import tensorflow as tf  
import numpy as np  
from tensorflow import keras  
from tensorflow.keras import datasets  
import os  
  
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'  
  
  
# 例子2. 前向传播 forward  
# 加载数据集 x:[60k, 28, 28]  y:[60k]  
(x, y), _ = datasets.mnist.load_data()  
  
# x:[0~255] 变化到 【0~1】 方便处理  
x = tf.convert_to_tensor(x, dtype = tf.float32) / 255.  
y = tf.convert_to_tensor(y, dtype = tf.int32)  
  
print(x.shape, y.shape, x.dtype, y.dtype)  
print(tf.reduce_min(x), tf.reduce_max(x))#灰度值的最大值和最小值  
print(tf.reduce_min(y), tf.reduce_max(y))  
  
train_db = tf.data.Dataset.from_tensor_slices((x, y)).batch(128) #128个为一组  
train_iter = iter(train_db)  
sample = next(train_iter)  
print('batch:', sample[0].shape, sample[1].shape)  
  
# [b, 784] => [b, 256] => [b, 128] => [b, 10]  
w1 = tf.Variable(tf.random.truncated_normal([784, 256], stddev = 0.1))#方差改成0.1 不然会梯度爆炸 !!!!!!!!!!!!  
b1 = tf.Variable(tf.zeros([256]))  
w2 = tf.Variable(tf.random.truncated_normal([256, 128], stddev = 0.1))  
b2 = tf.Variable(tf.zeros([128]))  
w3 = tf.Variable(tf.random.truncated_normal([128, 10], stddev = 0.1))  
b3 = tf.Variable(tf.zeros([10]))  
lr = 1e-3  
  
for epoch in range(10):#数据集重复10次  
    for step, (x, y) in enumerate(train_db):# 每个batch  
        # x:[128, 28, 28]  y:[128]  
        # h1 = x@w1 + b1  
        # x的维度变化一下，变成 x: [b, 784]  
        x = tf.reshape(x, [-1, 28*28])  
  
        with tf.GradientTape() as tape:  
            # [b, 784]@[784, 256] => [b, 256] + [256]  
            h1 = x@w1 + b1  
            h1 = tf.nn.relu(h1)  
            # 同理得到h2  
            h2 = h1@w2 + b2  
            h2 = tf.nn.relu(h2)  
  
            out = h2@w3 + b3  
  
            #计算误差  
            # out: [b, 10]  
            # y:[b] => [b, 10] 用one hot  
            y_onehot = tf.one_hot(y, depth=10)  
  
  
            #mse = mean((y-out)^2)  
            loss = tf.square(y_onehot - out)  
            loss = tf.reduce_mean(loss) #标量了  
  
        #完成梯度计算  
        grads = tape.gradient(loss, [w1, b1, w2, b2, w3, b3])  
  
        # w1 = w1 - lr*w1_grad  
  
        # 应该是这样用的，但是原来w1是tf.variable，减了后就不是varialbe了，所以报错了，所以用assign_sub  
        # w1 = w1 - lr * grads[0]  
        # b1 = b1 - lr * grads[1]  
        # w2 = w2 - lr * grads[2]  
        # b2 = b2 - lr * grads[3]  
        # w3 = w3 - lr * grads[4]  
        # b3 = b3 - lr * grads[5]  
        w1.assign_sub(lr * grads[0])  
        b1.assign_sub(lr * grads[1])  
        w2.assign_sub(lr * grads[2])  
        b2.assign_sub(lr * grads[3])  
        w3.assign_sub(lr * grads[4])  
        b3.assign_sub(lr * grads[5])  
  
        if step % 100 == 0:  
            print(epoch, step, 'loss:', float(loss))  
```
