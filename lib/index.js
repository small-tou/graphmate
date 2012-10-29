var GraghMate=function(){
  var timer
  var groups={
    
  }
  var width,height;
  var canvas,ctx;
  var colors=[
  "#ff6700",
  "#ddd",
  "#999",
  "#ff0000",
  "#00ff00"
  ]
  var randomColor=function(){
    var length=colors.length;
    return colors[Math.floor(Math.random()*length)]
  }
  return {
    init:function(){
      var canvas=document.createElement("canvas")
      document.body.appendChild(canvas)
      canvas.style.position="absolute"
      canvas.style.left="0"
      canvas.style.top="0"
      canvas.style.zIndex="1000000000";
      canvas.style.pointerEvents="none";
      width=document.body.clientWidth;
      height=document.body.offsetHeight;
      canvas.width=width;
      canvas.height=height;
      ctx=canvas.getContext("2d");
      timer=setInterval(function(){
        GraghMate._render()
      },100)
    },
    /*
     *每次新建一个跟踪，都会赋给随机的颜色，用此颜色描绘跟踪
     * options.type  跟踪类型
     * type=points  跟踪点，会在点之间画连接线。
     * type=element 跟踪html元素，在元素四周画连接线。
     * 
     * options.points=[]
     */
    track:function(options){
      if(options.type=="points"){
        options.color=randomColor();
        groups[options.id]=options
      }
    },
    _render:function(){
      ctx.clearRect(0,0,width,height)
      
      for(var i in groups){
        var group=groups[i]
        ctx.beginPath();
        ctx.strokeStyle=group.color
        ctx.lineWidth=1;
        ctx.moveTo(group.points[0]().x,group.points[0]().y)
        for(var n =1;n<group.points.length;n++){
          ctx.lineTo(group.points[n]().x,group.points[n]().y)
        }
        ctx.stroke();
        ctx.closePath();
      }
    }
  }
}();