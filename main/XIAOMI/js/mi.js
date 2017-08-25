// 头部购物车开始
{
    const car=document.querySelector(".car");
    const carYin=document.querySelector(".car-Yin");
    car.onmouseover=function(){
        carYin.style.height="100px";
        carYin.style.boxShadow="0px 0px 0px 3px #f5f5f5";
    }
    car.onmouseout=function(){
        carYin.style.height="0px";
        carYin.style.boxShadow="0px 0px 0px 0";
    }
}
// 导航开始
{
    const navHidden=document.querySelectorAll(".nav-hidden");
    const bigli=document.querySelectorAll(".bigli");
    bigli.forEach(function(ele,index){
        ele.onmouseover=function(){
            navHidden[index].style.height=231+"px";
            navHidden[index].style.borderTop="1px solid #ccc";
        }
        ele.onmouseout=function(){
            navHidden[index].style.height=0+"px";
            navHidden[index].style.borderTop="none";
        }
    })
}
// 导航结束
// banner开始
{
    const banner=document.querySelector(".banner");
    const dianlist=document.querySelectorAll(".lunbo li");
    const bannerlist=document.querySelectorAll(".bannerlist li");
    const prev=document.querySelector(".prev");
    const next=document.querySelector(".next");
    dianlist.forEach(function(ele,index){
        ele.onmouseover=function(){
            bannerlist.forEach(function(ele,index){
                dianlist[index].classList.remove("active");
                ele.classList.remove("active");
            })
            bannerlist[index].classList.add("active");
            ele.classList.add("active");
            num=index;
        }
    })
    let num=0;
    let move=function(){
        num++;
        if(num==dianlist.length){
            num=0;
        }
        if(num==-1){
            num=dianlist.length-1;
        }
        bannerlist.forEach(function(ele,index){
            dianlist[index].classList.remove("active");
            ele.classList.remove("active");
        })
        bannerlist[num].classList.add("active");
        dianlist[num].classList.add("active");
    }
    let st=setInterval(move,3000);
    banner.onmouseover=function(){
        clearInterval(st);
    }
    banner.onmouseout=function(){
        st=setInterval(move,3000);
    }
    prev.onclick=function(){
        num-=2;
        move();
    }
    next.onclick=function(){
        move();
    }
}
// banner左开始
{
    const banner=document.querySelector(".banner");
    const bigli=document.querySelectorAll(".fenlei-list>li");
    const yin=document.querySelectorAll(".fenlei-list>li>ul");
    bigli.forEach(function(ele,index){
        ele.onmouseover=function(){
            yin[index].style.display="block";
        }
        ele.onmouseout=function(){
            yin[index].style.display="none";
        }
    });
}
// 小米明星单品开始
{
    const Box=document.querySelector(".mxdplist");
    const prev=document.querySelector(".mxdp-more1");
    const next=document.querySelector(".mxdp-more2");
    let num=0;
    next.onmouseover = function () {
        next.style.color = "#ffac13";
    }
    prev.addEventListener("click", function () {
        Box.style.marginLeft = "0px";
        next.onmouseover = function () {
            next.style.color = "#ffac13";
        }
        prev.onmouseover = function () {
            prev.style.color = "#E2E0E0";
        }
    });
    next.onclick = function () {
        Box.style.marginLeft = "-1226px";
        next.onmouseover = function () {
            next.style.color = "#E2E0E0";
        }
        prev.onmouseover = function () {
            prev.style.color = "#ffac13";
        }
    }
    function move(){
        num+=5;
        if(num==5){
            Box.style.marginLeft="-1226px";

        }
        if(num==10){
            Box.style.marginLeft="0px";
            num=0;
        }
    }
    let st=setInterval(move,4000);
}
// 为你推荐开始
{
    const Box = document.querySelector(".wntjlist");
    const prev = document.querySelector(".mxdp-more11");
    const next = document.querySelector(".mxdp-more22");
    let num = 0;
    next.onmouseover = function () {
        next.style.color = "#ffac13";
    }
    prev.addEventListener("click", function () {
        Box.style.marginLeft = "0px";
        next.onmouseover = function () {
            next.style.color = "#ffac13";
        }
        prev.onmouseover = function () {
            prev.style.color = "#E2E0E0";
        }
    });
    next.onclick = function () {
        Box.style.marginLeft = "-1226px";
        next.onmouseover = function () {
            next.style.color = "#E2E0E0";
        }
        prev.onmouseover = function () {
            prev.style.color = "#ffac13";
        }
    }
}
// 内容开始
{
    function neirong(libox){
        const box=libox.querySelector(".nrUl2");
        const dianList=libox.querySelectorAll(".neirong-lunbo li");
        const prev=libox.querySelector(".neirong-more1");
        const next=libox.querySelector(".neirong-more2");
        let num=0;
        dianList.forEach(function(ele,index){
            num++;
            if(num==dianList.length){
                return;
            }
            ele.onclick=function(){
                box.style.marginLeft=-index*296+"px";
                // dianList[index].style.background="#fff";
                // dianList[index].style.border="2px solid #FF6702";
                dianList[index].classList.add("active4");
                console.log(dianList[index].background);
                dianList[num].classList.remove("active4");
                // dianList[num].style.background="#666";
                // dianList[num].style.border="2px solid #fff";
                num=index;
            }
            num=index;
        });
        next.addEventListener("click",function(){
            if(num==dianList.length-1){
                return;
            }
            num++;
            box.style.marginLeft=-num*296+"px";
            dianList.forEach(function(ele,index){
                ele.style.background="#666";
                ele.style.border="2px solid #fff";
            })
            dianList[num].style.background="#fff";
            dianList[num].style.border="2px solid #FF6702";
        })
        num=0;
        prev.onclick=function(){
            if(num==0){
                return;
            }
            num--;
            box.style.marginLeft=-num*296+"px";
            dianList.forEach(function(ele,index){
                ele.style.background="#666";
                ele.style.border="2px solid #fff";
            })
            dianList[num].style.background="#fff";
            dianList[num].style.border="2px solid #FF6702";
        }
    }
    const libox=document.querySelectorAll(".nr-main>li");
    libox.forEach(function(ele){
        neirong(ele);  
    });
}
// 家电开始
{
    const jdbox=document.querySelectorAll(".jdbox");
    function jiadian(jdbox){
        const jd=jdbox.querySelectorAll(".tex-left>ul li");
        const right=jdbox.querySelectorAll(".jiadian-main .right");
        const text=jdbox.querySelectorAll(".jiadian-tex .tex-left ul li a");
        jd.forEach(function(ele,index){
            ele.onmouseover=function(){
                right.forEach(function(ele,index){
                    ele.classList.remove("active4");
                    text[index].classList.remove("active5");
                });
                right[index].classList.add("active4");
                text[index].classList.add("active5");
            }
        });
    }
    jdbox.forEach(function(ele){
        jiadian(ele);
    });
}
//    按需加载
{
    let imgs=document.images;
    Array.from(imgs).forEach(function(ele){
        if(window.innerHeight>getPosition(ele)){
            ele.src=ele.getAttribute("data-src");
        }
    })
    window.addEventListener("scroll",function(){
        let st=document.body.scrollTop;
        Array.from(imgs).forEach(function(ele){
            if(st+window.innerHeight>getPosition(ele)){
                ele.src=ele.getAttribute("data-src");
            }
        })
    })
    function getPosition(obj){
        let ot=obj.offsetTop;
        let parent=obj.offsetParent;
        while(parent!==null&&parent.nodeName!=="BODY"){
            ot+=parent.offsetTop;
            parent=parent.offsetParent;
        }
        return ot;
    }
}
