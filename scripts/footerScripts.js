/*
Name: Akshath Jain
Date: 9/17/17
Purpose: script to push footer to the bottom of the screen if the content doesn't take up enough space, other wise left untouched
*/

$(document).ready(function(){
	footerResizer();
});

function footerResizer(){
	var offset = $("#pageContent").offset().top; //account for top offset b/c of header, margins, and paddings
	var contentHeight = $("#pageContent").height() + 100 + $("#footer").height() + (offset > 0 ? offset : 0); //page-content height plus footer plus an extra margin plus offset if at top of the page
	if(contentHeight >= window.innerHeight || offset < 0){
		$("#footer").removeClass("footer-bottom");
	}
	else{
		$("#footer").addClass("footer-bottom");
	}

	//wait 75 ms to make footer visible to allow it to return to the bottom first
	setInterval(function(){
		document.getElementsByTagName("footer")[0].style.visibility = "visible";
	}, 75);
}
