
$.fn.radioToggle = function(pengaturan) {

	// konfigurasi class
	var settings = $.extend({
        toggle: ".toggle",
        name: "tipe",
        target: ".target"
    }, pengaturan );

	// sembunyikan target
	$(settings.target).hide()


    // trigger data
    $(settings.toggle+" input:radio[name='"+settings.name+"']").change(function(){
    	// console.log("diklik men");
    	
    	if ($(this).is(':checked')){
    		objToggle = $(this).data('toggle');
    		console.log(objToggle)
    		$(settings.target).hide()
    		$(objToggle+'.target').slideToggle()
    	}
    })

};
