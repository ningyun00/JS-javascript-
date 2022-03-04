// JavaScript source code  
var checkAll = document.getElementsByName("qx");
var sps = document.getElementsByName("sp");

function fn_checkeds() {//加载事件执行
    checkAll[0].onclick = function () {
        if (checkAll[0].checked == true) {
            for (var i = 0; i <= 4; i++) {
                sps[i].checked = true;
            }
        } else {
            for (var i = 0; i <= 4; i++) {
                sps[i].checked = false;
            }
        }
    }
    for (var i = 0; i < sps.length; i++) {
        sps[i].onclick = function () {//为所有单选按钮添加单击事件          
            checkAll[0].checked = true;  //默认为选中
            for (var j = 0; j < sps.length; j++) {
                if (!sps[j].checked) {//等同于==false
                    checkAll[0].checked = false;
                }
            }
        }
    }
}