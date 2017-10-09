/**
 * Created by Candy on 2017/10/9.
 */
// 压缩 合并
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename');
    //notify = require('gulp-notify');
gulp.task('minify',function(){
    gulp.src(['js/*.js'])
        .pipe(concat('main.js'))
        .pipe(rename({suffix:'.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('js/'))
        //.pipe(gulp.notify({messafe:'ok'}))

})