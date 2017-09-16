$(document).ready(function(){
	footerResizer();
});

function footerResizer(){
	var windowHeight = window.innerHeight;
	var bodyHeight = $("#pageContent").height();

	if(bodyHeight > windowHeight)
		$("#footer").removeClass("footer-bottom");
	else
		$("#footer").addClass("footer-bottom");

	console.log(windowHeight);
	console.log(bodyHeight);
	console.log('\n');	
}
