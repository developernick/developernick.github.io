
console.log('...Scripts has loaded...');
var app = app || {};

//------------------ MODEL

app.ShakeModel = function ShakeModel(options) {
   this.options = options || {};
}

app.ShakeModel.prototype.get = function get(key) {
	return this.options[key];
}


//---------------- MODEL LIST

app.ShakeCollection = function ShakeCollection(options){
	this.options = options || {};

	this.models = [];
}

app.ShakeCollection.prototype.add = function add(options){
	var newPoem = new app.ShakeModel(options);
	this.models.push(newPoem);
}

//ShakeCollection Ajax Request

app.ShakeCollection.prototype.fetch = function fetch(callback) {

  var that = this;

  for (var i = 0; i < 4; i++){

	  $.ajax({
	    method: 'get',
	    url: 'http://ShakeItSpeare.com/api/poem',
	    success: function (data) {
	        that.add(data);
	    	callback();
	    }
	  });

	}
}





// VIEW


//-----------MODEL VIEW
app.ShakeView = function ShakeView(options){
	console.log('View is working');

	this.options = options || {};
	this.$el = $('<p>');
	this.model = options.model;

}

app.ShakeView.prototype.render = function render(){
	var poem = this.model.get('poem');
	this.$el.text(poem);
}


var poems = [];
//-----------LIST VIEW

app.ShakeListView = function ShakeListView(options){
	this.options = options || {};
	this.$el = options.$el;
	this.collection = options.collection;
}

app.ShakeListView.prototype.render = function render(){
	poems = this.collection.models;
	if(poems[3]['options']){
		var verse1 = poems[0]['options']['poem'];
		var chorus = poems[1]['options']['poem'];
		var verse2 = poems[2]['options']['poem'];
		var bridge = poems[3]['options']['poem'];
	}

	$('#verse1').text(verse1);
	$('.chorus').text(chorus);
	$('#verse2').text(verse2);
	$('#bridge').text(bridge);
}

// ------READY ON DOCUMENT



	$(document).ready(function(){
		$('#newSong').on('click', function(){
		console.log('Working!!');

		var allThePoems = new app.ShakeCollection();

		var poemPainters = new app.ShakeListView({collection: allThePoems});

		allThePoems.fetch(function(){
			poemPainters.render();

		})
	});

})
