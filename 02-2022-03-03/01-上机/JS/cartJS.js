// JavaScript source code
/*关闭事件*/
function fn_close() {
    if (confirm("确定要关闭吗?")) {
        close();
    } else {
        return;
    }
}
/*收藏事件*/
function fn_shouCang() {
    alert("收藏成功");
}
/*删除事件*/
function fn_delete() {
    if (confirm("确定要删除吗?")) {
        alert("删除成功");
    } else {
        return;
    }
}
/*增加事件*/
function fn_add1() {
    var num = Number(document.getElementById('am1').value);
    num++;
    if (num == 11) {
        num = 1;
    }
    document.getElementById('am1').value = num;
    var summoney = num * document.getElementById('price2').value;
    document.getElementById('price0').innerHTML = "￥" + summoney;
} function fn_add2() {
    var num = Number(document.getElementById('am2').value);
    num++;
    if (num == 11) {
        num = 1;
    }
    document.getElementById('am2').value = num;
    var summoney = num * document.getElementById('price3').value;
    document.getElementById('price1').innerHTML = "￥" + summoney;
}
/*减事件*/
function fn_minus1() {
    var num = Number(document.getElementById('am1').value);
    num--;
    if (num == 0) {
        num = 10;
    }
    document.getElementById('am1').value = num;
    var summoney = num * document.getElementById('price2').value;
    document.getElementById('price0').innerHTML = "￥" + summoney;
}
function fn_minus2() {
    var num = Number(document.getElementById('am2').value);
    num--;
    if (num == 0) {
        num = 10;
    }
    document.getElementById('am2').value = num;
    var summoney = num * document.getElementById('price3').value;
    document.getElementById('price1').innerHTML = "￥" + summoney;
}
/*结算事件*/
function fn_jiesuan() {
    open("正在结算.html");
}