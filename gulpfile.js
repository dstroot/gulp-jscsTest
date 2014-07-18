'use strict';

// Install: you must install gulp both globally *and* locally. Make sure you:
// $ npm install -g gulp

/**
 * Dependencies
 */

var gulp = require('gulp');
// load gulp plugins
var $ = require('gulp-load-plugins')();

/**
 * JSCS Files
 */

gulp.task('jscs', function () {
  // Monkey business to handle jscs errors without stopping gulp
  var j = $.jscs();
  j.on('error', function (e) {
    // $.util.log(e);
    j.end();
  });
  return gulp.src('files/*.js')
    .pipe(j);
    // .pipe($.debug());
});

/**
 * Watch Files (Rerun/reload when a file changes)
 */

gulp.task('watch', function () {
  gulp.watch('files/*.js', ['jscs']);
});

/**
 * Default Task
 * (depends on Build and Develop Tasks)
 */

gulp.task('default', ['jscs', 'watch']);
