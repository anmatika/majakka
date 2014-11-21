(function($) {
    var d = new Date();
	var n = d.getDay(); 
	if(n == 1){
		$('.maanantai').appendAttr('class', ' vihrea_pohja');
	} else if(n == 2) {
		$('.tiistai').appendAttr('class', ' vihrea_pohja');
	} else if(n == 3) {
		$('.keskiviikko').appendAttr('class', ' vihrea_pohja');
	} else if(n == 4) {
		$('.torstai').appendAttr('class', ' vihrea_pohja');
	} else if(n == 5) {
		$('.perjantai').appendAttr('class', ' vihrea_pohja');
	} else if(n == 6) {
		$('.lauantai').appendAttr('class', ' vihrea_pohja');
	} else if(n == 0) {
		$('.sunnuntai').appendAttr('class', ' vihrea_pohja');
	}
}(jQuery));