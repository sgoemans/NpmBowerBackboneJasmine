/**
 * Created by Goemans.Stephan on 27.08.2014.
 */
describe('Basic Sinon tests', function() {
	it("calls spy on wrapped object", function () {
		var obj = {
			multiply: function (a, b) { return a * b; },
			error: function (msg) { throw new Error(msg); }
		};
		// Wrap members with `sinon` directly.
		sinon.spy(obj, "multiply");
		sinon.spy(obj, "error");
		expect(obj.multiply(5, 2)).toEqual(10);
		sinon.assert.calledWith(obj.multiply, 5, 2);
		// The wrapped object gains a few new methods like 'returned()' and 'restore()'.
		// These methods will be gone after a 'obj.multiply.restore()' or 'obj.error.restore()'
		expect(obj.multiply.returned(10)).toBeTruthy();
		try {
			obj.error("Foo");
		} catch (e) {}
		sinon.assert.threw(obj.error, "Error");
		// Have to restore after tests finish.
		obj.multiply.restore();
		obj.error.restore();
	});
	/* The sinon.test wrapper function creates a default sandbox, which is
	automatically restored after the wrapped code finishes its execution. */
	it("calls spy with test helper", sinon.test(function () {
		var obj = {
			multiply: function (a, b) { return a * b; },
			error: function (msg) { throw new Error(msg); }
		};
		// Wrap members using context (`this`) helper.
		this.spy(obj, "multiply");
		this.spy(obj, "error");
		expect(obj.multiply(5, 2)).toEqual(10);
		sinon.assert.calledWith(obj.multiply, 5, 2);
		expect(obj.multiply.returned(10)).toBeTruthy();
		try {
			obj.error("Foo");
		} catch (e) {}
		sinon.assert.threw(obj.error, "Error");
		// No restore is necessary.
	}));
});