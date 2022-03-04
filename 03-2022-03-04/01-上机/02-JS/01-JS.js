// JavaScript source code
var tu = 1;
/*第一题*/
function fn_times() {
    var time = new Date();
    var A = time.getFullYear() + "年"
        + (time.getMonth() + 1) + "月"
        + time.getDate() + "日" + "&nbsp"
        + time.getHours() + ":"
        + time.getMinutes() + ":"
        + time.getSeconds();
    if (time.getHours() < 12) {
        A = A + "&nbsp&nbspAM";
    } else {
        A = A + "&nbsp&nbspPM";
    }
    var D = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    for (var i = 0; i <= 6; i++) {
        if (time.getDay() == i) {
            A = A + "&nbsp&nbsp" + D[i];
        }
    }
    document.getElementById("no1").innerHTML = A;
}
/*第二题*/
//单次调用
function fn_shuiGuo() {
    var A = new Array("apple", "pear", "peach", "orange", "banana");
    var B = Math.floor(Math.random() * 5);
    for (var i = 0; i < A.length; i++) {
        if (B == i) {
            A = A[i];
        }
    }
    document.getElementById("no2").innerHTML = "寜得到的水果是：" + A;
}
/*第三题*/
function fn_imgs() {
    var imgs = document.getElementById("imgs");
    if (tu == 1) {
        imgs.src = "images/class1-1.jpg";
        tu = 2;
    } else if (tu == 2) {
        imgs.src = "images/class1-2.jpg";
        tu = 3;
    } else if (tu == 3) {
        imgs.src = "images/class1-3.jpg";
        tu = 4;
    } else if (tu == 4) {
        imgs.src = "images/class1-4.jpg";
        tu = 1;
    }
}
//多次调用
function fn_timedd() {
    setInterval("fn_times()", 1000);
    setInterval("fn_imgs()", 2000);
}