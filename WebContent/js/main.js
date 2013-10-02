/*
 * Javascript Picker Static Html Application
 * 
 */
(function() {

	var log = function(msg) {
		console.log(msg);
	};

	log("app.js started");

	// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
	// RequireJS Config
	// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
	require.config({
		paths : {
			core: 'app/core',
			jquery : 'lib/jquery',			// these are acting as aliases
			knockout : 'lib/knockout',
			domReady : 'lib/domReady'
		}
	});

	// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
	// Invoice RequireJS to load ColourPickerViewModel
	// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
	require(['app/Application', 'domReady!'],				// t
			function(Application, document) {

				var app = Application.getInstance(document);
				app.run();

			});

}());
