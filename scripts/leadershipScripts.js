/*
Name: Akshath Jain
Date: 11/2/2017
Purpose: scripts for the leadership page
*/

$(document).ready(function(){

	//load json
	$.getJSON('http://akshathjain.com/json/leadership.json', function(response){

		layoutInflator(response.leadership, 'leadership-card-layout', 'leadership-card-layout-container', function(data, i, layout){
			var richMedia = layout.getElementsByClassName('img');
			console.log(richMedia);

		});

		//call the footer resizer function to update status after content has been populated
		footerResizer();
	});

});