debugger;
var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
plumber = require('gulp-plumber'),
debug = require('gulp-debug');

var path = {
  scripts: ['', ''],
  images: '',
  styles: './app/assets/styles/styles.css'
};

gulp.task('default', function() {
  console.log("Hooray - you created a Gulp task.");
});

gulp.task('html', function() {
  console.log("Imagine something useful being done to your HTML here.");
});

gulp.task('styles', function() {
  return gulp.src(path.styles)
    .pipe(postcss([cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'))
});

gulp.task('watch', function() {

  gulp.watch('./app/index.html', function() {
    gulp.start('html');
  });

  gulp.watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });

});
