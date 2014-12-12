var gulp = require('gulp'),
	  sass = require('gulp-ruby-sass'),
	  autoprefixer = require('gulp-autoprefixer'),
	  del = require('del');

var destCSS = '../Dropbox/Public/tumblr-theme'

gulp.task('styles', function() {
	return gulp.src('src/styles/main.scss')
		.pipe(sass({ style: 'expandend' }))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(gulp.dest(destCSS));
});

gulp.task('clean', function(cb) {
	del([destCSS, 'dist/assets/js', 'dist/assets/img'], cb)
});


gulp.task('default', ['clean'], function() {
  gulp.start('styles');
});


gulp.task('watch', function() {
	gulp.watch('src/styles/**/*.scss', ['styles']);
});