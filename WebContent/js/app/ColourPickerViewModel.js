define(["knockout"],function(ko) {

	"use strict";
	
	var ColourPickerViewModel = function ColourPickerViewModel(spec) {
		var self = this;
		self.red = ko.observable(spec.red), self.green = ko
				.observable(spec.green), self.blue = ko.observable(spec.blue),
				self.hue = ko.observable(spec.hue), self.saturation = ko
						.observable(spec.saturation), self.lightness = ko
						.observable(spec.lightness);
		return self;
	};

	return ColourPickerViewModel;

});