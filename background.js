chrome.runtime.onMessage.addListener(function(request) {
	if(request.type === 'openCasePostingPageForFigure1') {
		var key = request.figure1_unique_data_id+'';
		var obj = {};
		obj[key] = request.message;
		chrome.storage.local.set(obj, function(){
		    chrome.tabs.create({ url : 'http://127.0.0.1:8000/add_content_user?figure1_unique_data_id='+request.figure1_unique_data_id});
		});
  	}
});

