const gulp = require('gulp'),
    babel = require('gulp-babel')

gulp.task('babel', () => {
     gulp.src('src/scripts/**.js')
        .pipe(babel({
            presets: ['es2015']
        }))
    .pipe(gulp.dest('dist/scripts/'))
})

gulp.task('watch', () => {
    gulp.watch(['src/scripts/**.js'], ['babel'])
})

gulp.task('build', ['babel'])