(function($) {
	$.fn.TSlider = function( options ) {

		// default settings
		var defaults = {

		};

		var settings = $.extend({}, defaults, options);

		return this.each(function(){
			console.log('catch it!');
		});
	};
})(jQuery);