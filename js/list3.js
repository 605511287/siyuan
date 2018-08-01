window.onload=function(){
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
}