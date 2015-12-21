var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function () {
	gulp.src('style.scss')
		.pipe(sass())
		.pipe(gulp.dest('assets/css'))
});

gulp.task('watch', function() {
	gulp.watch('*.scss', ['sass']);
});

gulp.task('watch', function() {
	gulp.watch('*.scss', ['sass']);
});

gulp.task('default', ['sass','watch']);