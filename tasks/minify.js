const gulp = require('gulp')

module.exports = gulp.task('minify:stylesheets', () => {
  gulp.src('src/styles/**.css')
    .pipe(cleanCSS({ processImport: false }))
    .pipe(gulp.dest('dist/styles/'));
})

module.exports = gulp.task('minify:scripts', () => {
  gulp.src('./dist/scripts/selectshare.js')
    .pipe(uglify())
    .pipe(rename('selectshare.min.js'))
    .pipe(gulp.dest('./dist/scripts'));
})
