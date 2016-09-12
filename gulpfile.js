// Include gulp
var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var WebpackDevServer = require('webpack-dev-server');
var livereload = require('gulp-livereload');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var files = {
    client: [ 'client/**/*.js', 'client/**/*.jsx' ],
    server: [ 'server/**/*.js' ]
};

gulp.task('build', [ 'webpack-build' ]);

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
        .pipe(livereload());
});

// Concatenate & Minify JS
// gulp.task('scripts', function() {
//     return gulp.src('js/*.js')
//         .pipe(concat('all.js'))
//         .pipe(gulp.dest('dist'))
//         .pipe(rename('all.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/js'));
// });

// // Watch Files For Changes
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('src/*.js', ['lint', 'build', 'webpack-dev-server']);
    gulp.watch('src/scss/**/*.scss', ['sass']);
});

// // Default Task
// gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
gulp.task('default', ['webpack-build', 'webpack-dev-server', 'sass', 'watch']);

gulp.task('webpack-build', function (callback) {
    webpack(webpackConfig, function (err, stats) {
        if (err)
            throw new gutil.PluginError('webpack:build', err);
        gutil.log('[webpack:build] Completed\n' + stats.toString({
            assets: true,
            chunks: false,
            chunkModules: false,
            colors: true,
            hash: false,
            timings: false,
            version: false
        }));
        callback();
    });
});

gulp.task('webpack-dev-server', function(callback) {
  // modify some webpack config options
  var myConfig = Object.create(webpackConfig);
  myConfig.devtool = 'eval';
  myConfig.debug = true;

  console.log(myConfig.output.path)
  // Start a webpack-dev-server
  new WebpackDevServer(webpack(myConfig), {
    publicPath: '/' + webpackConfig.output.path,
    stats: {
      colors: true
    },
    hot: true
  }).listen(8080, 'localhost', function(err) {
    if(err) throw new gutil.PluginError('webpack-dev-server', err);
    gutil.log('[webpack-dev-server]', 'http://localhost:8080/dist/index.html');
  });
});
