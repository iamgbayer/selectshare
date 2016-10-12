const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const cleanCSS = require('gulp-clean-css')
const standard = require('gulp-standard')

gulp.task('babel', () => {
     gulp.src('src/scripts/**.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify().on('error', (e) => {
            console.log(e)
        }))
        .pipe(gulp.dest('dist/scripts/'))
})

gulp.task('minify-css', () => {
    gulp.src('src/styles/**.css')
        .pipe(cleanCSS({ processImport: false }))
        .pipe(gulp.dest('dist/styles/'))
})

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
    gulp.watch(['src/styles/**.css'], ['minify-css'])
})

gulp.task('build', ['minify-css', 'lint-standard', 'babel'])
