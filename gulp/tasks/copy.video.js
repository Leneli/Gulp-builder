"use strict";

module.exports = function() {
	$.gulp.task("copy:video", function() {
		return $.gulp.src("./source/video/**/*.*", { since: $.gulp.lastRun("copy:video") })
			.pipe($.gulp.dest($.config.root + "/video"));
	});
};
