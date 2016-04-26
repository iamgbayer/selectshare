const gulp   = require('gulp'),
      uglify = require('gulp-uglify'),
      babel  = require('gulp-babel'),
      rename = require('gulp-rename');

gulp.task('build', () => {
  gulp.src('./src/scripts/selectshr.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./dist/scripts'));
});

gulp.task('minify', () => {
  gulp.src('./dist/scripts/selectshr.js')
    .pipe(uglify())
    .pipe(rename('selectshr.min.js'))
    .pipe(gulp.dest('./dist/scripts'));
});

gulp.task('default', ['build', 'minify']);