const gulp = require('gulp')
      , paths = require('./tasks/paths')
      , compile = require('./tasks/compile')
      , minify = require('./tasks/minify')

gulp.task('default', () => {
  gulp.watch(paths.scripts.watch, ['compile:scripts'])
  gulp.watch(paths.stylesheets.watch, ['minify:stylesheets'])
})

gulp.task('build', [
  'compile:scripts',
  'minify:stylesheets',
  'minify:scripts',
])
