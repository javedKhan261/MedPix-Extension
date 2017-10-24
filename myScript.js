chrome.runtime.onMessage.addListener(function(request) {
    if(request.action === 'executeCode') {
    		var div = document.createElement("div");
        div.className = "add-to-curofy-button";
        div.setAttribute('align','center');
        div.setAttribute("style", "border-style: solid;border-color: #08794a;border-radius: 10px;font-weight: bolder;");
        div.style.position = "relative";
        div.style.padding = "5px";
        div.style.backgroundColor = "#169B86";
        div.style.color = "#FFFFFF";
        div.style.top = "20px";
        div.style.height = "30px";
        div.style.cursor = "pointer";
        div.style.opacity = "0.8";
        div.style.margin = "5px";
        div.innerHTML = "Add Case to Curofy";
        $('.add-to-curofy-button').remove();
        $('li.feed-card').append(div);
    		console.log("hello world");
    }
});


if (location.host=="app.figure1.com") {
	debugger;
} else {
	image_urls = [];

	image_elements_on_page = $(".slider-image")

	for(var i=0;i<image_elements_on_page;i++) {
		image_thumbnail_url = image_elements_on_page[0].src;
		image_full_url = image_thumbnail_url.replace('thumb','full');
		image_urls.push(image_full_url);
	}
}



