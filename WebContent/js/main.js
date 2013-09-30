/*
 * Javascript Picker Static Html Application
 * 
 */
(function() {
	
	var log = function(msg){console.log(msg);};
	
	log("app.js started");

	// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
	// RequireJS Config
	// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
	require.config({
		paths: {
			jquery: 'lib/jquery',
			knockout: 'lib/knockout'
		}
	});

	
	// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
	// Invoice RequireJS to load ColourPickerViewModel
	// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
	require(['app'], function(app) {

		log("Dependencies loaded.");

		debugger;
		
		app.initialize();

	});

}());
