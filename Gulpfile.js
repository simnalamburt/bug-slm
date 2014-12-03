var gulp = require('gulp');
var slm  = require('gulp-slm');

gulp.task('default', function() {
  return gulp.src('index.slm')
    .pipe(slm())
    .pipe(gulp.dest('.'));
});
