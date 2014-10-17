function saveUrl(){
    shaarliUrl = document.getElementById("urlInput").value;
    if (window.localStorage){
	    localStorage.setItem("baseUrl",shaarliUrl);
    }
    return shaarliUrl;
}

function initializeUrl(){
    if (window.localStorage){
	if(savedUrl = localStorage.getItem("baseUrl")){
	    document.getElementById("urlInput").placeholder = savedUrl;
    }
}
}

window.onload = function(){
    initializeUrl();
    document.getElementById("save-button").addEventListener('click', function(){
	url = saveUrl();
	if(url.length){
	    document.getElementById("check-mark").style.visibility = "visible";
	}
	else{
	    document.getElementById("check-mark").style.visibility = "hidden";
	}
    })
}
