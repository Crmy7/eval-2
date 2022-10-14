const gulp = require('gulp');

const copy = () => {
    gulp.src('style/style.less')
       .pipe(gulp.dest('dist/'));
}

exports.default = copy;