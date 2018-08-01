window.onload=function(){
// 轮播图部分
    let index=document.querySelector(".indexflash");
    let imgbox=document.querySelectorAll(".imgBox");
    let a=document.querySelector(".imgBox a");
    let width=imgbox[0].offsetWidth;
    let now=0,next=0;
    console.log(width)
    let t=setInterval(move,3000);
    function move(){
        next++;
        if(next>1){
            next=0;
        }
        imgbox[next].style.left=width+"px";
        animate(imgbox[now],{left:-width},500);
        animate(imgbox[next],{left:0},500);
        now=next;
    }
    index.onmouseenter=function(){
        clearInterval(t);
    }
    index.onmouseleave=function(){
        t=setInterval(move,3000)
    }

// 头部导航
    let topnav=document.querySelectorAll(".nav .have");
    let hidenav=document.querySelectorAll(".hidenav");
    console.log(topnav,hidenav);
    topnav.forEach(function(value,index){
        value.onmouseenter=function(){
            hidenav[index].style.display="block";
        }
        value.onmouseleave=function(){
            hidenav[index].style.display="none";
        }
    })

// 新闻滚动
    let fa=document.querySelector(".text ul");
    let con=document.querySelector(".text");
    let s=setInterval(up,5000);
    let height=con.offsetHeight;
    console.log(height)
    let times=0;
    function up(){
        times++;
        if(times==6){
            fa.style.top=height+"px";
            times=0;
        }
        animate(fa,{top:-height*times},1000);
    }
}        