define(function() {

	var Colour = function Colour(red, green, blue) {
		var self = this;
		self.red = red;
		self.green = green;
		self.blue = blue;
		return self;
	};

	Colour.prototype = {};

	var toString = function toString() {
		return "(" + this.red + "," + this.green + "," + this.blue + ")";
	};

	Colour.prototype.toString = toString;

	return Colour;

});