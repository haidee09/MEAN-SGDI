//Require gulp modules
var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  watch = require('gulp-watch'),
  pug = require('gulp-pug');
//Gulp tasks
gulp.task('views', function buildHTML() {
  return gulp.src('./src/views/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./src/viewshtml'));
})
gulp.task('nodemon', function () {
  nodemon({
    script: './server/server.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  })
})
gulp.task('watchviews', function () {
  // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event
  return watch('./src/public/views/*.html', function () {
    gulp.src('./src/public/views/*.html')
      .pipe(gulp.dest('./src/public/views/'));
  });
});
gulp.task('watchstyles', function () {
  // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event
  return watch('./src/public/stylesheet/*.css', function () {
    gulp.src('./src/public/stylesheet/*.css')
      .pipe(gulp.dest('./src/public/stylesheet'));
  });
});
gulp.task('default', ['views','nodemon']);
