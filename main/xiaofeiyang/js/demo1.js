let dians=$(".dianbox li");
let imgs=$(".banner li");
let now=0;
let z=10;
dians.click(function(){
    var index=$(this).index();
    let t=1;
    if(index<now) {
        t = -1;
    }
    dians.filter(".active").removeClass("active").end().eq(index).addClass("active");
    imgs.eq(now).animate({left:-1230*t},1000,"linear").end().eq(index).css({zIndex:z++,left:1230*t}).animate({left:0},1000,"linear")
    now=index;
});
let st=setInterval(move,2000);
let dir="right";
function move(){
    let t=1;
    if(dir==="right"){
        var next=now+1;
    }
    if(dir==="left"){
        var next=now-1;
        t=-1;
    }
    if(next===imgs.length){
        next=0;
    }
    if(next===-1){
        next=imgs.length-1;
    }
    dians.filter(".active").removeClass("active").end().eq(next).addClass("active");
    imgs.eq(now).animate({left:-1230*t},1000,"linear").end().eq(next).css({zIndex:z++,left:1230*t}).animate({left:0},1000,"linear")
    now=next;
}
$(".prev").click(function(){
        dir="left";
        move();
})
$(".next").click(function(){
        dir="right"
        move();
})
$(".bannerBox").hover(function(){
    clearInterval(st);
},function(){
    st=setInterval(move,2000);
});








