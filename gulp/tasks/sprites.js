var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename'),
del = require('del');

var config = {
  shape: {
    spacing: {
      padding: 1
    }
  },
  mode: {
    css: {
      sprite: 'sprite.svg',
      render: {
        css: {
          template: './gulp/templates/sprite.css'
        }
      }
    }
  }
}

gulp.task('beginClean', function(){
  return del(['./app/temp/sprites','./app/assets/images/sprites']);
}); 

gulp.task('createSprite', ['beginClean'], function(){
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprites/'));
});

gulp.task('copySpriteGraphic',['createSprite'], function() {
  return gulp.src('./app/temp/sprites/css/**/*.svg')
  .pipe(gulp.dest('./app/assets/images/sprites'));
});

/*[] = Dependency --> copySpriteCSS will run after createSprite is finished*/
gulp.task('copySpriteCSS',['createSprite'], function(){
  return gulp.src('./app/temp/sprites/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('endClean',['copySpriteGraphic','copySpriteCSS'], function(){
  return del(['./app/temp/sprites']);
});

gulp.task('icons',['beginClean','createSprite','copySpriteGraphic','copySpriteCSS','endClean'])
