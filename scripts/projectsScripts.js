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
		layoutClone.id = template + "-" + i;

		var title = layoutClone.getElementsByTagName("h3");
		var description = layoutClone.getElementsByTagName("p")[0];
		var buttonList = layoutClone.getElementsByTagName("p")[1];

		title.innerHTML = data[i].title;
		description.innerHTML = data[i].description;

		if(data[i].buttons != null){
			for(var j = 0; j < data[i].buttons.length; j++)
				buttonList.innerHTML += '<button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">' + data[i].buttons[j].title
					'</button>'
		}

		document.getElementById(holder).appendChild(layoutClone);
	}
	//layout.style.display = "none"; //hide the layout template
}