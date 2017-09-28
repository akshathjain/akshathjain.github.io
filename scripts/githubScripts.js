/*
Name: Akshath Jain
Date: 9/27/17
Purpose: github api handler
*/

$(document).ready(function(){
	
	//get the research project data
	retrieveGithubData('https://api.github.com/users/akshathjain/repos', function(){
		var response = JSON.parse(this.responseText);
		console.log(response);
		layoutInflator(response, 'open-source-projects-layout', 'open-source-projects-container');
	});

	
});

//function to request data from github api
function retrieveGithubData(url, onComplete){
	var request = new XMLHttpRequest();
	request.onload = onComplete;
	request.open('get', url, true);
	request.send();
}

function layoutInflator(data, template, holder, binder){
	//populate the data	
	var layout = document.getElementById(template);
	for(var i = 0; i < data.length; i++){
		var layoutClone = layout.cloneNode(true);
		layoutClone.id = template + "-" + i;

		var title = layoutClone.getElementsByTagName("p")[0]	;
		var description = layoutClone.getElementsByTagName("span")[1];

		title.innerHTML = data[i].name;
		description.innerHTML = data[i].description;

		document.getElementById(holder).appendChild(layoutClone);
	}
	layout.style.display = "none"; //hide the layout template
}