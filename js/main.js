$(function(){
	if(window.screen.width < 900){
		var imgsrc = [
			'http://7xp3vm.com1.z0.glb.clouddn.com/bg-001-mobile.jpg', 
			'http://7xp3vm.com1.z0.glb.clouddn.com/bg-002-mobile.jpg', 
			'http://7xp3vm.com1.z0.glb.clouddn.com/bg-003-mobile.jpg'
		];
		$("#myCarousel img").each(function(index){
			$(this).attr("src",imgsrc[index]);
		});
	}
})