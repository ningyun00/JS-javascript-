/*1.打开广告窗口 */
$(function (){
	//window.open("open.html","_blank","width=520px,height=350px,top=100px,left=150");
});

/*2.滚动条广告 */
$(window).scroll(function (){
	var top=$(this).scrollTop();
	$("#right").css("top",top+50);
});

/*2.关闭功能*/
$("#dd_close a").click(function(){
	$(this).parent().parent().hide();
})

/*3.轮播图*/
var index = 0;
function changeImages(){
	var imgNum = $("#scroll_img li").length;
	index++;
	if(index>imgNum-1){
		index=0;
	}
	console.log(index);
	$("#scroll_img li:eq("+index+")").show().siblings().hide();
	$("#scroll_number li:eq("+index+")").addClass("scroll_number_over").siblings().removeClass("scroll_number_over");
}

var t1 = setInterval(changeImages,1000);

/*数字 鼠标移入和移出*/
$("#scroll_number li").hover(function(){
	clearInterval(t1);
	var i = $(this).index();
	$("#scroll_img li:eq("+i+")").show().siblings().hide();
		$("#scroll_number li:eq("+i+")").addClass("scroll_number_over").siblings().removeClass("scroll_number_over");
},function(){
	t1 = setInterval(changeImages,1000);	
});

/*4 Tab切换*/
$(".tab ol li").mouseover(function(){
	//alert($(".tab ol li").index($(this)));
	var index = $(".tab ol li").index($(this));
	if(index==0){
		$(this).removeClass("tab_left").siblings().addClass("tab_right");
		$(".tab ul:last").hide().siblings().show();
	}else{
		$(this).removeClass("tab_right").siblings().addClass("tab_left");
		$(".tab ul:first").hide().siblings().show();
	}
});

/*4 Tab切换  详细*/
$(".tab ul li").mouseover(function(){
	$(this).find("p").hide();
	$(this).find("dl").show();
	
	$(this).siblings().find("p").show();
	$(this).siblings().find("dl").hide();
});


/*书讯快递 */
var mtop=0;

function aa(){
	mtop--;

	var li1=$("#express li:eq(0)");
	li1.css("margin-top",mtop);

	if(mtop<-20){
		li1.css("margin-top",0);
		$("#express").append(li1);
		mtop=0;
	}
}

$(function (){
	var t1=setInterval(aa,100);
	$("#express li").hover(function (){
		clearInterval(t1);
	},function (){
		t1=setInterval(aa,100);
	});
});

