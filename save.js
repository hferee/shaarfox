navigator.mozSetMessageHandler("activity", function(activity){
	if(activity.source.name == "share"){
		window.addEventListener('localized', function(){
			shareUrl(activity.source.data.url);
		}, false);
	}
});

function shareUrl(){
	var baseUrl = localStorage.getItem("baseUrl");
	if(baseUrl == null){
		alert(document.webL10n.get('not-configured'));
		window.close();
		// TODO : ouvrir la fenêtre de configuration 
	}
	else{	
		window.open(baseUrl + '/?post=' + encodeURIComponent(url) +	'&source=bookmarklet', '_self');
	}
}
