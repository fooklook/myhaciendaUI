$(function(){
	if(window.screen.width < 900){
		var imgsrc = ['images/bg-001-mobile.jpg', 'images/bg-002-mobile.jpg', 'images/bg-003-mobile.jpg'];
		$("#myCarousel img").each(function(index){
			$(this).attr("src",imgsrc[index]);
		});
	}
})