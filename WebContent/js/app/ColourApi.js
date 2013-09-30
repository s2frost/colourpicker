console.log("ColourApi.js running");

define(["app/Colour","app/ColourWheel"], function(colour,colourWheel) {
	
	var api = {
		Colour: colour,
		ColourWheel: colourWheel
	};
	
	return api;
	
});

console.log("ColourApi.js completed");