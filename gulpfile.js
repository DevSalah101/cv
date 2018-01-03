const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const uncss = require('postcss-uncss');
const autoprefixer = require('autoprefixer');

gulp.task("scss", () => {
	const plugins = [
		// uncss({
		// 	html: ['*.html', './portfolio.html', '_includes/*.html', '_layouts/*.html'],
		// 	ignore: ['.fade']
		// }),
		autoprefixer({
			browsers: ['last 5 versions'],
			casecase: false
		})
	];
	return gulp.src("_sass/**/*.scss")
	.pipe(sass({outputStyle: "expanded"}).on('error', sass.logError))
	.pipe(postcss(plugins))
	.pipe(gulp.dest("assets/css/"));

});
gulp.task("watch",['scss'], () => {
	gulp.watch("_sass/**/*.scss", ['scss']);
});
gulp.task("default", ['watch']);