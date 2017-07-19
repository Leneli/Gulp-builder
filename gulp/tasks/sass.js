"use strict";

module.exports = function() {
	$.gulp.task("sass", function() {

		var processors = [
			$.autoprefixer({
				browsers: "last 1 version"
			}),
			$.pxtorem({
				rootValue: 16,
				unitPrecision: 5,
				propList: ["font", "font-size", "letter-spacing", "*margin*", "*padding*"],
				selectorBlackList: ["body"],
				replace: true,
				mediaQuery: false,
				minPixelValue: 0
			}),
			$.cssnano({
				preset: ["default", {
					discardComments: { removeAll: true }
				}]
			})
		];

		return $.gulp.src("./source/style/app.scss")
			.pipe($.gp.sourcemaps.init())
			.pipe($.gp.sassGlob())
			.pipe($.gp.sass()).on("error", $.gp.notify.onError({ title: "Style" }))
			.pipe($.postcss(processors))
			.pipe($.gp.sourcemaps.write("."))
			.pipe($.gulp.dest($.config.root + "/css"))
			.pipe($.browserSync.stream());
	})
};
