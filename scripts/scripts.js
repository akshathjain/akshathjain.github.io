var changeHeaderName = function(name){
	document.getElementById("pageName").innerHTML = name;
}

$(document).ready(function(){
	$("#homeNavLink").click(function(){
		$.get("home.html", function(data, status, xhr){
			alert(status);
			$("#pageContent").html(data);
		});
	});
});