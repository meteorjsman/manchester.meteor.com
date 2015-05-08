Session.setDefault('chapp-docid', 'meteor-manchester');

Template.chat.events({
	'keypress input.username': function(event, template) {
		if(event.which === 13) {
			Session.set('chapp-username', template.$('input.username').val());
		}
	}
});

Template.chat.helpers({
	username: function(event, template) {
		return Session.get('chapp-username');
	}
});