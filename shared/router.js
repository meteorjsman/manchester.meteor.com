Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route('/', function () {
  this.render('home', {
    //data: function () { return Items.findOne({_id: this.params._id}); }
  });
});