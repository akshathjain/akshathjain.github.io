/*
Name: Akshath Jain
Date: 6/29/17
Purpose: scripts for project.html, includes a "layout inflator" to automatically update the site based on a json file"
*/

$(document).ready(function(){
	
	//load JSON
	$.getJSON('http://akshathjain.com/json/projects.json', function(data){

		//alphabetical sort
		var sortParameters = function(a,b){
			return a.title.localeCompare(b.title);
		}

		//inflate research projects	
		data.researchProjects.sort(sortParameters);
		layoutInflator(data.researchProjects, "research-projects-layout", "research-projects-container");

		//inflate programming projects
		data.programmingProjects.sort(sortParameters);
		layoutInflator(data.programmingProjects, "programming-projects-layout", "programming-projects-container");

		//TODO - inflate clubs/organizations

		//turn off the spinners
		var spinners = document.getElementsByClassName("mdl-spinner mdl-js-spinner is-active");
		for (var i = 0; i < spinners.length; i++){
			spinners[i].style.display = "none";
		}

		//call the footer resizer function to update status after content has been populated
		footerResizer();
	});

});

function layoutInflator(data, template, holder){
	//populate the data	
	var layout = document.getElementById(template);
	for(var i = 0; i < data.length; i++){
		var layoutClone = layout.cloneNode(true);
		layoutClone.id = template + "-" + i;

		var title = layoutClone.getElementsByTagName("h3")[0]	;
		var description = layoutClone.getElementsByTagName("p")[0];
		var buttonList = layoutClone.getElementsByTagName("p")[1];

		title.innerHTML = data[i].title;
		description.innerHTML = data[i].description;

		if(data[i].buttons != null){
			for(var j = 0; j < data[i].buttons.length; j++){
				buttonList.innerHTML += '<button class="material-button"' + 'onclick="' + data[i].buttons[j].onclick + '">' + data[i].buttons[j].title + '</button>'
				buttonList.innerHTML += "&nbsp;&nbsp"
			}
		}

		document.getElementById(holder).appendChild(layoutClone);
	}
	layout.style.display = "none"; //hide the layout template
}
