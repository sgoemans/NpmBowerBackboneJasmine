/**
 * Created by goemans.stephan on 04.08.2014.
 */
describe("App.Views.NoteView", function() {
	// Create test fixture.
	var $fixture = $("<div id='note-view-fixture'></div>");
	var self = this;
	beforeEach(function() {
		$(document.body).append($('<div id="fixtures"></div>'));
		// Empty out and rebind the fixture for each run.
		$fixture.empty().appendTo($("#fixtures"));
		// New default model and view for each test.
		// Creation calls `render()`, so in tests we have an *already rendered* view.
		self.view = new App.Views.NoteView({
			el: $fixture,
			model: new App.Models.Note({'title': 'My Title'})
		});

	});
	afterEach(function () {
		// Destroying the model also destroys the view.
		self.view.model.destroy();
	});
	it("can render more complicated markdown", function (done) {
		self.view.model.once("change", function () {
			var $title = $("#pane-title"),
				$text = $("#pane-text");
			// Our new (changed) title.
			expect($title.text()).toEqual("My Title");
			// Rendered Markdown with headings, list.
			expect($text.html()).toContain("My Heading</h2>");
			expect($text.html()).toContain("<ul>");
			expect($text.html()).toContain("<li>List item 2</li>");
			done();
		});
		// Make our note a little more complex.
		self.view.model.set({
			title: "My Title",
			text: "## My Heading\n" +
				"* List item 1\n" +
				"* List item 2"
		});
	});
});