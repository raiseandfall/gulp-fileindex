'use strict';

var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var File = gutil.File;
var through = require('through2');
var path = require('path');
var extend = require('extend');

var PLUGIN_NAME = 'gulp-fileindex';
var DEFAULT_OPTIONS = {
  onlyFilenames: false,
  showExtension: true
};
var DEFAULT_PAGE = 'index.html';

module.exports = function() {
  var options = arguments[0];
  var outputFilename = DEFAULT_PAGE;
  var fileName;
  var pagesFilenames = [];

  // If filename
  if (typeof options === 'string') {
    outputFilename = options || DEFAULT_PAGE;
    options = arguments[1];
  }

  // Options
  options = extend({}, DEFAULT_OPTIONS, options);

  if (typeof outputFilename === 'string') {
    fileName = outputFilename;
  } else if (typeof outputFilename.path === 'string') {
    fileName = path.basename(outputFilename.path);
  } else {
    throw new PluginError(PLUGIN_NAME, 'Missing path file for ' + PLUGIN_NAME);
  }

  // buildLinks
  var buildLinks = function(pages) {
    return pages.map(function(path) {
      var label = options.onlyFilenames ? path.split('/').pop() : path;

      if (!options.showExtension) {
        label = label.split('.').slice(0, -1).join('.');
      }
      return '<a href="' + path + '"' +
        ' style="display:block;margin-bottom:15px;padding-left:15px;">' +
        label +
        '</a>\n';
    }).join('');
  };

  // bufferFile
  var bufferFile = function(file, enc, cb) {
    if (file.isNull()) {
      cb();
      return;
    }

    pagesFilenames.push(file.relative);

    cb();
  };

  // endStream
  var endStream = function(cb) {
    if (pagesFilenames.length === 0) {
      cb();
      return;
    }

    this.push(new File({
      path: fileName,
      contents: new Buffer(buildLinks(pagesFilenames))
    }));

    cb();
  };

  return through.obj(bufferFile, endStream);
};
