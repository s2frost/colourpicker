define([ "app/ColourApi" ], function(colourApi) {

	console.log("Loading app.js");
	
	var getColourWheelCanvas = function getColourWheelCanvas(window) {
		return document.getElementById("colourWheel");
	};

	var onLoad = function onLoad() {

		debugger;
		
		var canvas = getColourWheelCanvas();

		var wheel = new colourApi.ColourWheel({
			canvas : canvas
		});

		wheel.render();
	};

	var hookWindowOnLoad = function hookWindowOnLoad(callback) {

		window.onload = callback;

	};

	var initialize = function initialize() {

		debugger;
		hookWindowOnLoad(onLoad);

	};

	return {
		initialize : initialize
	};
	
	console.log("Finished loading app.js");
});