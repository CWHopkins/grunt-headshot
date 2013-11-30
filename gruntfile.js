
module.exports = function(grunt) {
	'use strict';

	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.initConfig({
		jshint: {
			options: { jshintrc: '.jshintrc' },
			all: [ 'gruntfile.js', 'tasks/*.js' ]
		},
	});

	grunt.registerTask('default', ['jshint']);

};