/*
Name: Akshath Jain
Date: 11/2/2017
Purpose: scripts for the leadership page
*/

$(document).ready(function(){

	//load JSON
	$.getJSON('http://akshathjain.com/json/leadership.json', function(response){
		console.log(response);
		layoutInflator(response.leadership, 'leadership-card-layout', 'leadership-card-layout-container', function(data, i, layout){
			console.log('getting here');
			var richMedia = layout.getElementsByTagName('img');
			console.log(richMedia[0]);

		});

		//call the footer resizer function to update status after content has been populated
		footerResizer();
	});

});