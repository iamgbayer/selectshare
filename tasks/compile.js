const gulp = require('gulp')
      , paths = require('./paths')
      , babel = require('gulp-babel')

module.exports = gulp.task('compile:scripts', () => {
  gulp.src(paths.scripts.src)
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest(paths.scripts.destination))
})
