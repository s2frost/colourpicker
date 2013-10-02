define([ 'core' ], function(core) {

	var Publisher = function Publisher(spec) {
		this.subscribers = { any: [] };
	};
	
	Publisher.prototype.on = function on(type,fn,context) {
		type = type || 'any';
		fn = typeof fn === "function" ? fn : context[fn];
		
		if(typeof this.subscribers[type] === "undefined") {
			this.subscribers[type]=[];
		};
		
		this.subscribers[type].push({fn:fn, context:context || this});		
	};
	
	Publisher.prototype.remove = function remove(type,fn,context) {
		this.visitSubscribers('unsubscribe',type,fn,context);
	};
	
	Publisher.prototype.fire = function fire(type,publication) {
		this.visitSubscribers('publish',type,publication);
	};
	
	Publisher.prototype.visitSubscribers = function visitSubscribers(action,type,arg,context) {
		var pubtype = type || 'any', subscribers = this.subscribers[pubtype], i, max = subscribers ? subscribers.length : 0;
		
		for(i=0;i<max;i+=1) {
			if(action==='publish') {
				if(action==='publish') {
					subscribers[i].fn.call(subscribers[i].context,arg);
				} else 
					if(subscribers[i] === arg ) {
						subscribers.splice(i,1);
					};
				};
			};
		};
		
	return Publisher;
});
