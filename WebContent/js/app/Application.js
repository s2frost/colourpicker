define([ 'core', 'app/ColourApi', 'app/Button' ], function(core, ColourApi, Button) {

	// Private Constructor
	var Application = function App(spec) {
		this.document = spec.document;
		this.canvas = spec.canvas;
		this.colourWheel = spec.colourWheel;
		this.testButton = new Button({name:'Dave'});
	};
	
	var handle_Button_clicked = function(e) {
		alert(e.sender.name);
	};

	// Public Method
	var run = function run() {
		debugger;
		var colourWheel = this.colourWheel;
		colourWheel.render(0.5, 2);
		this.testButton.events.on('clicked',handle_Button_clicked);
		this.testButton.click();
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