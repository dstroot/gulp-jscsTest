'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var terminus = require("terminus");

/**
 * JSCS Task
 */

gulp.task('jscs', function () {
  // Monkey business to handle jscs errors without
  // stopping gulp, allowing gulp.watch to work
  // and allowing it to work with > 16 files
  var j = $.jscs();
  j.on('error', function (e) {
    $.util.log(e.message);
    j.end();
  });
  return gulp.src('files/*.js')
    .pipe(j)
    .pipe(terminus.devnull({ objectMode: true }));
});

/**
 * Default Task
 */

gulp.task('default', ['jscs'], function () {
  gulp.watch('files/*.js', ['jscs']);
});
