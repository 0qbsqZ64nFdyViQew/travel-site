var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimport = require('postcss-import');

var path = {
  scripts: ['', ''],
  images: '',
  styles: './app/assets/styles/styles.css'
};

gulp.task('styles', function() {
  return gulp.src(path.styles)
    .pipe(postcss([cssimport, cssvars, nested, autoprefixer]))
    .on('error', function(errorInfo){
      console.log(errorInfo.toString());
/* logs the error in compact form (toString()) */
      this.emit('end');
/* if there is an error, it will tell(emit) that it has sucessfully
endend(end) and therfore prvents watch from crashing!*/
    })
    .pipe(gulp.dest('./app/temp/styles'));
});
