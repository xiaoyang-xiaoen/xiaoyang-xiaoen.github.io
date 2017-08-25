function $(selector,flag=false) {
    if(typeof selector=="function"){
        window.onload=function () {
            selector();
        }
    }else if(typeof selector=="string"){
        if(flag){
            return document.querySelectorAll(selector);
        }else{
            return document.querySelector(selector);
        }
    }
}
function setcookie(key,value,time) {
    if(time){
        let now=new Date;
        now.setTime(now.getTime()+time*1000);
        document.cookie=key+"="+value+";+expires="+now.toGMTString();
    }else{
        document.cookie=key+"="+value;
    }
}
function getcookie(key) {
    var keys=document.cookie;
    var arr=keys.split("; ")
    for(let i=0;i<arr.length;i++){
        var brr=arr[i].split("=")
        if(brr[0]==key){
            return brr[1];
        }else{
            return false;
        }
    }
}
function delcookie(key) {
    let now=new Date;
    now.setTime(now.getTime()-1);
    document.cookie=key+"=132212;+expires="+now.toGMTString();
}
function form(input,value) {
    input.onfocus=function () {
        if(input.value==value){
            input.value="";
        }
    }
    input.onblur=function () {
        if(input.value==""){
            input.value=value;
        }
    }
}
    class Drag{
        constructor(domobj){
            this.dom=domobj;
            this.width=this.dom.offsetWidth;
            this.height=this.dom.offsetHeight;
            this.kuan=document.documentElement.clientWidth;
            this.gao=document.documentElement.clientHeight;
        }
        drag () {
            this.down();
            this.move();
            this.up();
        }
        down() {
            let that = this;
            this.dom.onmousedown = function (e) {
                that.ox = e.offsetX;
                that.oy = e.offsetY;
                that.move();
                that.up()
            }
        }
        move(){
            let that=this;
            document.onmousemove=function (e) {
                that.nx=e.clientX;
                that.ny=e.clientY;
                that.lx=that.nx-that.ox;
                that.ly=that.ny-that.oy;
                // if(that.lx<=0){
                //     that.lx=0;
                // }
                // if(that.ly<=0){
                //     that.ly=0;
                // }
                // if(that.lx>=that.kuan-that.width){
                //     that.lx=that.kuan-that.width;
                // }
                // if(that.ly>=that.gao-that.height){
                //     that.ly=that.gao-that.height;
                // }
                that.dom.style.left=that.lx+"px";
                that.dom.style.top=that.ly+"px";
            }
        }
        up(){
            this.dom.onmouseup=function () {
                document.onmousemove=null;
            }
        }
    }
// function Cookie() {
//
// }
// Cookie.prototype={
//     setcookie:function(key,value,time) {
//         if(time){
//             let now=new Date;
//             now.setTime(now.getTime()+time*1000);
//             document.cookie=key+"="+value+";+expires="+now.toGMTString();
//         }else{
//             document.cookie=key+"="+value;
//         }
//     },
//     getcookie:function (key) {
//         var keys=document.cookie;
//         var arr=keys.split(";")
//         for(let i=0;i<arr.length;i++){
//             var brr=arr[i].split("=")
//             if(brr[0]==key){
//                 return brr[1];
//             }else{
//                 return false;
//             }
//         }
//     },
//     delcookie:function(key) {
//         let now=new Date;
//         now.setTime(now.getTime()-1);
//         document.cookie=key+"=132212;+expires="+now.toGMTString();
//     }
// }