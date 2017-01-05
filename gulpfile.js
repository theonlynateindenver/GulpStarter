var gulp = require('gulp');

gulp.task('hello', function(){
    console.log('Hello Nate');
});



var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss') //Gets all files
        .pipe(sass()) //Using gulp-sass
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
    }))
});

//Syncs the browser to auto refresh on file save, and process all sass into css
gulp.task('watch', ['browserSync', 'sass'], function(){
    // Gulp watch syntax
    gulp.watch('app/scss/**/*.scss', ['sass']);
    //Reloads the browser whenever HTML or JS files change
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload)
    //other watchers
    });


gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
});


//Minifies JS files
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');

gulp.task('useref', function(){
    return gulp.src('app/*.html')
    .pipe(useref())
    //Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist'))
});

//minifying images
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

gulp.task('images', function(){
    return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
    .pipe(cache(imagemin()))
    .pipe(gulp.dest('dist/images'))
});

//Copying fonts to the dist/fonts folder
gulp.task('fonts', function() {
    return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
});


//Cleaning up no longer needed files, deletes dist folder
var del = require('del');
gulp.task('clean:dist', function() {
          return del.sync('dist');
          })


//Combine all build tasks
var runSequence = require('run-sequence');

gulp.task('build', function(callback) {
    runSequence('clean:dist',
               ['sass', 'useref', 'images', 'fonts'],
               callback
               )
});
gulp.task('default', function (callback) {
    runSequence(['sass', 'browserSync', 'watch'],
               callback
               )
})