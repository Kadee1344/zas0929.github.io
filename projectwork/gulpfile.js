var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');

// Default task to be run with `gulp`
gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch("src/scss/*.scss", ['sass']);
});

// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
    browserSync.init(null, {
        server: {
            baseDir: "./"
        }
    });

});


// Sass task, will run when any SCSS files change & BrowserSync will auto-update browsers
gulp.task('sass', function () {
    gulp.src('src/scss/*.scss')
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream:true}));
});


