window.onload = function() {
	$('.expand').click(function(){
	    target_num = $(this).attr('id').split('-')[1];
	    content_id = '#expandable-'.concat(target_num);
	    $(content_id).slideToggle('fast');
	});

	$(function(){
    	$("table").stupidtable();
  	});

}
