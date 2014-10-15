function saveUrl(){
	shaarliUrl = document.getElementById("urlInput").value;
	if (window.localStorage) {
		localStorage.setItem("baseUrl",shaarliUrl);
		alert("Url stored");
	}
	else{
		alert("The Url could not be saved");
	}
}
// montrer que c'est bien enregistré


function initializeUrl(){
	if (window.localStorage) {
		if(savedUrl = localStorage.getItem("baseUrl")){
			document.getElementById("urlInput").placeholder = savedUrl;
		}
	}
}

window.onload = function (){
	initializeUrl();
	document.getElementById("save-button").addEventListener('click', function(){
		saveUrl();
	})

}
