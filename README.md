# gulp-fileindex  

[![Build
Status](https://travis-ci.org/raiseandfall/gulp-fileindex.svg)](https://travis-ci.org/raiseandfall/gulp-fileindex)  

> Outputs a list of pages links in an HTML page

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
    .pipe(fileindex());
});
```

## OPTIONS

### fileindex(outputFilename, options)

#### outputFilename
Type: `String`  
_Optional_  
**Default** index.html  

Filename for the listing page where the links will be written.

#### options.showOnlyFilename
Type: `Boolean`  
_Optional_  
**Default** false  

Wether or not to show only the filenames in the HTML listing page.

## CONTRIBUTE
```shell
$ npm run test
```

## LICENSE
MIT
