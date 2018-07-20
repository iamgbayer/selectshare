const gulp = require('gulp')
      , babel = require('gulp-babel')
      , uglify = require('gulp-uglify')
      , fontmin = require('gulp-fontmin')
      , rename = require('gulp-rename')
      , watch = require('gulp-watch')
      , cleancss = require('gulp-clean-css')


const path = {
  src: {
    scripts: "src/scripts/*.js",
    styles: "src/styles/*.css",
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
    // .pipe(uglify())
    .pipe(rename('selectshare.min.js'))
    .pipe(gulp.dest(path.dist.scripts))
});


gulp.task('styles', () => {
  gulp.src(path.src.styles)
    .pipe(cleancss({ processImport: false }))
    .pipe(rename('selectshare.min.css'))
    .pipe(gulp.dest(path.dist.styles))
});


gulp.task('default', () => {
  watch(path.dist.scripts, () => console.log('oi'))
  watch(path.dist.styles)
  watch(path.dist.fonts)
})


gulp.task('build', gulp.series('scripts', 'styles', 'fonts'))
