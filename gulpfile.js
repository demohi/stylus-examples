/**
 * Created by mdemo on 2014/5/14.
 */

var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('selectors', function(){
   gulp.src('./selectors/selectors.styl')
       .pipe(stylus())
       .pipe(gulp.dest('./selectors'));
});

gulp.task('default', ['selectors']);