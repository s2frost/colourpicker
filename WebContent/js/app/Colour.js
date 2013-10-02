define([ 'core' ], function(core) {

	var Colour = function Colour(red, green, blue) {
		self.red = red;
		self.green = green;
		self.blue = blue;
	};

	Colour.prototype.toString = function toString() {
			return ["(",this.red,",",this.green,",",this.blue,")"].join();
		};

	return Colour;

});