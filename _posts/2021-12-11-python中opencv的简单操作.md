---
layout:     post
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - Python
---

目的：学习opencv，例子中用到的文件在files\opencvFiles目录下

```python
import cv2
import numpy as np
import random

#step1. 读取视频

cap = cv2.VideoCapture('b.mp4')

while True:
    ret, frame = cap.read()
    if ret:
        frame = cv2.resize(frame, (0, 0), fx=0.4, fy=0.4)
        cv2.imshow('video', frame)
    else:
        break

    #waitKey是读取一帧的时间
    if cv2.waitKey(20) == ord('q'):
        break


#step2. 创建自己的图片

img = np.empty((300, 300, 3), np.uint8)

for row in range(300):
    for col in range(300):
        img[row][col] = [random.randint(0, 255), random.randint(0, 255), random.randint(0, 255)]

cv2.imshow('img', img)
cv2.waitKey(0)


#step3. 图片前300的高度颜色，变成随机颜色

img = cv2.imread('b.jpg')

for row in range(300):
    for col in range(img.shape[1]):
        img[row][col] = [random.randint(0, 255), random.randint(0, 255), random.randint(0, 255)]
cv2.imshow('img', img)
cv2.waitKey(0)


#step4. 截取图片

img = cv2.imread('b.jpg')
new_img = img[:150, :200]

cv2.imshow('img', img)
cv2.imshow('new_img', new_img)
cv2.waitKey(0)


#step5. 常用图片操作

img = cv2.imread('b.jpg')

#灰阶

gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
#高斯模糊

blur = cv2.GaussianBlur(img, (7, 7), 5)
#边缘

canny = cv2.Canny(img, 250, 250)
#膨胀

kernel = np.ones((3, 3), np.uint8)
kernel2 = np.ones((3, 3), np.uint8)
p = cv2.dilate(canny, kernel, iterations=1)
#变细(侵蚀)

erode = cv2.erode(p, kernel2, iterations=2)


#step6 图片上画图，写文字

img = np.zeros((600, 600, 3), np.uint8)
#画一条直线

cv2.line(img, (0, 0), (img.shape[1], img.shape[0]), (255, 0, 0), 1)
#画一个方块

cv2.rectangle(img, (0, 0), (300, 200), (0, 0, 255), cv2.FILLED)
#画一个圆

cv2.circle(img, (200, 500), 30, (0, 111, 255), cv2.FILLED)
#写文字

cv2.putText(img, 'Hello', (100, 400), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 255), 1)


#step7 侦察颜色

def empty(v):
    pass

cv2.namedWindow('TrackBar')
cv2.resizeWindow('TrackBar', 640, 320)
cv2.createTrackbar('Hue Min', 'TrackBar', 0, 179, empty)
cv2.createTrackbar('Hue Max', 'TrackBar', 179, 179, empty)
cv2.createTrackbar('Sat Min', 'TrackBar', 0, 255, empty)
cv2.createTrackbar('Sat Max', 'TrackBar', 255, 255, empty)
cv2.createTrackbar('Val Min', 'TrackBar', 0, 255, empty)
cv2.createTrackbar('Val Max', 'TrackBar', 255, 255, empty)


img = cv2.imread('XiWinnie.jpg')
img = cv2.resize(img, (0, 0), fx=0.5, fy=0.5)
hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV) #转成hsv格式，色彩，饱和度，亮度，容易过滤颜色

while True:
    h_min = cv2.getTrackbarPos('Hue Min', 'TrackBar')
    h_max = cv2.getTrackbarPos('Hue Max', 'TrackBar')
    s_min = cv2.getTrackbarPos('Sat Min', 'TrackBar')
    s_max = cv2.getTrackbarPos('Sat Max', 'TrackBar')
    v_min = cv2.getTrackbarPos('Val Min', 'TrackBar')
    v_max = cv2.getTrackbarPos('Val Max', 'TrackBar')
    print(h_min, h_max, s_min, s_max, v_min, v_max)

    lower = np.array([h_min, s_min, v_min])
    upper = np.array([h_max, s_max, v_max])

    mask = cv2.inRange(hsv, lower, upper)
    result = cv2.bitwise_and(img, img, mask=mask)#mask中白色的可以显示出来

    cv2.imshow('img', img)
    cv2.imshow('hsv', hsv)
    cv2.imshow('mask', mask)
    cv2.imshow('result', result)
    cv2.waitKey(1)


#step8 轮廓检查，形状判断（主要通过判断有几个顶点来决定）

img = cv2.imread('shape.jpg')
imgContour = img.copy()
img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
canny = cv2.Canny(img, 150, 200)
contours, hierarchy = cv2.findContours(canny, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)

for cnt in contours:
    cv2.drawContours(imgContour, cnt, -1, (255, 0, 0), 4) #画出轮廓

    area = cv2.contourArea(cnt)

    #print(cv2.contourArea(cnt)) #计算面积

    # print(cv2.arcLength(cnt, True)) #计算边长


    if area > 500:
        peri = cv2.arcLength(cnt, True) #边长

        vertices = cv2.approxPolyDP(cnt, peri * 0.02, True) #顶点

        corners = len(vertices) #顶点个数

        x, y, w, h = cv2.boundingRect(vertices) #轮廓

        cv2.rectangle(imgContour, (x, y), (x+w, y+h), (0, 255, 0), 4)
        if corners == 3:
            cv2.putText(imgContour, 'san', (x, y-5), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)
        elif corners == 4:
            cv2.putText(imgContour, 'si bian', (x, y - 5), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)
        elif corners == 5:
            cv2.putText(imgContour, 'wu', (x, y - 5), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)
        else:
            cv2.putText(imgContour, 'circle', (x, y - 5), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)

cv2.imshow('img', img)
cv2.imshow('canny', canny)
cv2.imshow('imgContours', imgContour)
cv2.waitKey(0)


#step9 人脸识别

img = cv2.imread('lenna.jpg')
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
faceCascade = cv2.CascadeClassifier('face_detect.xml') #载入模型，opencv的github中下载模型

faceRect = faceCascade.detectMultiScale(gray, 1.1, 3)
print(len(faceRect))

for (x, y, w, h) in faceRect:
    cv2.rectangle(img, (x, y), (x+w, y+h), (0, 255, 0), 2)

cv2.imshow('img', img)
cv2.waitKey(0)


# cv2.imshow('p', p)

# cv2.imshow('erode', erode)

# cv2.imshow('canny', canny)

# cv2.imshow('blur', blur)

# cv2.imshow('gray', gray)

# cv2.waitKey(0)

```