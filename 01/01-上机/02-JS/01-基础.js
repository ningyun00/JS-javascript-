// JavaScript source code

/*第一题*/
document.write("第一题：");
var hr = 20;
for (var i = 1; i <= 10; i++) {
    document.write("<hr id='no1' style='width:" + hr + "px'/>");
    hr += 60;
}
/*第二题*/
document.write("第二题：");
document.write("<p id='no2'>JS，你好，我还是来了</p>");
/*第三题*/
document.write("第三题：");
for (var i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        document.write("<p class=no3>JS，你好，我还是来了</p>");
    } else {
        document.write("<p id=no3>JS，你好，我还是来了</p>");
    }
}
/*第四题*/
document.write("第四题：");
var big = 1;
for (var i = 1; i <= 30; i++) {
    document.write("<font  style='font-size: " + big + "px;color:red'>A</font>");
    big++;
}
/*第五题*/
document.write("第五题：<br/>");
var str = new Array("America", "Greece", "Britain", "Canada", "ChinaEgypt");
var count = 0;
for (var i in str) {
    if (str[i].indexOf("a") != -1 || str[i].indexOf("A") != -1) {
        count++;
    }
}
document.write(count);
/*第六题*/
function fn_counter(calculate) {
    var first = Number(document.getElementById('first').value);
    var calculates;
    var second = Number(document.getElementById('second').value);
    switch (calculate) {
        case '+':
            calculates = first + second;
            break;
        case "-":
            calculates = first - second;
            break;
        case "*":
            calculates = first * second;
            break;
        case "/":
            calculates = first / second;
            break;
        default:
            calculates = "厉害这也被弄出来了";
    }
    document.getElementById('secondA').value = calculates;
}
