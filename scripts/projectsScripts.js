$(document).ready(function(){
	
	//load JSON
	$.getJSON('https://akshathjain.github.io/json/projects.json', function(data){
		//console.log(data);
		//console.log(data.researchProjects.length);

		//inflate research projects	
		layoutInflator(data.researchProjects, "research-project-layout", "research-project-container");

		//inflate all projects
		//inflate clubs/organizations
	});

});

function layoutInflator(data, template, holder){
	//populate the data	
	var layout = document.getElementById(template);
	for(var i = 0; i < data.length; i++){
		var layoutClone = layout.cloneNode(true);
		var title = layoutClone.getElementsByTagName("h3");
		title[0].innerHTML = data[i].title;
		var description = layoutClone.getElementsByTagName("p");
		description[0].innerHTML = data[i].description;
		document.getElementById(holder).appendChild(layoutClone);
	}
	layout.style.display = "none"; //hide the layout template
}