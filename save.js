navigator.mozSetMessageHandler("activity", function(activity) {
	if(activity.source.name = "share"){
		var url = activity.source.data.url;
		if ( !(baseUrl = localStorage.getItem("baseUrl"))){
			alert(document.webL10n.get('not-configured'));
			window.close();
			// TODO : ouvrir la fenêtre de configuration 
		}
		else{s		
			window.open(baseUrl + '/?post=' + encodeURIComponent(url) +	'&source=bookmarklet', '_self');
		}
	}	
});

