$(document).ready(function(){
	
	//load JSON
	var data = JSON.parse('[ { "title":"Lexical Syntax Analysis for hostile behavior identification", "description":"ads;faksdjf ;asjf;aslkdjf ;akljdf ;a;slfjd ;lkdjaf;aslk ja;lkdfj ;ajdf" }, { "title":"OCR Algorithm", "description":"a;sdkfj a;lskdfj a;slf k;klajs ;flkasjf ;ksjfa;lskjf" }, { "title":"HWR Algorithm", "description":"as;fajsdf;akjsf; lkjas; lf;ljs;dlfj as" }, { "title":"Student Planner", "description":"as;fdkjasdf;alksdfj;lasj" }, { "title":"Calculator X", "description":"asd;dfkjas ;laskjdf a;sldk ja;sldkfj <a href=&quot;google.com&quot;>here</a>" } ]');

	//populate the data	
	var layout = document.getElementById("project-layout");
	for(var i = 0; i < data.length; i++){
		var layoutClone = layout.cloneNode(true);
		var title = layoutClone.getElementsByTagName("h3");
		title[0].innerHTML = data[i].title;
		var description = layoutClone.getElementsByTagName("p");
		description[0].innerHTML = data[i].description;
		document.getElementById("pageContent").appendChild(layoutClone);
	}
	layout.style.display = "none"; //hide the layout template
});