   (function(){
       var designWidth=750;
       var fontSize=100;
       function resize(){
         var width=document.documentElement.clientWidth;
           var bili=width/designWidth>1?1:width/designWidth;
         // var size=width/750*100;
         document.querySelector("html").style.fontSize=bili*fontSize+"px";
       }
        resize();
        window.onresize=resize;
     })();