/**
 * Created by goemans.stephan on 01.08.2014.
 */
App.Models.Note = Backbone.Model.extend({
	defaults: {
		title: '',
		text: '*Edit your note*',
		createdAt: new Date()
	},
	validate: function(attr, options) {
		"use strict";
		if(attr.text == '' ) {
			return 'Text must not be empty';
		}
	}
});
