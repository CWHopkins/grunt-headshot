/*
 * grunt-headshot
 *
 * Copyright (c) 2013 CWHopkins
 * Licensed under the MIT license.
 * https://github.com/CWHopkins/grunt-headshot/blob/master/LICENSE
 */

module.exports = function (grunt) {
	'use strict';

	var util = require('util'),
		path = require('path');

	grunt.registerMultiTask('headshot', 'Inject JavaScript and CSS into HTML with Grunt.', function () {

		var options = this.options({
			jsTemplate  : '<script src="%s"></script>',
			cssTemplate : '<link href="%s" rel="stylesheet" />'
		});

		grunt.verbose.writeflags(options, 'Options');

		this.files.forEach(function (filePair) {

			var target;

			if (!grunt.file.exists(filePair.target)) {

				grunt.log.warn('Target file "' + filePair.target + '" not found.');

			} else {

				target = grunt.file.read(filePair.target);

				filePair.src.map(function (file) {

					var ext, tag, start, startTag, end, endTag;

					file = file.replace(options.cwd, '');
					ext = path.extname(file).split('.');
					ext = ext[ext.length - 1];

					tag = util.format(options[ext + 'Template'], file.trim());

					startTag = util.format('<!--headshot:%s-->', ext);
					endTag = util.format('<!--/headshot:%s-->', ext);
					start = target.indexOf(startTag);
					end = target.indexOf(endTag);

					if ( start === -1 || end === -1 ) {

						grunt.log.warn('Start and/or end tag could not found.');

					} else {

						grunt.log.writeln('File (' + ext.toUpperCase() + '): ' + file.cyan + ' -> ' + tag.cyan);
						target = target.substr(0, end) + tag + target.substr(end);

					}

				});

				grunt.file.write(filePair.dest, target);
				grunt.log.ok('File "' + filePair.dest.cyan + '" updated.');

			}

		});

	});

};