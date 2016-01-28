var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
	wiredep = require('wiredep').stream,
	autoprefixer = require('gulp-autoprefixer'),
	wiredep = require('wiredep').stream,
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    scss = require('gulp-sass'),
	clean = require('gulp-clean'),
    connect = require('gulp-connect'),
	ftp = require('gulp-sftp'),
    concatCss = require('gulp-concat-css'),
    rename = require("gulp-rename"),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    uncss = require('gulp-uncss'),
    sass = require('gulp-ruby-sass');
 

// Task for SASS - SASS
gulp.task('sass', function () {
  return sass('app/sass/**/*.sass')
    .on('error', sass.logError)
    .pipe(gulp.dest('app/css'))
    .pipe(connect.reload());
});

// Task for SASS - SCSS
//gulp.task('scss', function () {
//  gulp.src('app/sass/**/*.scss')
//    .pipe(sass({ includePaths : ['app/sass/'] }))
//    .pipe(sass().on('error', sass.logError))
//    .pipe(gulp.dest('app/css'))
//    .pipe(connect.reload());
//});

// Task for CSS
gulp.task('css', function () {
    return gulp.src('app/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(connect.reload());
});

// Task for HTML
gulp.task('html', function () {
    gulp.src('app/index.html')
    .pipe(connect.reload());
});

// Task for JavaScript
gulp.task('js', function () {
    gulp.src('app/js/**/*.js')
    .pipe(connect.reload());
});

// Connecttion Task (created localhost in project)
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});

// SFTP Task
gulp.task('ftp', function () {
    return gulp.src('dist/**/*')
        .pipe(sftp({
            host: '',
            user: '',
            pass: '',
            remotePath: '/'
        }));
});

// Dist directory Cleaning Task 
gulp.task('clean', ['clean'], function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

// Builder Task
gulp.task('build', function () {
    var assets = useref.assets();
 
    return gulp.src('app/*.html')
        .pipe(assets)
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});

// Bower & Wiredep Task 
gulp.task('bower', function () {
  gulp.src('./app/index.html')
    .pipe(wiredep({
      directory : "app/bower_components"
    }))
    .pipe(gulp.dest('./app'));
});

gulp.task('watch', function() {
	gulp.watch('bower.json', ['bower'])
    gulp.watch('app/css/*.css', ['css'])
    gulp.watch('app/index.html', ['html'])
    gulp.watch('app/js/**/*.js', ['js'])
    gulp.watch('app/sass/**/*.scss', ['scss'])
    gulp.watch('app/sass/**/*.sass', ['sass']);
});


// Default Task
gulp.task('default', ['connect', 'html', 'css', 'sass', 'js', 'watch']);


