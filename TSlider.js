(function($) {
	$.fn.TSlider = function( options ) {

		// default settings
		var defaults = {
			width		: null,
			height		: null,
			numSlide	: null
		};

		var settings = $.extend({}, defaults, options);

		return this.each(function(){

			// set the slider's width
			if ( !settings.width ) {
				settings.width = $(this).find('img').first().width();
			}

			// set the slider's height
			if ( !settings.height ) {
				settings.height = $(this).find('img').first().height();
			}

			// set the slider's item number
			if ( !settings.numSlide ) {
				settings.numSlide = $(this).find('img').length;
			}

			// set list style
			$(this).css({
				'list-style'	: 'none outside none',
				'margin'		: 0,
				'padding'		: 0,
				'clear'			: 'both',
				'overflow'		: 'hidden',
				'position'		: 'relative',
				'height'		: settings.height,
				'width'			: settings.numSlide * settings.width
			});

			// set the slider's direction
			// TODO: option
			$(this).find('li').css({
				'float'		: 'left',
				'position'	: 'absolute'
			});

			// set container
			$(this).wrap('<div class="container"></div>').css({
				'width' 	: settings.width
			});

			$(this).find('li').each(function(index){
				$(this).css('left', index * settings.width);
			});

			// slide effect
			var numClick = 0;

			$(this).click(function(){
				$(this).find('li').each(function(index){

					var currentPosition = $(this).position().left;

					if ( numClick < settings.numSlide - 1 ) {
						$(this).animate({
							'left': currentPosition - settings.width
						});
					} else {
						$(this).animate({'left': index * settings.width});
					}
				});

				if ( numClick < settings.numSlide - 1 )
					numClick++;
				else
					numClick = 0;
			});
		});
	};
})(jQuery);