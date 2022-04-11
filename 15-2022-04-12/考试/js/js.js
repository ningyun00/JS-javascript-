// JavaScript source code
/*alert("asndkj");*/
$(function () {
    //加载
    sum()
    //1.3计算价格
    prices()
    //1.4删除
    dels()
    //1.5实现添加
    $("#adds").click(function () {
        var name = $("#names").val()
        var danjia = parseInt($("#danJia").val())
        var nums = parseInt($("#nums").val())
        var sums = parseInt(danjia) * parseInt(nums)
        var geShi = ('<tr><td>' + name + '</td><td>￥<span class="price">' + danjia + '</span></td><td><input type="button" name="name" value="-" class="subtract" id="subtract4" /><input type="text" name="name" value="' + nums + '" id="text1" readonly class="text" /><input type="button" name="name" value="+" id="add4" class="add" /></td><td>￥<span class="money">' + sums + '</span></td><td><input type="button" name="name" value="删除" class="del" onclick="sum()" /></td></tr>')
        $(".tianJia").before(geShi)
        sum()
        prices()
        dels()
    })
})
//1.3计算价格
function prices() {
    var a = 0
    var b = 0
    var sum = 0
    $(".price").each(function (i, obj) {
        a = parseFloat($(obj).html())
        //数量
        b = parseInt($(obj).parent().next().children().next().val())
        sum += a * b
    })
    $(".prices").text(sum)
}
function dels() {
    //1.4实现删除
    $(".del").click(function () {
        if (confirm("是否删除吗?") == true) {
            $(this).parent().parent().remove()
        }
    })
}
function sum() {
    //1.1实现减少
    $(".subtract").click(function () {
        //alert($(this).next().val());//拿取值
        num = parseInt($(this).next().val())
        if (num <= 0) {
            alert("不能再减了");
            return
        }
        $(this).next().val(num - 1)
        prices()
    })
    //1.2实现增加
    $(".add").click(function (i) {
        num = parseInt($(this).prev().val())
        $(this).prev().val(num + 1)
        prices()
    })
}