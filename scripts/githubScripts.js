/*
Name: Akshath Jain
Date: 9/27/17
Purpose: github api handler
*/

$(document).ready(function(){
	
	//get the research project data
	retrieveGithubData('https://api.github.com/users/akshathjain/repos', function(){
		var response = JSON.parse(this.responseText);
		
		//bind data to layout
		layoutInflator(response, 'open-source-projects-layout', 'open-source-projects-container', function(data, i, layout){
			layout.onclick = function(){ window.location.assign("https://github.com/akshathjain/" + data[i].name); };

			var title = layout.getElementsByTagName("p")[0]	;
			var description = layout.getElementsByTagName("span")[1];

			title.innerHTML = data[i].name;
			description.innerHTML = data[i].description;
		});

		footerResizer();
	});

	//get the github activity data
	retrieveGithubData('https://api.github.com/users/akshathjain/events', function(){
		var response = JSON.parse(this.responseText);

		layoutInflator(response, 'github-activity-layout', 'github-activity-container', function(data, i, layout){
			layout.onclick = function(){ window.location.assign("https://github.com/" + data[i].repo.name); };

			var icon = layout.getElementsByTagName("i")[0];
			var title = layout.getElementsByTagName("p")[0];
			var description = layout.getElementsByTagName("span")[1];

			if(response[i].type == "PushEvent"){
				title.innerHTML = response[i].payload.commits[0].message;
				icon.innerHTML = "swap_vert";
			}else if(response[i].type == "CreateEvent"){
				title.innerHTML = "Created " + data[i].payload.ref_type;
				icon.innerHTML = "create_new_folder";
			}
			description.innerHTML = new Date(response[i].created_at).toDateString() + " – " + response[i].repo.name;
		});

		footerResizer();
	});
	

});

//function to request data from github api
function retrieveGithubData(url, onComplete){
	var request = new XMLHttpRequest();
	request.onload = onComplete;
	request.open('get', url, true);
	request.send();
}

//function to bind data to layout
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