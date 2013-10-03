define([ 'core', 'knockout', 'app/ColourApi', 'app/Button', 'app/ColourPickerViewModel' ], function(core, ko, ColourApi, Button, ColourPickerViewModel) {

	// Private Constructor
	var Application = function App(spec) {
		this.document = spec.document;
		this.canvas = spec.canvas;
		this.colourWheel = spec.colourWheel;
		this.testButton = new Button({name:'Dave'});
		this.colourPickerViewModel = new ColourPickerViewModel({});
		this.colourPickerViewModel.colourWheel = this.colourWheel;
	};
	
	var handle_Button_clicked = function(e) {
		alert(e.sender.name);
	};

	// Public Method
	var run = function run() {
		
		var document = this.document;
		var viewModel = this.colourPickerViewModel;
		var colourPickerDiv = document.getElementById(document);
		
		ko.applyBindings(viewModel,colourPickerDiv);
		
		viewModel.redraw();
		
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