const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


//compile scss into css
function style() {
    return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
}

//image minifier
function imgSquash() {
    return gulp
    .src("./src/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./src/minified/images"))
}

function watch() {
    browserSync.init({
        server: {
           baseDir: "./src",
           index: "/index.html"
        }
    });
    gulp.watch('src/scss/**/*.scss', style)
    gulp.watch('src/*.html').on('change',browserSync.reload);
    gulp.watch('src/js/**/*.js').on('change', browserSync.reload);
    gulp.watch('src/images/*', imgSquash)
}
exports.style = style;
exports.watch = watch;