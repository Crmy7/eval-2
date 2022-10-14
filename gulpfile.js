const gulp = require('gulp');

const copy = () => {
    gulp.src('style/style.css')
       .pipe(gulp.dest('dist/'));
}

exports.default = copy;