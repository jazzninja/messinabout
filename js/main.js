/*function splashPage() {
	$("splash-page").fadeIn(400);
	$( "splash-page" ).click(function() {
		$( "splash-page" ).fadeOut(500);
});*/

$(document).ready(function() {
	$(".project-box.episode-1").mouseenter(function(){
		$(".podcast-icon-black1").hide();
		$(".podcast-icon-white1").show();	})
	$(".project-box.episode-1").mouseleave(function(){
		$(".podcast-icon-black1").show();
		$(".podcast-icon-white1").hide();
	})
	$(".project-box.episode-2").mouseenter(function(){
		$(".podcast-icon-black2").hide();
		$(".podcast-icon-white2").show();	})
	$(".project-box.episode-2").mouseleave(function(){
		$(".podcast-icon-black2").show();
		$(".podcast-icon-white2").hide();
	})
	$(".project-box.episode-3").mouseenter(function(){
		$(".podcast-icon-black3").hide();
		$(".podcast-icon-white3").show();	})
	$(".project-box.episode-3").mouseleave(function(){
		$(".podcast-icon-black3").show();
		$(".podcast-icon-white3").hide();
	})

	$(".nav-logo-txt").on("click", function(){
		$(".about-box").addClass('hidden');
		$(".landing-box").removeClass('hidden')
		$(".episodes-box").addClass('hidden');
		$(".otherstuff-box").addClass('hidden');
		$("html, body").css({
			/*background: "#7c98eb"
			background: "-moz-linear-gradient(-45deg, #7c98eb 0%, #4a78c2 31%, #172d6b 100%)"
			background: "-webkit-gradient(left top, right bottom, color-stop: "(0%, #7c98eb)", color-stop: "(31%, #4a78c2)", color-stop: "(100%, #172d6b)")"
			background: "-webkit-linear-gradient(-45deg, #7c98eb 0%, #4a78c2 31%, #172d6b 100%)"
			background: "-o-linear-gradient(-45deg, #7c98eb 0%, #4a78c2 31%, #172d6b 100%)"
			background: "-ms-linear-gradient(-45deg, #7c98eb 0%, #4a78c2 31%, #172d6b 100%)"*/
			background: "linear-gradient(135deg, #7c98eb 0%, #4a78c2 31%, #172d6b 100%)"
			/*filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#7c98eb', endColorstr='#172d6b', GradientType=1 )"*/
		});

	})

	$(".nav-btn.about").on("click", function(){
		$(".about-box").removeClass('hidden');
		$(".landing-box").addClass('hidden')
		$(".episodes-box").addClass('hidden');
		$(".otherstuff-box").addClass('hidden');
		$("html, body").css({
			/*background: "#7c98eb"
			background: "-moz-linear-gradient(-45deg, #7c98eb 0%, #4a78c2 31%, #172d6b 100%)"
			background: "-webkit-gradient(left top, right bottom, color-stop: "(0%, #7c98eb)", color-stop: "(31%, #4a78c2)", color-stop: "(100%, #172d6b)")"
			background: "-webkit-linear-gradient(-45deg, #7c98eb 0%, #4a78c2 31%, #172d6b 100%)"
			background: "-o-linear-gradient(-45deg, #7c98eb 0%, #4a78c2 31%, #172d6b 100%)"
			background: "-ms-linear-gradient(-45deg, #7c98eb 0%, #4a78c2 31%, #172d6b 100%)"*/
			background: "linear-gradient(135deg, #7c98eb 0%, #4a78c2 31%, #172d6b 100%)"
			/*filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#7c98eb', endColorstr='#172d6b', GradientType=1 )"*/
		});
	})

	$(".nav-btn.episodes").on("click", function(){
		$(".about-box").addClass('hidden');
		$(".landing-box").addClass('hidden')
		$(".episodes-box").removeClass('hidden');
		$(".otherstuff-box").addClass('hidden');
		$("html, body").css({
			/*background: "#7c98eb"
			background: "-moz-linear-gradient(-45deg, #7c98eb 0%, #4a78c2 31%, #172d6b 100%)"
			background: "-webkit-gradient(left top, right bottom, color-stop: "(0%, #7c98eb)", color-stop: "(31%, #4a78c2)", color-stop: "(100%, #172d6b)")"
			background: "-webkit-linear-gradient(-45deg, #7c98eb 0%, #4a78c2 31%, #172d6b 100%)"
			background: "-o-linear-gradient(-45deg, #7c98eb 0%, #4a78c2 31%, #172d6b 100%)"
			background: "-ms-linear-gradient(-45deg, #7c98eb 0%, #4a78c2 31%, #172d6b 100%)"*/
			background: "linear-gradient(135deg, #7c98eb 0%, #4a78c2 31%, #172d6b 100%)"
			/*filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#7c98eb', endColorstr='#172d6b', GradientType=1 )"*/
		});
	})

	$(".nav-btn.other-stuff").on("click", function(){
		$(".about-box").addClass('hidden');
		$(".landing-box").addClass('hidden')
		$(".episodes-box").addClass('hidden');
		$(".otherstuff-box").removeClass('hidden');
		$("html, body").css({
			/*background: "#f16f5c"
			background:" -moz-linear-gradient(-45deg, #f16f5c 0%, #f16f5c 35%, #9e1f13 100%)"
			background: "-webkit-gradient(left top, right bottom, color-stop: "(0%, #f16f5c)", color-stop: "(35%, #f16f5c)", color-stop: "(100%, #9e1f13)")"
			background: "-webkit-linear-gradient(-45deg, #f16f5c 0%, #f16f5c 35%, #9e1f13 100%)"
			background: "-o-linear-gradient(-45deg, #f16f5c 0%, #f16f5c 35%, #9e1f13 100%)"
			background: "-ms-linear-gradient(-45deg, #f16f5c 0%, #f16f5c 35%, #9e1f13 100%)"*/
			background: "linear-gradient(135deg, #f16f5c 0%, #f16f5c 35%, #9e1f13 100%)"
			/*filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#f16f5c', endColorstr='#9e1f13', GradientType=1 )"*/	
		});
	})
	


});