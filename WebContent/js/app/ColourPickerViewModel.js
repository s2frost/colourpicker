define([ 'core', 'knockout' ], function(core, ko) {

	"use strict";

	var ColourPickerViewModel = function ColourPickerViewModel(spec) {
		this.red = ko.observable(spec.red);
		this.green = ko.observable(spec.green);
		this.blue = ko.observable(spec.blue);
		this.hue = ko.observable(spec.hue);
		this.saturation = ko.observable(spec.saturation);
		this.lightness = ko.observable(spec.lightness);
	};

	ColourPickerViewModel.prototype.toString = function toString() {
		return "ColourPickerViewModel";
	};

	return ColourPickerViewModel;

});