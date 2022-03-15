/*1.打开广告窗口 */
$(function () {

});

/*2.滚动条广告 */
$(window).scroll(function () {
    var top = $(this).scrollTop();
    $("#right").css("top", top + 50);
});

/*书讯快递 */
var mtop = 0;

function aa() {
    mtop--;

    var li1 = $("#express li:eq(0)");
    li1.css("margin-top", mtop);

    if (mtop < -20) {
        li1.css("margin-top", 0);
        $("#express").append(li1);
        mtop = 0;
    }
}

$(function () {
    var t1 = setInterval(aa, 100);
    $("#express li").hover(function () {
        clearInterval(t1);
    }, function () {
        t1 = setInterval(aa, 100);
    });
});



