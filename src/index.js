$(function(){
  //对象move存放所有变量,所有的函数修改的都是move对象里的属性值，draw()最后用的是move里的属性值。
    var move={
      top:200,//左边距
      left:300,//上边距
      direction:1,//（0-左  1-上  2-右  3-下）
      current:0//当前角度
    }
    //方向变化
    function rotate(dir){
      switch(dir){
        case "left":
          move.current=(move.current-90)%360;
          draw();
          move.direction-=1;
          break;
        case "right":
          move.current=(move.current+90)%360;
          draw();
          move.direction+=1;
          break;
        case "back":
          move.current=(move.current+180)%360;
          draw();
          move.direction+=2;
          break;
        case "go":
          go();
          break;
      }
    }
    //前进
    function go(){
      move.direction=move.direction%4+(move.direction%4<0?4:0);
      if(move.direction==0&&move.left>0){
        move.left-=50;
        draw();
      }else if(move.direction==1&&move.top>0){
        move.top-=50;
        draw();
      }else if(move.direction==2&&move.left<450){
        move.left+=50;
        draw();
      }else if(move.direction==3&&move.top<450){
        move.top+=50;
        draw();
      }else{
        alert("移动超出范围");
      }
    }

    $("#go").on("click",function(){
      go();
    })
    $("#tunLef").on("click",function(){
      rotate("left");
    })
    $("#tunRig").on("click",function(){
      rotate("right");
    })
    $("#tunBac").on("click",function(){
      rotate("back");
    })
    //重画

    function draw(){
      $("#box").css("transform",'rotate('+ (move.current) +'deg)');
      $("#box").css("left",move.left +'px');
      $("#box").css("top",move.top +'px');
    }
    draw();
})