
$.fn.jsRadioToggle = function(pengaturan) {

	// konfigurasi class
	var settings = $.extend({
        name: "tipe",
        target: ".target"
    }, pengaturan );

	// sembunyikan target
	$(settings.target).hide()


    // trigger data
    // console.log($(this).selector)
    $($(this).selector+" input:radio[name='"+settings.name+"']").change(function(){
    	// console.log("diklik men");
    	
    	if ($(this).is(':checked')){
    		objToggle = $(this).data('toggle');
    		// console.log(objToggle)
    		$(settings.target).hide()
    		$(objToggle+'.target').slideToggle()
    	}
    })


};
