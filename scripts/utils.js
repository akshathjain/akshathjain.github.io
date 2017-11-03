/*
Name: Akshath Jain
Date: 11/2/17
Purpose: file to store my layout inflator method for use across files w/o repeating code
*/

//function to bind data to layout
function layoutInflator(data, template, container, binder){
	//populate the data	
	var layout = document.getElementById(template);
	for(var i = 0; i < data.length; i++){
		var layoutClone = layout.cloneNode(true);
		layoutClone.id = template + "-" + i;

		binder(data, i, layoutClone);

		document.getElementById(container).appendChild(layoutClone);
	}
	layout.style.display = "none"; //hide the layout template
}

//turn off the spinners
function turnOffSpinners(doc){
	var spinners = doc.getElementsByClassName("mdl-spinner mdl-js-spinner is-active");
	for (var i = 0; i < spinners.length; i++){
		spinners[i].style.display = "none";
	}
}
