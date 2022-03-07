/**
 * Created by zongjuan.wang on 2016/6/1.
 */

/*关闭窗口*/
function close_plan() {
    window.close();
}

/*收藏*/
function collection() {
    var flag = confirm("移入收藏后，将不再购物车显示，是否继续操作?");
    if (flag == true) {
        alert("移入收藏成功!");
    }
}

/*删除*/
function del() {
    var flag = confirm("您确定要删除商品吗?");
    if (flag == true) {
        alert("删除成功!");
    }
}

/*数量减   num参数表示第几行商品*/
function minus(num) {

    //获取本行价格
    var prices = parseFloat(document.getElementsByName("price")[num].value);

    //获取本行数量
    var count = parseInt(document.getElementsByName("amount")[num].value) - 1;

    if (count < 1) {
        alert("不能再减了，再减就没有啦！");
    }
    else {
        //修改数量
        document.getElementsByName("amount")[num].value = count;

        //计算本商品的小计
        var totals = (prices * count).toFixed(2);
        document.getElementById("price" + num).innerHTML = "¥" + totals;

        //更新总计
        total();
    }
}

/*数量加   num参数表示第几行商品*/
function plus(num) {

    //获取本行价格
    var prices = parseFloat(document.getElementsByName("price")[num].value);

    //获取本行数量
    var count = parseInt(document.getElementsByName("amount")[num].value) + 1;

    //修改数量
    document.getElementsByName("amount")[num].value = count;

    //计算本商品的小计
    var totals = (prices * count).toFixed(2);
    document.getElementById("price" + num).innerHTML = "¥" + totals;

    //更新总计
    total();

}

/* 计算总金额 */
function total() {
    var prices = document.getElementsByName("price");
    var count = document.getElementsByName("amount");
    var sum = 0;
    for (var i = 0; i < prices.length; i++) {
        sum += (parseFloat(prices[i].value) * parseInt(count[i].value));
    }
    document.getElementById("totalPrice").innerHTML = "¥" + sum.toFixed(2);
}

//加载事件执行计算总金额函数
window.onload = total;
function accounts() {
    //请在此处完成代码
    //提示：其他文字均为拼接，只需根据cartList的节点关系获取3个金额即可
    var cartList = document.getElementById("cartList");
    /*拿取第一本书的金额*/
    var str = "您本次购买的商品信息如下:<br>白岩松：白说："
        + cartList.childNodes[1].childNodes[5].textContent + "<br>"//第一本数总价
        + "岛上书店："
        + cartList.childNodes[3].childNodes[5].textContent + "<br>"//第二本书总价
        + "商品总价："
        + cartList.childNodes[5].childNodes[1].textContent;
    cartList.nextElementSibling.innerHTML = str;
}
