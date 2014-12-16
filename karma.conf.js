// Karma configuration
// Generated on Tue Aug 12 2014 13:28:30 GMT+0200 (Mitteleuropäische Sommerzeit)

module.exports = function (config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',

		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine'],

		// list of files / patterns to load in the browser
		files: [
			"bower_components/jquery/dist/jquery.min.js",
			"bower_components/underscore/underscore.js",
			"bower_components/backbone/backbone.js",
			"bower_components/showdown/compressed/showdown.js",
			"bower_components/backbone.localStorage/backbone.localStorage-min.js",
			"bower_components/sinonjs/sinon.js",
			'app/js/namespace.js',
			'app/js/config.js',
			'app/js/models/note.js',
			'app/js/collections/notes.js',
			'app/templates/noteTemplate.js',
			'app/js/views/noteView.js',
			'app/js/views/noteNav.js',
			'test/js/spec/namespace.spec.js',
			'test/js/spec/noteModel.spec.js',
			'test/js/spec/noteCollection.spec.js',
			'test/js/spec/noteView.spec.js',
			'test/js/spec/noteNav.spec.js'
		],

		// list of files to exclude
		exclude: [],

		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			// source files, that you wanna generate coverage for
			// do not include tests or libraries
			// (these files will be instrumented by Istanbul)
			'app/**/*.js': ['coverage']
		},
		coverageReporter: {
			type: 'html',
			dir: "target/tests-results/"
		},
		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress', 'coverage'],
		// web server port
		port: 9876,

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,

		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['IE', 'Chrome'],

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false
	});
};
