navigator.mozSetMessageHandler("activity", function(activity){
		if(activity.source.name == "share"){
				shareUrl(activity.source.data.url);		
		}
});


function shareUrl(url){
	var baseUrl = localStorage.getItem("baseUrl");
	if(baseUrl == null){
		//TODO : régionaliser proprement.
		alert("Please configure Shaarfox first");
		window.close();
	}
	else{	
		window.open(baseUrl + '/?post=' + encodeURIComponent(url) +	'&source=bookmarklet', '_self');
	}
};
