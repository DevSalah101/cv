const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const uncss = require('postcss-uncss');

gulp.task("sass", () => {
	const plugins = [
		uncss({
			html: ['index.html', '_includes/*.html', '_layouts/*.html'],
			ignore: ['.fade']
		})
	];

});