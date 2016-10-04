const gulp = require('gulp'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    standard = require('gulp-standard')

gulp.task('babel', () => {
     gulp.src('src/scripts/**.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify().on('error', (e) => {
            console.log(e);
        }))
    .pipe(gulp.dest('dist/scripts/'))
})

gulp.task('minify-css', () => {
    gulp.src('src/styles/**.css')
        .pipe(cleanCSS({ processImport: false }))
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('lint-standard', () => {
    gulp.src(['src/scripts/**.js'])
        .pipe(standard())
        .pipe(standard.reporter('default', {
            breakOnError: true,
            quiet: true
        }))
})

gulp.task('watch', () => {
    gulp.watch(['src/scripts/**.js'], ['babel'])
})

gulp.task('build', ['minify-css', 'lint-standard', 'babel'])
