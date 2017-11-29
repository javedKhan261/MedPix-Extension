chrome.runtime.onMessage.addListener(function(request) {
     debugger;
     if(request.action === 'injectButtonOnFigure1Page') {
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
                    data_id = main_case_div.attr('data-id');
                    resource_url = location.href+"?image="+main_case_div.attr('data-id');
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
                    data_to_send['resource_url'] = resource_url;
                    data_to_send['cookie'] = document.cookie;
           		chrome.runtime.sendMessage({
           			type: "openCasePostingPageForFigure1",
                         figure1_unique_data_id: data_id,
           			message: data_to_send
     			});
          });
     }
});

curofy_admin_url = 'http://127.0.0.1:8000/add_content_user';

function create_div_for_thumbnail(src,extraClass,disabled,fileName,caption) {
     var div = document.createElement("div");
     div.className = "floated_img panel panel-default";
     div.style.position = "relative";
     div.style.padding = "5px";
     div.style.backgroundColor = "whitesmoke";
     div.style.margin = "5px";
     caption_placeholder = 'Caption';
     if (extraClass=='myPdf') {
          caption_placeholder = 'PDF'
     }
     div.innerHTML = "<img style='object-fit: contain;width:180px;height:150px;margin-bottom: 4px;' class='thumbnail "+extraClass+"' src='" + src + "'" +
     "title='" + fileName +
     "'/><textarea class='form-control' rows='2' placeholder='" +caption_placeholder+ "' style='max-width:100%;width:100%;margin-bottom: 4px;' "+disabled+">"+caption+"</textarea>"+
     "<button class='btn btn-warning btn-xs clear_caption' type='button' "+disabled+">Clear Caption</button>"+
     "<button class='btn btn-danger btn-xs delete_image' style='float:right;' type='button'>Delete</button>";

     return div;
}         

if (location.href.includes(curofy_admin_url+'?figure1_unique_data_id=')) {
     figure_1_data_id = location.href.replace(curofy_admin_url+'?figure1_unique_data_id=','');
     chrome.storage.local.get(figure_1_data_id, function(stored_data) {
          data_to_be_filled = stored_data[figure_1_data_id];
          console.log(data_to_be_filled);
          $('textarea[name="body"]').val(data_to_be_filled['description']);
          $('input[name="discussion_reference_link"]').val(data_to_be_filled['resource_url']);
          $('input[name="cookie"]').val(data_to_be_filled['cookie']);
          var output = document.getElementById("result");
          for(var i=0;i<data_to_be_filled.images.length;i++) {
               var div = create_div_for_thumbnail(data_to_be_filled.images[i],'myImg','','figure1#'+i+".jpg",'');
               output.insertBefore(div,null);
          }
     });
}


window.addEventListener("message", function(event) {
     if (event.source != window)
          return;
     if (event.data.type && (event.data.type == "REMOVE_DATA_FROM_CHROME_STORAGE")) {
          key = event.data.text;    
          chrome.storage.local.remove([key]);
     }
}, false);



