/**
 * Created by goemans.stephan on 04.08.2014.
 */
App.Views.NoteView = Backbone.View.extend({
	template: _.template(App.Templates["template-note-view"]),
	converter: new Showdown.converter(),
	initialize: function () {
		this.listenTo(this.model, "change", this.render);
		this.listenTo(this.model, "destroy", this.remove);
		this.render();
	},
// Convert note data into Markdown.
	render: function () {
		this.$el.html(this.template({
			title: this.model.get("title"),
			text: this.converter.makeHtml(this.model.get("text"))
		}));
		return this;
	}
});