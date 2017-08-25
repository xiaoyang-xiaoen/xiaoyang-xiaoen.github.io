//banner开始
// banner 左 事件流
{
    const bannerBox = document.querySelector(".banner");
    const items=document.querySelectorAll(".banner-list .zwcli");
    const mask=document.querySelectorAll(".banner-list .zwcli .banner-mask");
    const bannerLeft = document.querySelector(".banner-left");
    // 事件流
    bannerLeft.onmouseover=function(){
        items.forEach(function(ele,index){
            ele.onmouseover=function(){
                mask.forEach(function(ele,index){
                    ele.style.display="none";
                })
                mask[index].style.display="block";
            }
            ele.onmouseout=function(){
                mask.forEach(function(ele){
                    ele.style.display="none";
                })
            }
            bannerLeft.onmouseout=function(e){
                var e=e||window.event;
                if(e.stopPropagation){
                    e.stopPropagation();
                }else{
                    e.cancelBubble=true;
                }
                e.stopPropagation();
            }
            bannerBox.onmouseout=function(){
                mask.style.display="none";
            }
        })
    }
}
// banner轮播
{
    const dian = document.querySelectorAll(".lunbo li");
    const bannerPic = document.querySelectorAll(".bannerPic li");
    const bannerBox = document.querySelector(".banner");
    const colorArray = ["#FAC809", "#FECB28", "#E8E8E8", "#730017", "#E8E8E8", "#42C1B6"];
    dian.forEach(function (ele, index) {
        ele.onmouseover = function () {
            bannerPic.forEach(function (ele, index) {
                ele.classList.remove("active2");
                dian[index].classList.remove("active2");
            })
            ele.classList.add("active2");
            bannerPic[index].classList.add("active2");
            bannerBox.style.background = colorArray[index];
            num = index;
        }
    })
    let num=1;
    let move = function () {
        num++;
        if (num == dian.length) {
            num = 0;
        }
        if (num == -1) {
            num = dian.length - 1;
        }
        bannerPic.forEach(function (ele, index) {
            ele.classList.remove("active2");
            dian[index].classList.remove("active2");
        })
        dian[num].classList.add("active2");
        bannerPic[num].classList.add("active2");
        bannerBox.style.background = colorArray[num];
    };
    let st=setInterval(move,2000);
    bannerBox.onmouseover=function(){
        clearInterval(st);
    }
    bannerBox.onmouseout=function(){
        st=setInterval(move,2000);
    }
}
//banner结束
// 直播开始
// 左上
{
    const itemsSmallImg = document.querySelectorAll(".zhibo-xiao li a .xiao-bofang1");
    const itemsBigImg = document.querySelectorAll(".zhiboBig");
    const itemsZhe = document.querySelectorAll(".zhibo-xiao li .zhiboZhe");
    itemsSmallImg.forEach(function (ele, index) {
        ele.onmouseover = function () {
            itemsBigImg.forEach(function (ele, index) {
                itemsZhe[index].style.display = "none";
                ele.style.display = "none";
            })
            itemsZhe[index].style.display = "block";
            itemsBigImg[index].style.display = "block";
        }
    })
}
// 直播左下
{
    const banner=document.querySelector(".zbyg-lunbo");
    const bannerlist=document.querySelectorAll(".zbyg-lunbo p");
    const box=document.querySelector(".zhibo-xiao");
    const prev=document.querySelector(".zhiboxiaoPrev");
    const next=document.querySelector(".zhiboxiaoNext");
    let num=0;
    setInterval(function(){
        num++;
        if(num==bannerlist.length){
           num=0;
        }
        banner.style.marginTop=-40*num+"px";
    },2000);
    prev.onclick=function(){
        box.style.marginLeft="0px";
        next.style.display="block";
        prev.style.display="none";
    }
    next.onclick=function(){
        box.style.marginLeft="-488px";
        prev.style.display="block";
        next.style.display="none";
    }
}
// 直播右边
{
    const right=document.querySelectorAll(".zhibo-right li");
    const zheZhao=document.querySelectorAll(".zhibo-right .yincang2");
    // console.log(right);
    // console.log(zheZhao);
    right.forEach(function(ele,index){
        ele.onmouseover=function(){
            zheZhao[index].style.opacity="1";
            // zheZhao[index].classList.add("active");
        }
        ele.onmouseout=function(){
            zheZhao[index].style.opacity="0";
            // zheZhao[index].classList.remove("active");
        }
    })
}
// 直播结束
// 换一批开始
{
    const ul1=document.querySelector(".zhibo-right1");
    const ul1li=document.querySelectorAll(".zhibo-right1 li");
    const ul2=document.querySelector(".zhibo-right2");
    const ul2li=document.querySelectorAll(".zhibo-right2 li");
    const hyp1=document.querySelector(".zhibo-right1>div");
    const hyp2=document.querySelector(".zhibo-right2>div");
    const hyp=document.querySelector(".zhibo-right");
    hyp1.addEventListener("click",function(){
        ul1li.forEach(function(ele){
            ele.style.transform="rotate3d(1,0,0,360deg)"
        })
        ul2.style.display="block";
        ul1.style.display="none";
    })
    hyp2.addEventListener("click",function(){
        ul1.style.display="block";
        ul2.style.display="none";
    })
    hyp.addEventListener("mouseover",function(){
        hyp.style.zIndex="999999";
    })
    hyp.addEventListener("mouseout",function(){
        hyp.style.zIndex="1";
    })
}
// 左浮层开始
//bug：如果只有刷新了之后 楼层跳转才起作用
//解决办法：将scrollTop的获取放在onclick事件之内
{
    const fuLeft=document.querySelector(".fucengLeft");
    const totop=document.querySelector(".dingbuFu");
    const btns=document.querySelectorAll(".fucengLeft .btn");
    const floors=document.querySelectorAll(".floor");
    let obj;
    window.addEventListener("scroll", function () {
        obj = document.body.scrollTop == 0 ? document.documentElement : document.body;
        // 浮层出现和隐藏
        let scrolltop = obj.scrollTop;
        if (scrolltop>=898) {
            fuLeft.style.cssText="width:36px;height:332px";
        }else{
            fuLeft.style.cssText="width:0px;height:0px";
        }
        // 回到顶层
        totop.onclick=function(){
            let time=2000;
            let speed=scrolltop/time*50;
            let st=setInterval(function(){
                scrolltop-=speed;
                obj.scrollTop=scrolltop;
                if(scrolltop<=0){
                    scrolltop=0;
                    clearInterval(st);
                }
            },50)
        }
        // 楼层跳转
        btns.forEach(function(ele,index){
            ele.onclick=function(){
                var ot=floors[index].offsetTop-50;
                animate(obj,{scrollTop:ot},500);
            }
        });
        // 设置颜色对应
        const colorarr=["#EA5F8D","#0AA6E8","#64C333","#F15453","#19C8A9","#F7A945","#FF0036"];
        let st=obj.scrollTop;
        for(let i=0;i<floors.length;i++){
            if(st>=floors[i].offsetTop-50){
                btns.forEach(function(ele){
                    ele.style.background="";
                });
                btns[i].style.background=colorarr[i];
            }
        }
    })
}
// 左浮层结束
// 右浮层开始
{
    const toTop=document.querySelector(".topFu");
    toTop.onclick=function() {
        let obj = document.body.scrollTop == 0 ? document.documentElement : document.body;
        let scrolltop = obj.scrollTop;
        let time = 2000;
        let speed = scrolltop / time * 50;
        let st = setInterval(function () {
            scrolltop -= speed;
            obj.scrollTop = scrolltop;
            if (scrolltop <= 0) {
                scrolltop = 0;
                clearInterval(st);
            }
        }, 50)
    }
    window.addEventListener("scroll", function () {
        let obj = document.body.scrollTop == 0 ? document.documentElement : document.body;
        let scrolltop = obj.scrollTop;
        if (scrolltop < 165) {
            toTop.style.display = "none";
        }else{
            toTop.style.display = "block";
        }
    })
}
// 小弹窗
{
    let items=document.querySelectorAll(".yiFu");
    let tips=document.querySelectorAll(".hidBox");
    let st;
    items.forEach(function(ele,index){
        hover(ele,function(){
            clearTimeout(st);
            st=setTimeout(function(){
                ele.style.background="red";
                tips[index].classList.add("flyIn");
            },200)
        },function(){
            clearTimeout(st);
            if(tips[index].classList.contains("flyIn")){
                tips[index].classList.add("flyOut");
            }
            ele.style.background="#050505";
        })
    });
    tips.forEach(function(ele,index){
        ele.addEventListener("animationend",function(){
            if(tips[index].classList.contains("flyOut")){
                ele.classList.remove("flyIn");
                ele.classList.remove("flyOut");
            }
        })
    })
    tips.forEach(function(ele){
        ele.onmouseover=function(e){
            e.stopPropagation();
        }
    });
}
// 二维码
{
    const erweima=document.querySelector(".erweimaFu");
    const yinc=document.querySelector(".ewm-fuRight");
    erweima.onmouseover=function(){
        yinc.style.display="block";
    }
    erweima.onmouseout=function(){
        yinc.style.display="none";
    }
}
// 右浮层结束

// 上浮层开始
{
    const fuceng = document.querySelector(".fucengTop");
    window.addEventListener("scroll", function () {
        let obj = document.body.scrollTop == 0 ? document.documentElement : document.body;
        let scrolltop = obj.scrollTop;
        if (scrolltop >= 968) {
            fuceng.style.top = "0px";
        } else {
            fuceng.style.top = "-50px";
        }
    })
}
// 上浮层结束
// {
//     const fuList=document.querySelectorAll(".fucengLeft a");
//
//         fuList.forEach(function(ele){
//
//             ele.onclick=function() {
//                 ele.offsetLeft=num;
//             }
//         })
// }
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