const gulp = require('gulp')
      , babel = require('gulp-babel')
      , uglify = require('gulp-uglify')
      , cleanCSS = require('gulp-clean-css')
      , standard = require('gulp-standard');

gulp.task('build', () => {
  gulp.src('./src/scripts/**.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./dist/scripts'));
});

gulp.task('babel', () => {
  gulp.src('src/scripts/**.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist/scripts/'));
})

gulp.task('minify-js', () => {
  gulp.src('./dist/scripts/selectshare.js')
    .pipe(uglify())
    .pipe(rename('selectshare.min.js'))
    .pipe(gulp.dest('./dist/scripts'));
});

gulp.task('minify-css', () => {
    gulp.src('src/styles/**.css')
      .pipe(cleanCSS({ processImport: false }))
      .pipe(gulp.dest('dist/styles/'));
});

gulp.task('watch', () => {
    gulp.watch(['src/scripts/**.js'], ['babel']);
    gulp.watch(['src/styles/**.css'], ['minify-css']);
})

gulp.task('build', ['babel', 'minify-css']);