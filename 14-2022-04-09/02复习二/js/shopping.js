var i = 0;
$("#shopping_commend_arrow").click(function () {
    if (i == 0) {
        $("#shopping_commend_sort").hide();
        $(this).prop("src", "images/shopping_arrow_down.gif");
        i++;
    } else {
        $("#shopping_commend_sort").show();
        $(this).prop("src", "images/shopping_arrow_up.gif");
        i--;
    }

});


function cal() {
    // alert($("#myTableProduct tr td:eq(4)").children().val());//数量
    // alert($("#myTableProduct tr td:eq(3)").children().text());//蔚蓝价
    // alert($("#myTableProduct tr td:eq(2)").children().text());//市场价
    // alert($("#myTableProduct tr td:eq(1)").children().text());//积分

    //商品金额总计
    var wlSum = 0;
    //节省金额
    var jsSum = 0;
    //积分
    var jfSum = 0;

    $("#myTableProduct tr").each(function (i) {
        var num = $("#myTableProduct tr:eq(" + i + ") td:eq(4)").children().val();//数量
        var wlPrice = $("#myTableProduct tr:eq(" + i + ") td:eq(3)").children().text();//蔚蓝价
        var scPrice = $("#myTableProduct tr:eq(" + i + ") td:eq(2)").children().text();//市场价
        var jf = $("#myTableProduct tr:eq(" + i + ") td:eq(1)").children().text();//积分		
        wlSum += parseFloat(wlPrice) * parseInt(num);
        jsSum += (parseFloat(scPrice) - parseFloat(wlPrice)) * parseInt(num);
        jfSum += parseInt(jf) * parseInt(num);
    });

    $(".shopping_list_end ul li:eq(1)").children().text(wlSum.toFixed(2));
    $(".shopping_list_end ul li:eq(3)").find("label:eq(0)").text(jsSum.toFixed(2));
    $(".shopping_list_end ul li:eq(3)").find("label:eq(1)").text(jfSum);
}

//结算按钮
$(".shopping_list_end ul li:eq(0)").children().click(function () {
    cal();
});

//数量改变  + 删除
$("#myTableProduct tr").each(function (i) {
    //数量
    $("#myTableProduct tr:eq(" + i + ") td:eq(4)").children().blur(function () {
        console.log($(this).val());
        if ($(this).val() <= 0) {
            var bool = confirm("确定是否要删除吗？");
            if (bool) {
                $(this).parent().parent().remove();
            } else {
                $(this).val(1);
            }
        }
        cal();
    });
    //删除
    $("#myTableProduct tr:eq(" + i + ") td:eq(5)").click(function () {
        var bool = confirm("确定是否要删除吗？");
        if (bool) {
            $(this).parent().remove();
            cal();
        }
    });
});



$(function () {
    //cal();
})

