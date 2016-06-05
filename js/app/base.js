$(document).ready(function(){

	/*INDEX页面JS*/

		/*底部轮播图*/
		var casesindex = 0;
		$(".sideright").click(function(){
			casesindex++;
			if (casesindex > 6) {
				casesindex = 0;
			}
			if (!$("#main .cases .cycases .casescontain ul").is(":animated")) {
				$("#main .cases .cycases .casescontain ul").animate({marginLeft:-155*casesindex+"px"},1000);
			}
		});
		$(".sideleft").click(function(){
			casesindex--;
			if (casesindex < 0) {
					casesindex = 6;
				}
			if (!$("#main .cases .cycases .casescontain ul").is(":animated")) {
				$("#main .cases .cycases .casescontain ul").animate({marginLeft:-155*casesindex+"px"},1000);
			}
		});


		$("#main .viewpoint .close").click(function(){
			$("#main .viewpoint").hide();
		});

    /*CASES页面JS*/

		/*ITEM类型选择*/
		$("#casesbody .classify li").hover(function(){
			$(this).siblings().removeClass("selected");
			$(this).addClass("selected");
		});



	/*RESOURCE页面JS*/

		/*WEB类型选择*/
		$("#resourcebody .left li").hover(function(){
			$(this).siblings().removeClass("selected");
			$(this).addClass("selected");
		});


    /*SUBMIT页面JS*/

	    /*选中input的效果改变*/
		$("#submitbody .info input").click(function(){
			$(this).css("background","#fff");
		});
		$("#submitbody .info input").blur(function(){
			$(this).css("background","#dbdde1");
		});
		$("#submitbody .require textarea").click(function(){
			$(this).css("background","#fff");
		});
		$("#submitbody .require textarea").blur(function(){
			$(this).css("background","#dbdde1");
		});

		/*是否拥有自己的网站radio判断*/
		$("#submitbody .left .hasweb label").click(function(){
			$("#submitbody .left .hasweb label").removeAttr("class");
			$(this).attr("class","checked");
			if($(this).attr("for")=="yes"){
				$("#submitbody .left .hasweb input[type=\"text\"]").attr("disabled",false);
			}else{
				$("#submitbody .left .hasweb input[type=\"text\"]").attr("disabled",true);
			}
		});

		/*期待的服务类型判断*/
		$("#submitbody .left .serve ul li").click(function(){
			if ($(this).attr("class")) {
				$(this).removeAttr("class");
			}else{
				$(this).attr("class","selected");
			}
		});

		/*你了解的传悦途径判断	判断*/
		$("#submitbody .bottom li").click(function(){
			if ($(this).attr("class")) {
				$(this).removeAttr("class");
			}else{
				$(this).attr("class","selected");
			}
		});

		/*提交需求后*/
		$("#submitbody .bottom .submitrq").click(function(){
			$("#success").css("display","block");
			$("body").css("background","rgba(122,123,123,0.5)");
		});
		$("#success .confirm").click(function(){
			$("#success").css("display","none");
			$("body").css("background","");
		});
		$("#success .close").click(function(){
			$("#success").css("display","none");
			$("body").css("background","");
		});



	/*ABOUTus页面JS*/

		// 关于我们的类型选择
		$("#aboutbody .title li").click(function(){
			var index = $(this).index();
			$(this).addClass("selected");
			$(this).siblings().removeClass("selected");
			$("#aboutbody .content>li").eq(index).addClass("show");
			$("#aboutbody .content>li").eq(index).siblings().removeClass("show");
		});


});