navigator.mozSetMessageHandler("activity", function(activity) {
	if(activity.source.name = "share"){
		var url = activity.source.data.url;
		if ( !(baseUrl = localStorage.getItem("baseUrl"))){
			alert("You have not configured Shaarfox yet." + baseUrl);
			window.close();
			// TODO : ouvrir la fenêtre de configuration 
		}
		else{																		
			window.open(baseUrl + '/?post=' + encodeURIComponent(url) +	'&source=bookmarklet', '_self');
		}
	}	
});
