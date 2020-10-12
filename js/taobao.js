window.onload=function(){
    //地区选择
    var ChineseDiv=document.querySelector("#Chinese div");
    var countryLi=document.querySelectorAll(".country li");
    for(var i=0;i<countryLi.length;i++){
        countryLi[i].onclick=function(){
            ChineseDiv.innerHTML=this.innerHTML;
        }
    }
    //网址导航li宽度设置
    var webNavLi=document.querySelectorAll(".web-site-nav-2 li");
    var liContent;
    for(var i=0;i<webNavLi.length;i++){
        liContent=webNavLi[i].innerHTML;
        if(liContent.length==2){
            webNavLi[i].style.width=25+"px";
        }else if(liContent.length==3){
            webNavLi[i].style.width=40+"px";
        }else if(liContent.length==4){
            webNavLi[i].style.width=50+"px";
        }else if(liContent.length==5){
            webNavLi[i].style.width=60+"px";
        }else if(liContent.length==6){
            webNavLi[i].style.width=75+"px";
        }
    }
    //搜索栏样式设置
    var search1=document.querySelectorAll(".search-1 span");
    var search2=document.querySelector(".search-2-1");
    var search3=document.querySelector(".search-3");
        search1[0].onclick=function(){
            this.className="search-1-1";
            search1[1].className="search-1-2";
            search1[2].className="search-1-2";
            search2.value="请输入搜索物品";
        }
        search1[1].onclick=function(){
            this.className="search-1-1";
            search1[0].className="search-1-2";
            search1[2].className="search-1-2";
            search2.value="";
        }
        search1[2].onclick=function(){
            this.className="search-1-1";
            search1[0].className="search-1-2";
            search1[1].className="search-1-2";
            search2.value="";
        }
        search2.onfocus=function(event){
            event=event || window.event;
            this.value="";
        }
    var delQrcode=document.querySelector(".qrcode a");
    var qrcode=document.querySelector(".qrcode");
        delQrcode.onclick=function(){
            qrcode.innerHTML="";
        }
    //设置链接二级菜单
    var fourthFloor1=document.querySelectorAll(".fourthFloor-1-1");
    var link=document.querySelectorAll(".fourthFloor-1-1-2");
    var index;
    for(var i=0;i<fourthFloor1.length;i++){
        fourthFloor1[i].num=i;
        fourthFloor1[i].onmouseover=function(event){
            event=event || window.event;
            index=this.num;
            for(var j=0;j<link.length;j++){
                link[j].style.top=-3-index*32+"px";
            }
        }
    }
    //轮播图设置
    function getStyle(obj,name){
        if(window.getComputedStyle){
            return getComputedStyle(obj,null)[name];
        }else{
            return obj.currentStyle[name];
        }
    }
    function move(obj,attr,speed,target,callback){
        clearInterval(obj.timer);
        var current=parseInt(getStyle(obj,attr));
        if(current>target){
            speed=-speed;
        }
        obj.timer=setInterval(function(){
            var oldValue=parseInt(getStyle(obj,attr));
            var newValue=oldValue+speed;
            if(speed<0 && newValue<target || speed>0 && newValue>target){
                newValue=target;
            }
            obj.style[attr]=newValue+"px";
            if(newValue==target){
                clearInterval(obj.timer);
                callback && callback();
            }
            
        },30);
    }
    var fourthFloor213=document.querySelector(".fourthFloor-2-1-3");
    var fourthFloor213A=document.querySelectorAll(".fourthFloor-2-1-3 a");
    var fourthFloor211=document.querySelector(".fourthFloor-2-1-1");
    var fourthFloor211Li=document.querySelectorAll(".fourthFloor-2-1-1 li");
    var index=0;
    var prev=document.getElementById("prev");
    fourthFloor213A[0].style.backgroundColor="#ff5000";
    for(var i=0;i<fourthFloor213A.length;i++){
        fourthFloor213A[i].num=i;
        fourthFloor213A[i].onclick=function(){
            clearInterval(timer);
            index=this.num;
            move(fourthFloor211,"left",50,-520-520*index,function(){
                setA();
                autoChange();
            });
        }
    }
    //设置导航点
    function setA(){
        if(index>fourthFloor213A.length-1){
            index=0;
            fourthFloor211.style.left=-520+"px";
        }
        for(var i=0;i<fourthFloor213A.length;i++){
            fourthFloor213A[i].style.backgroundColor="";  
        }
        fourthFloor213A[index].style.backgroundColor="#ff5000";
    }
    var prev=document.getElementById("prev");
    var next=document.getElementById("next");
    prev.onclick=function(){
        clearInterval(timer);
        var nowValue=parseInt(getStyle(fourthFloor211,"left"));
        index--;
        if(index<0){
            index=4;
        }
        setA();
        move(fourthFloor211,"left",50,nowValue+520,function(){
            if(parseInt(fourthFloor211.style.left)>-520){
                fourthFloor211.style.left=-2600+"px";
            }
            autoChange();
        });
    }
    next.onclick=function(){
        clearInterval(timer);
        var nowValue=parseInt(getStyle(fourthFloor211,"left"));
        index++;
        if(index>4){
            index=0;
        }
        setA();
        move(fourthFloor211,"left",50,nowValue-520,function(){
            if(parseInt(fourthFloor211.style.left)<-2600){
                fourthFloor211.style.left=-520+"px";
            }
            autoChange();
        });
    }
    //设置第一个轮播图自动切换
    var timer;
    function autoChange(){
        timer=setInterval(function(){
            index++;
            move(fourthFloor211,"left",20,-520-520*index,function(){
                setA();
            });
        },3000);
    }
    autoChange();
    //设置按钮切换
    var slide=document.getElementById("slide");
    slide.style.width=104+"px";
    var prev1=document.getElementById("prev1");
    var next1=document.getElementById("next1");
    var fourthFloor241=document.querySelector(".fourthFloor-2-4-1");
    var fourthFloor241Li=document.querySelectorAll(".fourthFloor-2-4-1 li");
    var count=document.getElementById("count");
    var index1=0;
    prev1.onclick=function(){
        clearInterval(timer1);
        index1--;
        move(fourthFloor241,"left",50,-520-520*index1,function(){
            if(index1<0){
                index1=4;
                fourthFloor241.style.left=-2600+"px";
                slide.style.left=416+"px";
            }
            count.innerHTML=index1+1;
            move(slide,"left",50,104*index1,function(){
                if(index1<0){
                    index1=4;
                }
            });
            autoChange2();
        });
    }
    next1.onclick=function(){
        clearInterval(timer1);
        index1++;
        move(fourthFloor241,"left",50,-520-520*index1,function(){
            if(index1>4){
                index1=0;
                fourthFloor241.style.left=-520+"px";
                slide.style.left=0+"px";
            }
            count.innerHTML=index1+1;
            move(slide,"left",50,104*index1,function(){
                if(index1>4){
                    index1=0;
                }
            });
            autoChange2();
        });
    }
    //设置第二个轮播图自动切换
    var timer1;
    function autoChange2(){
        timer1=setInterval(function(){
            index1++;
            move(fourthFloor241,"left",50,-520-520*index1,function(){
                if(index1>4){
                    index1=0;
                    fourthFloor241.style.left=-520+"px";
                    slide.style.left=0+"px";
                }
                count.innerHTML=index1+1;
                move(slide,"left",50,104*index1,function(){
                    if(index1>4){
                        index1=0;
                    }90
                });
            });
        },3000);
    }
    autoChange2();

    //设置公告栏
    var fourthFloor431A=document.querySelectorAll(".fourthFloor-4-3-1 a");
    var fourthFloor432=document.querySelectorAll(".fourthFloor-4-3-2");
    var index2=0;
    for(var i=0;i<fourthFloor431A.length;i++){
        fourthFloor431A[i].num=i;
        fourthFloor431A[i].onmouseover=function(){
            index2=this.num;
            for(var j=0;j<fourthFloor432.length;j++){
                fourthFloor432[j].style.display="none";
            }
            fourthFloor432[index2].style.display="flex";
            for(var n=0;n<fourthFloor431A.length;n++){
                fourthFloor431A[n].style.fontWeight=""; 
                fourthFloor431A[n].style.borderBottom="";
            }
            fourthFloor431A[index2].style.fontWeight="700";
            fourthFloor431A[index2].style.borderBottom="2px"+" "+"solid"+" "+"#f40"; 
        }
    }
    //设置服务
    var allA=document.querySelectorAll(".fourthFloor-4-4-1 a");
    for(var i=0;i<allA.length;i++){
        allA[i].style.width=286/4+"px";
    }
}