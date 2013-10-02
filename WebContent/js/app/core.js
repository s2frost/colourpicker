define(function() {
	
	if (typeof Object.create !== 'function') {
		Object.create = function(o) {
			function F() {
			}
			F.prototype = o;
			return new F();
		};
	}

	if (typeof Object.inheritPrototype !== 'function') {
		function inheritPrototype(childObject, parentObject) {

			// copy the properties and methods from the parentObject onto the
			// childObject so the copyOfParent object now has everything the
			// parentObject has
			var copyOfParent = Object.create(parentObject.prototype);

			// set the constructor of this new object to point to the childObject,
			// the preceding step overwrote the childObject constructor when it
			// overwrote the childObject prototype (during the Object.create()
			// process)
			copyOfParent.constructor = childObject;

			// set the childObject prototype to copyOfParent; the childObject can in
			// turn inherit everything from copyOfParent (from parentObject)
			childObject.prototype = copyOfParent;
		}
	}
	
});