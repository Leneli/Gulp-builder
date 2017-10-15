"use strict";

global.$ = {
	package: require("./package.json"),
	config: require("./gulp/config"),
	path: {
		task: require("./gulp/paths/tasks.js"),
		jsFoundation: require("./gulp/paths/js.foundation.js"),
		cssFoundation: require("./gulp/paths/css.foundation.js"),
		app: require("./gulp/paths/app.js")
	},
	gulp: require("gulp"),
	del: require("del"),
	sassGlob: require("gulp-sass-glob"),
	postcss: require("gulp-postcss"),
	pxtorem: require("postcss-pxtorem"),
	autoprefixer: require("autoprefixer"),
	cssnano: require("cssnano"),
	browserSync: require("browser-sync").create(),
	gp: require("gulp-load-plugins")(),
	fs: require("fs")
};

$.path.task.forEach(function(taskPath) {
	require(taskPath)();
});

$.gulp.task("default", $.gulp.series(
	"clean",
	$.gulp.parallel(
		"sass",
		"pug",
		"js:foundation",
		"js:process",
		"copy:image",
		"copy:fonts",
		"copy:video",
		"css:foundation",
		"sprite:svg",
		"sprite:png"
	),
	$.gulp.parallel(
		"watch",
		"serve"
	)
));
