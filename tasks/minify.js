const gulp = require('gulp')
      , paths = require('./paths')
      , uglify = require('gulp-uglify')
      , rename = require('gulp-rename')
      , concatCss = require('gulp-concat-css')

module.exports = gulp.task('minify:stylesheets', () => {
  gulp.src(paths.stylesheets.src)
    .pipe(concatCss('selectshare.min.css'))
    .pipe(gulp.dest(paths.stylesheets.destination))
})

module.exports = gulp.task('minify:scripts', () => {
  gulp.src(paths.scripts.compiled)
    .pipe(uglify(paths.scripts.compiled))
    .pipe(rename('selectshare.min.js'))
    .pipe(gulp.dest(paths.scripts.destination))
})
