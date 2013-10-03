define([ 'core', 'knockout' ], function(core, ko) {

	"use strict";

	var HUE_LEVELS = 255;
	var LIGHTNESS_LEVELS = 255;
	
	var ColourPickerViewModel = function ColourPickerViewModel(spec) {
		
		this.red = ko.observable(spec.red || 255);
		this.green = ko.observable(spec.green || 255);
		this.blue = ko.observable(spec.blue || 255);
		
		this.hue = ko.observable(spec.hue || 255);
		this.saturation = ko.observable(spec.saturation || 255);
		this.lightness = ko.observable(spec.lightness || 255);
		
		this.colourWheel = spec.colourWheel;
		
		this.monitorProperty("hue");
		this.monitorProperty("lightness");
		
	};
	
	ColourPickerViewModel.prototype.monitorProperty = function monitorProperty(propertyName,observable,object) {
		object = object || this;
		observable = observable || object[propertyName];
		observable.subscribe( function(){
			object.onPropertyChanged(propertyName,observable,object);
		});
	};
	
	ColourPickerViewModel.prototype.onPropertyChanged = function onPropertyChanged(propertyName,observable,object) {
		if ( this.isColourWheelDependency(propertyName) ) {
			this.redraw();
		}
	};
	
	ColourPickerViewModel.prototype.isColourWheelDependency = function isColourWheelDependency(propertyName) {
		return true; // assumed for now that everything is a setting
	};

	ColourPickerViewModel.prototype.toString = function toString() {
		return "ColourPickerViewModel";
	};
	
	ColourPickerViewModel.prototype.redraw = function redraw() {
		var colourWheel = this.colourWheel;
		var hue = 6 * this.hue() / HUE_LEVELS;
		var lightness = this.lightness() / LIGHTNESS_LEVELS;
		colourWheel.render(lightness,hue);203
	};

	return ColourPickerViewModel;

});