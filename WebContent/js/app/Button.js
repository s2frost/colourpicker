define(['core','app/Publisher'],function(core,Publisher){

	var Button = function Button(spec) {
		this.events = new Publisher();
		this.name = spec.name;
	};
	
	Button.prototype.onClicked = function onClicked(){
		this.events.fire('clicked',{sender:this});
	};
	
	Button.prototype.click = function click(){
		this.onClicked();
	};
	
	return Button;
	
});