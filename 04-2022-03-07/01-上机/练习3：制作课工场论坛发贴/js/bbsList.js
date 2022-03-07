// JavaScript source code
/*发帖*/
function ft() {
    //显示“post”div
    document.getElementById("post").style.display = 'block';
}
/*发布*/
function fb() {
    //创建li元素
    var liObj = document.createElement("li");
    //随机产生头像1~4结尾的序号;
    var readom = Math.ceil(Math.random() * 4);

    //获取输入的标题
    var titles = document.getElementById("title").value;

    //获取选中的板块
    var bk = document.getElementById("bk").value;

    //获取当前系统时间,拼接成字符串
    var time = new Date();
    var times = time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate() + "    " + time.getHours() + ":" + time.getMinutes();

    //把所有内容拼接成字符串
     liObj.innerHTML = " <div><img src='images/tou0" + readom + ".jpg'></div><h1>" + titles + " </h1><p> 板块：" + bk + " <span> 发布时间：" + times + "</span></p> ";

    //为li设置内容
    var lis = document.getElementById("ul1");

    //将li追加到ul
    lis.lastElementChild.parentNode.appendChild(liObj)

    //发布后隐藏“post”div
    document.getElementById("post").style.display = 'none';
}
