var gulp = require('gulp');
var newer = require('gulp-newer');
var concat = require('gulp-concat');
var deporder = require('gulp-deporder');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');
const babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var htmlclean = require('gulp-htmlclean');
const imagemin = require('gulp-imagemin');

// folders
folder = {
	src: 'public/',
	build: 'dist/'
}

gulp.task('img', function imgSquash() {
	return gulp .src(folder.src + "img/**")
	.pipe(imagemin()) 
	.pipe(gulp.dest(folder.build + "img"));
});

 gulp.task('css', function(){
	return gulp.src(folder.src + 'css/**.css')
	   .pipe(cssnano())
	   .pipe(gulp.dest('dist/css'));
 });

// HTML processing
gulp.task('html', function() {
	var out = folder.build + '/', page = gulp.src(folder.src + '/**.html')
		.pipe(newer(out));

	// minify production code
	page = page.pipe(htmlclean());

	return page.pipe(gulp.dest(out));
});

// JavaScript processing
gulp.task('js', function() {
	var jsbuild = gulp.src(folder.src + 'js/**/*')
	.pipe(deporder())
	.pipe(concat('main.js'));

	jsbuild = jsbuild
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(concat('all.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist'));

	return jsbuild.pipe(gulp.dest(folder.build + 'js/'));
});