if (location.host=="app.figure1.com") {
	debugger;
	window.onload = function() {
		var div = document.createElement("div");
	  div.style.position = "relative";
	  div.style.padding = "5px";
	  div.style.backgroundColor = "whitesmoke";
	  div.style.margin = "5px";
	  div.innerHTML = "hello";
	  $('html').append(div);
	};
} else {
	image_urls = [];

	image_elements_on_page = $(".slider-image")

	for(var i=0;i<image_elements_on_page;i++) {
		image_thumbnail_url = image_elements_on_page[0].src;
		image_full_url = image_thumbnail_url.replace('thumb','full');
		image_urls.push(image_full_url);
	}
}



