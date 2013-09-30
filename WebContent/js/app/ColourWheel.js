define(
		[ 'app/Colour' ],
		function(colour) {

			var ColourWheel = function ColourWheel(spec) {
				var self = this;
				self.canvas = spec.canvas;
				self.context = spec.context || canvas.getContext('2d');
				self.width = self.canvas.width || window.innerWidth;
				self.height = self.canvas.height || window.innerHeight;
				return self;
			};

			var render = function render() {

				var ctx = this.context;
				var width = this.width, height = this.height;
				var cx = width / 2, cy = height / 2, radius = width / 2.3;
				var imageData, pixels;
				var hue, sat;
				var i = 0;
				var x, y, rx, ry;
				var d, f, g;
				var u, v, w;

				canvas.width = width;
				canvas.height = height;

				imageData = ctx.createImageData(width, height);

				pixels = imageData.data;

				for (y = 0; y < height; y = y + 1) {
					for (x = 0; x < width; x = x + 1, i = i + 4) {
						rx = x - cx;
						ry = y - cy;
						d = rx * rx + ry * ry;
						if (d < radius * radius) {
							hue = 6 * (Math.atan2(ry, rx) + Math.PI)
									/ (2 * Math.PI);
							sat = Math.sqrt(d) / radius;
							g = Math.floor(hue);
							f = hue - g;
							u = 255 * (1 - sat);
							v = 255 * (1 - sat * f);
							w = 255 * (1 - sat * (1 - f));
							pixels[i] = [ 255, v, u, u, w, 255, 255 ][g];
							pixels[i + 1] = [ w, 255, 255, v, u, u, w ][g];
							pixels[i + 2] = [ u, u, w, 255, 255, v, u ][g];
							pixels[i + 3] = 255;
						}
					}
				}

				ctx.putImageData(0, 0);
			};

			ColourWheel.prototype.render = render;

			return ColourWheel;

		});