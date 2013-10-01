define([ "app/ColourApi" ], function(ColourApi) {

	// Private Constructor
	var Application = function App(spec) {
		this.document = spec.document;
		this.canvas = spec.canvas;
		this.colourWheel = spec.colourWheel;
	};

	// Public Method
	var run = function run() {
		var colourWheel = this.colourWheel;
		colourWheel.render(0.5, 2);
	};
	Application.prototype.run = run;

	// Private Factory Method
	var create = function create(document) {
		var canvas = document.getElementById("colourWheel");
		var colourWheel = new ColourApi.ColourWheel({
			canvas : canvas
		});
		var result = new Application({
			canvas : canvas,
			colourWheel : colourWheel,
			document : document
		});
		return result;
	};

	// Public Static {Lazy Singleton}
	var instance = undefined;
	var getInstance = function getInstance(document) {
		if (instance === undefined) {
			instance = create(document);
		}
		return instance;
	};
	Application.getInstance = getInstance;

	return Application;

});