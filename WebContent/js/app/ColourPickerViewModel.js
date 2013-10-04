define([ 'core', 'knockout' ], function(core, ko) {

	"use strict";

	var HUE_LEVELS = 255;
	var LIGHTNESS_LEVELS = 255;
	var SATURATION_LEVELS = 255;
	
	var ColourPickerViewModel = function ColourPickerViewModel(spec) {
		
		this.red = ko.observable(spec.red || 255);
		this.green = ko.observable(spec.green || 255);
		this.blue = ko.observable(spec.blue || 255);
		
		this.hue = ko.observable(spec.hue || 255);
		this.saturation = ko.observable(spec.saturation || 255);
		this.lightness = ko.observable(spec.lightness || 255);
	
		this.rgb = ko.observable("FFFFFF");
		
		var that = this;
		
		this.swatchStyle = ko.computed(function(){
			that.rgb(rgb2hex(that.red(),that.green(),that.blue()));
		});
		
		this.colourWheel = spec.colourWheel;
		
		this.monitorProperty("hue");
		this.monitorProperty("lightness");
		this.monitorProperty("saturation");

		this.monitorProperty("red");
		this.monitorProperty("green");
		this.monitorProperty("blue");
	
	};
	
	var prependZeroIfNecessaryHelper = function(hex) {
		  return hex.length == 1 ? '0' + hex : hex;
		};
	
		/*
		 * Move to Colour::
		 * 
		 */
	var rgb2hex = function(r, g, b) {
		  r = Number(r);
		  g = Number(g);
		  b = Number(b);
		  if (isNaN(r) || r < 0 || r > 255 ||
		      isNaN(g) || g < 0 || g > 255 ||
		      isNaN(b) || b < 0 || b > 255) {
		    throw Error('"(' + r + ',' + g + ',' + b + '") is not a valid RGB color');
		  }
		  var hexR = prependZeroIfNecessaryHelper(r.toString(16));
		  var hexG = prependZeroIfNecessaryHelper(g.toString(16));
		  var hexB = prependZeroIfNecessaryHelper(b.toString(16));
		  return '#' + hexR + hexG + hexB;
		};
	
	ColourPickerViewModel.prototype.createSwatchStyle = function createSwatchStyle(red,green,blue) {
		var hex = rgb2hex(red,green,blue,255);
		return "background-color:#" + hex;
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
		var saturation = this.saturation() / SATURATION_LEVELS;
		colourWheel.render(lightness,hue,saturation);
	};
	
	ColourPickerViewModel.prototype.setSample = function setSample () {
		var sample = this.colourWheel.sample;
		if(sample !== undefined) {
			this.red(sample.r);
			this.green(sample.g);
			this.blue(sample.b);
		}
	};

	return ColourPickerViewModel;

});