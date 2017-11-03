/*
Name: Akshath Jain
Date: 11/2/2017
Purpose: scripts for the leadership page
*/

$(document).ready(function(){

	//load JSON
	$.getJSON('https://raw.githubusercontent.com/akshathjain/akshathjain.github.io/master/json/leadership.json', function(response){
		console.log(response.leadership);
		console.log(document.getElementById('leadership-card-container'));

		layoutInflator(response.leadership, 'leadership-card-layout', 'leadership-card-container', function(data, i, layout){
			var title = layout.getElementsByTagName("h3")[0];
			var richMedia = layout.getElementsByClassName('leadership-media')[0];
			var infoList = layout.getElementsByTagName("ul")[0];
			var listItem = infoList.getElementsByTagName("li")[0];
			var buttonList = layout.getElementsByTagName("p")[2];

			title.innerHTML = data[i].title;
			
			//deal with rich media
			if(data[i].richMedia.type == "icon")
				richMedia.innerHTML = '<img class="leadership-media-icon" src="' + data[i].richMedia.src + '">';
			else if(data[i].richMedia.type == "image")
				richMedia.innerHTML = '<img class="leadership-media-image" src="' + data[i].richMedia.src + '">';
			else if(data[i].richMedia.type == "video")
				richMedia.innerHTML = '<iframe class="leadership-media-video" allowfullscreen src="' + data[i].richMedia.src + '"></iframe>';
			
			//deal with description and list
			for(var j = 0; j < data[i].info.length; j++){
				var listLayout = listItem.cloneNode(true);
				var listTitle = listLayout.getElementsByTagName("p")[0];
				var listContent = listLayout.getElementsByTagName("p")[1];

				listTitle.innerHTML = data[i].info[j].title;
				listContent.innerHTML = data[i].info[j].content;

				infoList.appendChild(listLayout);
			}

			//deal with buttons
			if(data[i].buttons != null){
				for(var j = 0; j < data[i].buttons.length; j++){
					buttonList.innerHTML += '<button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent material-button"' + 'onclick="window.location.assign(\'' + data[i].buttons[j].link + '\');">' + data[i].buttons[j].title + '</button>'
					buttonList.innerHTML += "&nbsp;&nbsp"
				}
			}

			listItem.style.display = "none";
		});

		//call the footer resizer function to update status after content has been populated
		footerResizer();
	});

});
