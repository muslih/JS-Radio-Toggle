
$.fn.jsRadioToggle = function(pengaturan) {

	// konfigurasi class
	var settings = $.extend({
        active: true,
        name: "tipe",
        target: ".target"
    }, pengaturan );

    // #variable mennn
    // deklarasi selektor toggle
    selectorToggle = $(this).selector+" input:radio[name='"+settings.name+"']";

    // deklarasi target
    target = $(settings.target);

    // sembunyikan semua  target
    target.hide()

    // cek active true atau false 
    if (settings.active == true) {
        console.log("Aktif");
        // tampilkan data yang di chek
        toggleChange($(selectorToggle+":checked").data('toggle'));
        // console.log($(selectorToggle+":checked").data('toggle'));
    }    

    // trigger data
    $(selectorToggle).change(function(){
    	// console.log("diklik men");
    	if ($(this).is(':checked')){
    		objToggle = $(this).data('toggle');
    		console.log(objToggle)
            toggleChange(objToggle); 
    	}
    })

    // fungsi change
    function toggleChange(objToggle) {
        target.hide()
        $(objToggle+'.target').slideToggle()
    }
};
