graphmate
=========

在web前端涉及到图形和坐标的调试时候的伴侣工具

开发中，勿使用。

###用法一：跟踪点
效果：每个跟踪的点之间都会显示一条线，100ms更新一次位置
```
var point1,point2;
GraghMate.track({
  type:"points",
  id:"test", //每个跟踪有唯一的id，请制定，之后可以覆盖此id的points
  points:[
  function(){
    return point1; //列表里的每个方法必须返回一个带有x和y属性的对象。
  },
  function(){
    return point2;
  }
  ]
})
```