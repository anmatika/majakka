(function($) {
    var d = new Date();
	var n = d.getDay(); 
	if(n == 1){
		$('#maanantai').attr('class', 'vihrea_pohja');
	} else if(n == 2) {
		$('#tiistai').attr('class', 'vihrea_pohja');
	} else if(n == 3) {
		$('#keskiviikko').attr('class', 'vihrea_pohja');
	} else if(n == 4) {
		$('#torstai').attr('class', 'vihrea_pohja');
	} else if(n == 5) {
		$('#perjantai').attr('class', 'vihrea_pohja');
	}
}(jQuery));