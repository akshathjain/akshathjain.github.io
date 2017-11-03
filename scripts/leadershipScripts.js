/*
Name: Akshath Jain
Date: 11/2/2017
Purpose: scripts for the leadership page
*/

$(document).ready(function(){

	//load JSON
	$.getJSON('http://akshathjain.com/json/leadership.json', function(response){
		console.log(response.leadership);
		console.log(document.getElementById('leadership-card-container'));

		layoutInflator(response.leadership, 'leadership-card-layout', 'leadership-card-container', function(data, i, layout){
			var title = layout.getElementsByTagName("h3")[0];
			var richMedia = layout.getElementsByTagName('img')[0];
			var infoList = layout.getElementsByTagName("ul")[0];
			var listItem = infoList.getElementsByTagName("li")[0];

			title.innerHTML = data[i].title;
			richMedia.src = data[i].richVisual;

			for(var j = 0; j < data[i].info.length; j++){
				var listLayout = listItem.cloneNode(true);
				var listTitle = listLayout.getElementsByTagName("p")[0];
				var listContent = listLayout.getElementsByTagName("p")[1];

				listTitle.innerHTML = data[i].info[j].title;
				listContent.innerHTML = data[i].info[j].content;

				infoList.appendChild(listLayout);
			}

			listItem.style.display = "none";
		});

		//call the footer resizer function to update status after content has been populated
		footerResizer();
	});

});
