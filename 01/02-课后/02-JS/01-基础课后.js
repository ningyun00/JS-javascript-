// JavaScript source code
function fn_sumMoney() {
    var number = Number(document.getElementById('number').value);
    var money = Number(document.getElementById('money').value);
    var freight = Number(document.getElementById('freight').value);
    document.getElementById('sumMoney').value = number * money + freight;
}
function fn_time() {
    var time = Number(document.getElementById('time').value);
    for (var i = 0; i < time; i++) {
        document.write("HelloWord<br>");
    }
}
function fn_trigon(num) {
    var num = Number(document.getElementById('sum').value);
    for (var i = 1; i <= num; i++) {
        for (var j = num - i; j >= 1; j--) {
            document.write("&nbsp");
        }
        for (var j = 1; j <= 2 * i - i; j++) {
            document.write("*");
        }
        document.write("<br>");
    }
}