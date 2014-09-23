module.exports = function ( config ) {
  'use strict';

  var files = [
    '../bower_components/angular/angular.js',
    '../bower_components/angular-mocks/angular-mocks.js',
    '../src/angular-regex-filter.js',
    '../test/unit/regex-filter.spec.js'
  ];

  config.set({
    files : files,
    basePath: '',
    frameworks: ['jasmine'],
    reporters: ['progress'],
    browsers: ['Chrome'],
    autoWatch: false,
    singleRun: true,
    colors: true
  });
};