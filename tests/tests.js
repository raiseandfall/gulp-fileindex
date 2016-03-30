/* eslint max-len: "off" */
'use strict';

var gulp = require('gulp');
var fileIndex = require('../');
var test = require('tape');
var path = require('path');
var fs = require('fs');
var es = require('event-stream');

test('should generate an HTML file listing links to pages', function(t) {
  t.plan(1);

  gulp.src(path.join(__dirname, 'fixtures/**/*.html'))
    .pipe(fileIndex())
    .pipe(gulp.dest('./'))
    .pipe(es.wait(function() {
      var actual = fs.readFileSync('index.html', {encoding: 'utf8'});
      var expected = fs.readFileSync(
        path.join(__dirname, 'mocks/index.html'),
        {encoding: 'utf8'}
      );

      t.equal(actual, expected);

      fs.unlinkSync('index.html');

      t.end();
    }));
});

test('should generate an HTML file listing links to pages: only filenames', function(t) {
  t.plan(1);

  gulp.src(path.join(__dirname, 'fixtures/**/*.html'))
    .pipe(fileIndex('main.html', {
      onlyFilenames: true
    }))
    .pipe(gulp.dest('./'))
    .pipe(es.wait(function() {
      var actual = fs.readFileSync('main.html', {encoding: 'utf8'});
      var expected = fs.readFileSync(
        path.join(__dirname, 'mocks/index-only-filenames.html'),
        {encoding: 'utf8'}
      );

      t.equal(actual, expected);

      fs.unlinkSync('main.html');

      t.end();
    }));
});

test('should generate an HTML file listing links to pages: no extension', function(t) {
  t.plan(1);

  gulp.src(path.join(__dirname, 'fixtures/**/*.html'))
    .pipe(fileIndex({
      showExtension: false
    }))
    .pipe(gulp.dest('./'))
    .pipe(es.wait(function() {
      var actual = fs.readFileSync('index.html', {encoding: 'utf8'});
      var expected = fs.readFileSync(
        path.join(__dirname, 'mocks/index-no-extension.html'),
        {encoding: 'utf8'}
      );

      t.equal(actual, expected);

      fs.unlinkSync('index.html');

      t.end();
    }));
});

test('should generate an HTML file listing links to pages: only filenames, no extension', function(t) {
  t.plan(1);

  gulp.src(path.join(__dirname, 'fixtures/**/*.html'))
    .pipe(fileIndex({
      onlyFilenames: true,
      showExtension: false
    }))
    .pipe(gulp.dest('./'))
    .pipe(es.wait(function() {
      var actual = fs.readFileSync('index.html', {encoding: 'utf8'});
      var expected = fs.readFileSync(
        path.join(__dirname, 'mocks/index-only-filenames-no-extension.html'),
        {encoding: 'utf8'}
      );

      t.equal(actual, expected);

      fs.unlinkSync('index.html');

      t.end();
    }));
});
