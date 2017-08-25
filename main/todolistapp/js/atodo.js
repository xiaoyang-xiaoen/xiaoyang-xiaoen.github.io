// 点击提交部分
$("#submit").click(function () {
    var val = $("#text").val();
    if (val === "") {
        $(".nowrite").slideDown(500);
        return;
    }
    var data = getData();
    var date = new Date();
    var time = date.getTime();
    data.push({text: val, time, isDone: false, isStar: false, isDelete: false});
    saveData(data);
    $("#text").val("");
    reWrite();
});
//查看未完成
$(".close").click(function () {
    $(".addbox").hide();
    $(".donebox").hide(500);
    $(".waitbox").show(500);
})
//获取信息的函数
function getData() {
    if (localStorage.todo) {
        return JSON.parse(localStorage.todo);
    } else {
        return [];
    }
}
//保存信息的函数
function saveData(data) {
    localStorage.todo = JSON.stringify(data);
}
//重绘页面
function reWrite() {
    $(".item ul").empty();
    var data = getData();
    var str1 = "", str2 = "";
    $.each(data, function (index, value) {
        if (value.isDone == false) {
            str1 += `<li class="thing" id="${index}">
            <div class="thingtop">
            <time><span class="iconfont">&#xe601;</span>${time(value.time)}</time></div>
                    <input type="checkbox" class="checkbox" data-checked>
                    <pre>${value.text}</pre>
                    `
        } else {
            str2 += `<li class="thing" id="${index}">
                    <input type="checkbox" class="checkbox" data-checked>
                    <pre>${value.text}</pre>
                    <time><span class="iconfont">&#xe601;</span> ${time(value.time)}</time>
                    </li>
                    `
        };
    });
    $(".wait ul").html(str1);
    $(".done ul").html(str2);
}
reWrite();
// 处理时间格式的函数
function time(ms) {
    var date = new Date();
    date.setTime(ms);
    var year = date.getFullYear();
    var month = addZero(date.getMonth() + 1);
    var day = addZero(date.getDate());
    var hour = addZero(date.getHours());
    var minute = addZero(date.getMinutes());
    var second = addZero(date.getSeconds());
    return year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;
}
//加零函数  判断<0 加0
function addZero(num) {
    return num < 10 ? "0" + num : num;
}
//移动到已完成
$(".move").click(function () {
    $(".donebox").show(500).siblings().hide(500);
    var data = getData();
    $(".wait ul li").each(function () {
        if ($(this).find("input").prop("checked")) {
            var index = $(this).attr("id");
            data[index].isDone = true;
        }
    });
    saveData(data);
    reWrite();
});
// 显示过长内容
$(".show span").click(function(){
    $(".show").slideUp(500);
})
$(".wait ul").on("click","li pre",function () {
    $(".wait .show").slideDown(500);
    $(".wait .show .showtext").text($(this).text());
});
$(".done ul").on("click","li pre",function () {
    $(".done .show").slideDown(500);
    $(".done .show .showtext").text($(this).text());
});
//返回添加
$(".back").click(function () {
    $(".addbox").slideDown(500).siblings(500).hide(500);
})
$(".write").click(function () {
    $(".addbox").slideDown(500).siblings(500).hide(500);
})
//删除未完成
$(".waitbox .clearbtn").click(function () {
    var data = getData();
    $(".waitbox ul li").each(function () {
        if ($(this).find("input").prop("checked")) {
            var index = $(this).attr("id");
            data[index].isDelete = true;
            console.log(data[index]);
        }
        data = data.filter(function (ele) {
            return !ele.isDelete;
        });
    });
    saveData(data);
    reWrite();
});
// 删除已完成
$(".donebox .clearbtn").click(function () {
    var data = getData();
    $(".done ul li").each(function (index, ele) {
        if ($(this).find("input").prop("checked")) {
            var index = $(this).attr("id");
            data[index].isDelete = true;
        }
    });
    data = data.filter(function (ele) {
        return !ele.isDelete;
    });
    saveData(data);
    reWrite();
});
//跳转到添加页面
$(".addbtn").click(function () {
    $(".addbox").slideDown(500).siblings(".add").delay(500).hide(500);
});
let checkbox=$(".checkbox");
//全选 全不选
$(".donebox .selectall").click(function(){
    $(".donebox input[type='checkbox']").prop("checked", true);
});
$(".donebox .selectnone").click(function(){
    $(".donebox input[type='checkbox']").prop("checked", false);
});
$(".waitbox .selectall").click(function(){
    $(".waitbox input[type='checkbox']").prop("checked", true);
});
$(".waitbox .selectnone").click(function(){
    $(".waitbox input[type='checkbox']").prop("checked", false);
});

// 全选 全不选切换
// $(".waitbox .selectall").on("click",function(){
//     if($(this).attr('data-checked') == 'false'){
//         $(this).attr('data-checked','true')
//         $(".waitbox .selectall").val("全选");
//         $(".waitbox input[type='checkbox']").prop("checked", false);
//     }else{
//         $(this).attr('data-checked','false')
//         $(".waitbox .selectall").val("全不选");
//         $(".waitbox input[type='checkbox']").prop("checked", true);
//     }
// });
// $(".donebox .selectall").on("click",function(){
//     if($(this).attr('data-checked') == 'false'){
//         $(this).attr('data-checked','true')
//         $(".donebox .selectall").val("全选");
//         $(".donebox input[type='checkbox']").prop("checked", false);
//     }else{
//         $(this).attr('data-checked','false')
//         $(".donebox .selectall").val("全不选");
//         $(".donebox input[type='checkbox']").prop("checked", true);
//     }
// });
