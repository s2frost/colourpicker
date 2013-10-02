define(
		[ 'core', 'app/Colour' ],
		function(core, colour) {

			var ColourWheel = function ColourWheel(spec) {
				var canvas = spec.canvas;
				this.canvas = canvas;
				this.context = spec.context || canvas.getContext('2d');
				this.width = spec.width || this.canvas.width
						|| window.innerWidth;
				this.height = spec.height || this.canvas.height
						|| window.innerHeight;
			};

			var render = function render(l, hoff) {

				var lightness = l === undefined ? 1 : l;
				var hueOffset = hoff === undefined ? 0 : hoff;

				var brightness = 255 * lightness;

				var ctx = this.context;
				var width = this.width, height = this.height;
				var cx = width / 2, // the center point on the X axis
				cy = height / 2, // the center point on the Y axis
				radius = width / 2.3333; // a radius of half the width fills
				// the canvas without clipping

				var imageData, pixels;
				var hue, sat;
				var i = 0;
				var x, y, rx, ry;
				var d, f, g;
				var u, v, w;

				imageData = ctx.createImageData(width, height);

				// also store the hsl for each pixel

				pixels = imageData.data;

				for (y = 0; y < height; y = y + 1) {
					for (x = 0; x < width; x = x + 1, i = i + 4) {

						// Eqn Circle :: (x-cx)^2 + (y-cy)^2 = r^2
						// rx^2 + ry^2 = r^2
						// d = ( rx * rx ) + ( ry * ry ) = r^2
						rx = x - cx;
						ry = y - cy;

						d = rx * rx + ry * ry; // radius of the circle
						// intersecting the point(x,y)

						// if the radius of the circle intersecting the point
						// (x,y) is inside the radius of the the wheel, draw the
						// pixel
						if (d < radius * radius) {

							// The pixel hue is based on the angle of the point
							// hue = 6 * (Math.atan2(ry, rx) + Math.PI) / (2 *
							// Math.PI);
							// 2 x PI radians in 360 degrees

							// [theta] = Math.atan2(ry, rx)

							// [theta] * r = [arc length]

							// there are three colours to fit in

							// Adding PI to theta ranges it from 0PI to 2PI
							// starting at the top of the screen and rotating
							// through 2PI
							// as it goes round clockwise from the top all the
							// way back up the top again

							// atan2 + PI runs from 0 to 2PI
							// atan2 can be as much as +/- PI, therefore the
							// leftmost expression can be as much as 2PI
							// hence the whole value ranges from 0 to 6
							hue = (hueOffset + 3
									* (Math.atan2(ry, rx) + Math.PI) / Math.PI) % 6;

							// The saturation is based on the distance of the
							// point from the center relative to the radius
							// its' fully desaturated at the center
							sat = Math.sqrt(d) / radius;

							g = Math.floor(hue);

							f = hue - g;

							u = brightness * (1 - sat); // fully lit at min
							// saturation
							v = brightness * (1 - sat * f); // fully lit with
							// increasing
							// saturation
							w = brightness * (1 - sat * (1 - f)); // fully lit
							// with
							// decreasing
							// saturation

							// g is in the range 0 to 6

							pixels[i] = [ brightness, v, u, u, w, brightness,
									brightness ][g]; // r
							pixels[i + 1] = [ w, brightness, brightness, v, u,
									u, w ][g]; // g
							pixels[i + 2] = [ u, u, w, brightness, brightness,
									v, u ][g]; // b
							pixels[i + 3] = 255;
						}
					}
				}

				ctx.putImageData(imageData, 0, 0);
			};

			ColourWheel.prototype.render = render;

			return ColourWheel;

		});