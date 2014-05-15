/**
 * Created by mdemo on 2014/5/14.
 */

var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('selectors', function(){
   gulp.src('./selectors/selectors.styl')
       .pipe(stylus())
       .pipe(gulp.dest('./bulid'));
});
gulp.task('variables', function(){
    gulp.src('./variables/variables.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./bulid'));
});
gulp.task('watch', function(){
    gulp.watch('./variables/variables.styl',['variables']);
    gulp.watch('./selectors/selectors.styl',['selectors']);
});
gulp.task('default', ['selectors','variables','watch']);