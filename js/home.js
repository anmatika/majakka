(function($) {
    $.ajaxSetup ({
        // Disable caching of AJAX responses
        cache: false
    });

/*	$('a.partial').click(function (e){
		var href = $(this).attr('href');
        e.preventDefault();
        $('.col-xs-12').load(href);
        window.scrollTo(0, 0);
    });
  */
    $('a.partial').click(function (e){
        var href = $(this).attr('href');
        e.preventDefault();

        $.ajax({
             url: href,
            cache: false,
            dataType: "html",
            success: function(data) {
                $("#content").html(data);
                window.scrollTo(0, 0);
                // $('.row-offcanvas').toggleClass('active');
                $('.navbar-collapse').collapse('hide');
            }
        });
    });

    $.fn.appendAttr = function(attrName, suffix) {
    this.attr(attrName, function(i, val) {
        return val + suffix;
    });
    return this;
  };
}(jQuery));