---
layout:     post
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - Javascript
---

背景：计算一个dom元素，可视内容占自身的百分比

```javascript

function getPercentVisible(node){
    if(!node||!node.getBoundingClientRect){
        return 0;
    }
    var nodeRect = node.getBoundingClientRect();
    var winRect={height:window.innerHeight, width:window.innerWidth};
    var visHeight=0;
    var visWidth=0;

    if(nodeRect.left>=0){
        visWidth=Math.min(nodeRect.width,winRect.width-nodeRect.left);
    }
    else if(nodeRect.right>0){
        visWidth=Math.min(winRect.width,nodeRect.right);
    }
    else{
        return 0;
    }

    if(nodeRect.top>=0){
        visHeight=Math.min(nodeRect.height, winRect.height - nodeRect.top);
    }else if(nodeRect.bottom>0){
        visHeight=Math.min(winRect.height,nodeRect.bottom);
    }else{
        return 0;
    }
    var vis = visHeight*visWidth;
    var ele=nodeRect.height*nodeRect.width;
    if(!ele){
        return 0;
    }
    return Math.max((vis / ele)*100,(visHeight / window.innerHeight)*100);
}

```