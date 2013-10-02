define([ 'core', 'app/Colour', 'app/ColourWheel' ], function(core, colour,
		colourWheel) {

	var api = {
		Colour : colour,
		ColourWheel : colourWheel
	};

	return api;

});