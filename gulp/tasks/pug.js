"use strict";

const fs = require("fs");
module.exports = function () {
	$.gulp.task("pug", function () {
		return $.gulp.src("./source/template/pages/*.pug")
			.pipe($.gp.plumber())
			.pipe($.gp.pug({
				pretty: "\t",
				locals: JSON.parse(fs.readFileSync("./content.json", "utf8"))
			}))
			.on("error", $.gp.notify.onError(function (error) {
				return {
					title: "Pug",
					message: error.message
				}
			}))
			.pipe($.gulp.dest($.config.root));
	});
};