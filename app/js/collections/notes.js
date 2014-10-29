/**
 * Created by goemans.stephan on 01.08.2014.
 */
App.Collections.Notes = Backbone.Collection.extend({
	model: App.Models.Note,
	localStorage: new Backbone.LocalStorage(App.Config.storeName)
});