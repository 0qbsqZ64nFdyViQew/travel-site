var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  gulp.watch('./app/index.html', function() {
    browserSync.reload();
  });

  gulp.watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  });
});

/* ['styles'] is a dependency which means that it has to run and
complete before 'cssInject' will run */
/* cssInject helps us to update the styles in the browser without
refreshing --> .reload() would do that*/
gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/styles/styles.css')
  .pipe(browserSync.stream());
});
