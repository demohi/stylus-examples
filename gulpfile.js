/**
 * Created by mdemo on 2014/5/14.
 */

// include the required packages.
var gulp = require('gulp');
var nib = require('nib');
var stylus = require('gulp-stylus');

gulp.task('selectors', function(){
   gulp.src('./selectors/selectors.styl')
       .pipe(stylus())
       .pipe(gulp.dest('./build'));
});
gulp.task('variables', function(){
    gulp.src('./variables/variables.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./build'));
});
// Use nib
gulp.task('nib', function () {
    gulp.src('./nib/nib.styl')
        .pipe(stylus({use: [nib()],errors: true}))
        .pipe(gulp.dest('./build'));
});
gulp.task('watch', function(){
    gulp.watch('./variables/variables.styl',['variables']);
    gulp.watch('./selectors/selectors.styl',['selectors']);
    gulp.watch('./nib/nib.styl',['nib']);
});
gulp.task('default', ['selectors','variables','nib','watch']);