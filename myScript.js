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
        div.style.margin = "5px";
        div.innerHTML = "Add Case to Curofy";
        $('.add-to-curofy-button').remove();
        $('li.feed-card').append(div);
        $('.add-to-curofy-button').click(function() {
        		debugger;
        		main_case_div = $(this).parent();
        		main_case_description = main_case_div.find('.main-case-info').find('.caption').text();
        		image_section = main_case_div.find('.image-section');
        		main_image_src = image_section.find('.detailed-image-wrapper').find('img').attr('src');
        		main_image_src_spilt = main_image_src.split('&');
        		suffix_for_full_size_image = main_image_src_spilt[main_image_src_spilt.length-1];
        		image_set_thumbmail_elements = image_section.find('.image-set-thumbnails').find('li').find('img');
        		image_src_array = [];
        		for(i=0;i<image_set_thumbmail_elements.length;i++) {
        			thumbnail_src = image_set_thumbmail_elements[i].src;
        			thumbnail_src_split = thumbnail_src.split('&');
        			full_image_src = thumbnail_src_split[0]+'&'+suffix_for_full_size_image;
        			image_src_array.push(full_image_src);
        		}

        		var data_to_send = {};
        		data_to_send['description'] = main_case_description;
        		data_to_send['images'] = image_src_array;
        		debugger;
        		
        		
        });
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



