/*
Name: Akshath Jain
Date: 9/27/17
Purpose: github api handler
*/

$(document).ready(function(){
	var request = new XMLHttpRequest();
	request.onload = parser;
	request.open('get', 'https://api.github.com/users/akshathjain/events', true);
	request.send();

	function parser(){
		var response = JSON.parse(this.responseText);
		console.log(response);
	}
});