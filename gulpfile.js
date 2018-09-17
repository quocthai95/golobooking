var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var include = require('gulp-file-include');

gulp.task('sass', function () {
	return gulp.src('assets/scss/style.scss')
	  .pipe(sass())
	  .pipe(gulp.dest('assets/css'))
	  .pipe(livereload());
});

gulp.task('include', function() {
  return gulp.src(['html/*.html'])
    .pipe(include({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'))
    .pipe(livereload());
});

gulp.task('watch', function () {
	livereload.listen();
  gulp.watch(['assets/scss/**/*'], ['sass']);
  gulp.watch(['**/*.html'], ['include']);
});

gulp.task('server', function() {
  browserSync({
    notify: false,
    server: {
      baseDir: '.'
    }
  });
  gulp.watch('./*.html', reload);
  gulp.watch('./assets/css/*.css', reload);
  gulp.watch('./assets/js/*.js', reload);
});

gulp.task('default', ['include', 'server', 'sass', 'watch']);
