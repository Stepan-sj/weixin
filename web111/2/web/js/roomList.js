$(function(){
	 fun(0.04,0);
	 fun(0.1,1);
	 //点击选项卡
	 $(".content_content_top_left span").click(function(){
		 if($(this).hasClass("cho")!=true){
			 $(this).siblings().removeClass("cho");
			 $(this).addClass("cho");
		 }
	 })
	 //点击搜索
	 $(".content_content_top_right").click(function(){
		 window.location.href="queryList.html";
	 });
	//下拉样式引用
	$('select.select').select();
	
	//点击房源
	$(".content_content_bottom").click(function(){
		 window.location.href="detail.html";
	})
});
//圆环
function fun(num,index){
	if(num<=0.5){
	var number=45+(num*360);
		$(".div_one .li_right:eq("+index+") .left_ra").css("transform","rotate("+number+"deg)");
		$(".div_one .li_right:eq("+index+") .left_ra").css("-webkit-transform","rotate("+number+"deg)");
		$(".div_one .li_right:eq("+index+") .left_ra").css("-moz-transform","rotate("+number+"deg)");
		$(".div_one .li_right:eq("+index+") .left_ra").css("-o-transform","rotate("+number+"deg)");
		$(".div_one .li_right:eq("+index+") .left_ra").css("-ms-transform","rotate("+number+"deg)"); 
		
		$(".div_one .li_right:eq("+index+") .right_ra").css("transform","rotate(45deg)");
		$(".div_one .li_right:eq("+index+") .right_ra").css("-webkit-transform","rotate(45deg)");
		$(".div_one .li_right:eq("+index+") .right_ra").css("-moz-transform","rotate(45deg)");
		$(".div_one .li_right:eq("+index+") .right_ra").css("-o-transform","rotate(45deg)");
		$(".div_one .li_right:eq("+index+") .right_ra").css("-ms-transform","rotate(45deg)");
		
	}else if(num>0.5){
		
		if(num>1){
			num=1;
		}
		var number=45+(num*360)-225+45;
		
		$(".div_one .li_right:eq("+index+") .right_ra").css("transform","rotate("+number+"deg)");
		$(".div_one .li_right:eq("+index+") .right_ra").css("-webkit-transform","rotate("+number+"deg)");
		$(".div_one .li_right:eq("+index+") .right_ra").css("-moz-transform","rotate("+number+"deg)");
		$(".div_one .li_right:eq("+index+") .right_ra").css("-o-transform","rotate("+number+"deg)");
		$(".div_one .li_right:eq("+index+") .right_ra").css("-ms-transform","rotate("+number+"deg)");
		
		$(".div_one .li_right:eq("+index+") .left_ra").css("transform","rotate(225deg)");
		$(".div_one .li_right:eq("+index+") .left_ra").css("-webkit-transform","rotate(225deg)");
		$(".div_one .li_right:eq("+index+") .left_ra").css("-moz-transform","rotate(225deg)");
		$(".div_one .li_right:eq("+index+") .left_ra").css("-o-transform","rotate(225deg)");
		$(".div_one .li_right:eq("+index+") .left_ra").css("-ms-transform","rotate(225deg)"); 
		
	}
 }