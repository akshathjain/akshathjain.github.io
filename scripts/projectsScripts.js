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
		layoutInflator(data.researchProjects, "research-projects-layout", "research-projects-container", dataBinder);

		//inflate programming projects
		data.programmingProjects.sort(sortParameters);
		layoutInflator(data.programmingProjects, "programming-projects-layout", "programming-projects-container", dataBinder);

		//turn off the spinners
		var spinners = document.getElementsByClassName("mdl-spinner mdl-js-spinner is-active");
		for (var i = 0; i < spinners.length; i++){
			spinners[i].style.display = "none";
		}

		//call the footer resizer function to update status after content has been populated
		footerResizer();
	});

	function dataBinder(data, i, layout){
		var title = layout.getElementsByTagName("h3")[0];
		var description = layout.getElementsByTagName("p")[0];
		var buttonList = layout.getElementsByTagName("p")[1];

		title.innerHTML = data[i].title;
		description.innerHTML = data[i].description;

		if(data[i].buttons != null){
			for(var j = 0; j < data[i].buttons.length; j++){
				buttonList.innerHTML += '<button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent material-button"' + 'onclick="' + data[i].buttons[j].onclick + '">' + data[i].buttons[j].title + '</button>'
				buttonList.innerHTML += "&nbsp;&nbsp"
			}
		}
	}
});