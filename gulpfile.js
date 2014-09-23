var gulp = require('gulp'),
  clean = require('gulp-clean'),
  uglify = require('gulp-uglify'),
  karma = require('gulp-karma'),
  notify = require('gulp-notify'),
  paths = {
    src: './src/angular-regex-filter.js',
    dist: './dist/'
  };

// Delete the dist directory
gulp.task('clean', function () {
  return gulp.src(paths.dist)
    .pipe(clean());
});

// uglify task
gulp.task('js', ['clean'], function () {
  gulp.src(paths.src)
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist));
});

// Testing with optional coverage report
gulp.task('test', ['js'], function () {
  var karmaConfig = {
    configFile: 'test/karma.conf.js',
    action: 'run'
  };
  var testDeps = ['bower_components/angular/angular.js',
    'bower_components/angular-mocks/angular-mocks.js',
    'src/angular-regex-filter.js',
    'test/unit/regex-filter.spec.js'];
  return gulp.src(testDeps)
    .pipe(karma(karmaConfig))
    .on('error', notify.onError(function () {
      return 'Tests failed!';
    }));
});

gulp.task('default', ['test']);