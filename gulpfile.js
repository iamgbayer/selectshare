const gulp = require('gulp')
      , babel = require('gulp-babel')
      , uglify = require('gulp-uglify')
      , fontmin = require('gulp-fontmin')
      , rename = require('gulp-rename')
      , cleancss = require('gulp-clean-css')


let path = {
  src: {
    scripts: "src/scripts/selectshare.js",
    styles: "src/styles/selectshare.css",
    fonts: "src/fonts/*"
  },
  dist: {
    scripts: "dist/scripts",
    styles: "dist/styles",
    fonts: "dist/fonts"
  }
}


gulp.task('fonts', () => {
  gulp.src(path.src.fonts)
    .pipe(fontmin())
    .pipe(gulp.dest(path.dist.fonts))
});


gulp.task('scripts', () => {
  gulp.src(path.src.scripts)
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(uglify())
    .pipe(rename('selectshare.min.js'))
    .pipe(gulp.dest(path.dist.scripts))
});


gulp.task('styles', () => {
  gulp.src(path.src.styles)
    .pipe(cleancss({ processImport: false }))
    .pipe(gulp.dest(path.dist.styles))
});


gulp.task('default', () => {
  gulp.watch(path.src.scripts, ['scripts'])
  gulp.watch(path.src.styles, ['styles'])
  gulp.watch(path.src.fonts, ['fonts'])
})


gulp.task('build', ['scripts', 'styles', 'fonts'])
