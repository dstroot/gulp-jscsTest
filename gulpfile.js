'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

/**
 * JSCS Task
 */

gulp.task('jscs', function () {

  // Monkey business to handle jscs errors without stopping gulp
  var j = $.jscs();
  j.on('error', function () {
    j.end();
  });

  return gulp.src('files/*.js')
    .pipe(j);
    // .pipe($.debug());
});

/**
 * Watch Files
 */

gulp.task('watch', function () {
  gulp.watch('files/*.js', ['jscs']);
});

/**
 * Default Task
 */

gulp.task('default', ['jscs', 'watch']);
