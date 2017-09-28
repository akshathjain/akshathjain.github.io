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
		
		//bind data to layout
		layoutInflator(response, 'open-source-projects-layout', 'open-source-projects-container', function(info, index, layout){
			layout.onclick = function(){ window.location.assign("https://github.com/akshathjain/" + info[index].name); };
			var title = layout.getElementsByTagName("p")[0]	;
			var description = layout.getElementsByTagName("span")[1];

			title.innerHTML = info[index].name;
			description.innerHTML = info[index].description;
			console.log(info[index].url);
		});
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

		binder(data, i, layoutClone);

		document.getElementById(holder).appendChild(layoutClone);
	}
	layout.style.display = "none"; //hide the layout template
}