const gulp = require('gulp'),
    babel = require('gulp-babel'),
    cleanCSS = require('gulp-clean-css');

gulp.task('babel', () => {
     gulp.src('src/scripts/**.js')
        .pipe(babel({
            presets: ['es2015']
        }))
    .pipe(gulp.dest('dist/scripts/'))
})

gulp.task('minify-css', () => {
    gulp.src('src/styles/**.css')
      .pipe(cleanCSS({ processImport: false }))
      .pipe(gulp.dest('dist/styles'));
});

gulp.task('watch', () => {
    gulp.watch(['src/scripts/**.js'], ['babel'])
})

gulp.task('build', ['babel'])
