'use strick';

module.exports = function() {
    $.gulp.task('sprite:png', function() {
        var spriteData = $.gulp.src('./source/sprite/*.{png,gif}')
            .pipe($.gp.imagemin({
                progressive: true
            }))
            .pipe($.gp.spritesmith({
                imgName: 'sprite.png',
                algorithm: 'top-down',
                padding: 3,
                cssName: 'sprite-png.scss',
                cssFormat: 'scss',
                cssVarMap: function (sprite) {
                    sprite.name = 'sprite__' + sprite.name;
                }
            }));

    spriteData.img
        .pipe($.gulp.dest($.config.root + '/assets/img'));

    spriteData.css
        .pipe($.gulp.dest('./source/style/common/'));

    return spriteData;
    })
};