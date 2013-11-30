grunt-headshot
==============

Inject JavaScript and CSS into HTML with Grunt.

`grunt-headshot` is a grunt plugin that finds JavaScript and CSS and injects them into your HTML with script and link tags.

## Getting Started

First, you need to install this module.
```bash
npm install grunt-headshot --save-dev
```

Then include this task in your Gruntfile.
```javascript
grunt.loadNpmTasks('grunt-headshot');
```
If you don't already use it, I recommend using `load-grunt-tasks` to load grunt tasks.

Next, create a configuration block within your Gruntfile;
```js
		headshot : {

			dev : {
				files : [{
					cwd    : '<%= root %>',
					target : '<%= root %>index.html',
					dest   : '<%= dest %>index.html',
					src    : [
						'*/js/**/*.js',
						'*/css/**/*.css'
					]
				}]

			}

		},
```

Throw these into your HTML...
```HTML
<!--headshot:js--><!--/headshot:js-->

<!--headshot:css--><!--/headshot:css-->
```

Call the grunt task:
```bash
grunt headshot:dev
```

Victory!
```HTML
<!--headshot:js-->
<script src="js/app.js"></script>
<!--/headshot:js-->

<!--headshot:css-->
<link href="css/base.css" rel="stylesheet" />
<!--/headshot:css-->
```

## License
Copyright (c) 2013 CWHopkins
Licensed under the MIT license.
