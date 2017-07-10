# gulp-fileindex  

[![Build
Status](https://travis-ci.org/raiseandfall/gulp-fileindex.svg)](https://travis-ci.org/raiseandfall/gulp-fileindex) [![Downloads](https://img.shields.io/npm/dt/gulp-fileindex.svg)](https://www.npmjs.com/package/gulp-fileindex)

> Outputs a list of pages links in an HTML page

> There is also a version for [Broccoli](https://github.com/raiseandfall/broccoli-fileindex)

## [CHANGELOG](./CHANGELOG.md)

## INSTALL
```shell
$ npm install gulp-fileindex
```

## USAGE
```javascript
var fileindex = require('gulp-fileindex');

gulp.task('fileindex', function() {
  return gulp.src('pages/*.html')
    .pipe(fileindex())
    .pipe(gulp.dest('./'));
});
```

## OPTIONS

### fileindex(outputFilename, options)

#### outputFilename
Type: `String`  
_Optional_  
**Default** index.html  

Filename for the listing page where the links will be written.

#### options.onlyFilenames
Type: `Boolean`  
_Optional_  
**Default** false  

Wether or not to show only the filenames in the HTML listing page.

#### options.showExtension
Type: `Boolean`  
_Optional_  
**Default** true

Wether or not to show the pages' file extension

## CONTRIBUTE
```shell
$ npm run dev

# Only run the tests
$ npm run test
```

## LICENSE
MIT
