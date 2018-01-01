const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const uncss = require('postcss-uncss');
const autoprefixer = require('autoprefixer');

gulp.task("sass", () => {
	const plugins = [
		uncss({
			html: ['index.html', '_includes/*.html', '_layouts/*.html'],
			ignore: ['.fade']
		}),
		autoprefixer({
			browsers: ['last 5 versions'],
			casecase: false
		})
	];
	return gulp.src("_sass/**/*.scss")
	.pipe(postcss(plugins))
	.pipe(gulp.dest("assets/css/"));

});