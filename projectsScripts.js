console.log("hello");
$(document).ready(function(){
	//load JSON file
	$.getJSON('projects.json', function(data){

		console.log("hello");
	});
/*
	for(int i = 0; i < file.list.length; i++)
		console.log(file.list[i].title);*/
});