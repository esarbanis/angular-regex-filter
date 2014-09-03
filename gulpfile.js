var gulp = require('gulp'),
    clean = require('gulp-clean'),
    uglify = require('gulp-uglify');

var paths = {
        src: './src/angular-regex-filter.js',
        dist: './dist/'
    };

// Delete the dist directory
gulp.task('clean', function() {
    return gulp.src(paths.dist)
        .pipe(clean());
});

// uglify task
gulp.task('js', function() {
    gulp.src(paths.src)
        .pipe(uglify())
        .pipe(gulp.dest(paths.dist));
});

gulp.task('default', ['clean','js']);