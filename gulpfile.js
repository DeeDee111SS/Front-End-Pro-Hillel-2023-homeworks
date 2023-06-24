const { src, dest, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();

const development = series(
    parallel(buildSass, buildPug),
    browserSyncJob
);

const browserSyncJob = () => {
    browserSync.init({
        server: "build/"
    });

    watch('dist/sass/*.scss', buildSass);
    watch('dist/pages/*.pug', buildPug);
};

const buildSass = () => {
    console.log('Компиляция SASS');

    return src('dist/scss/*.scss')
        .pipe(sass())
        .pipe(dest('build/styles/'))
        .pipe(browserSync.stream());
}

const buildPug = () => {
    console.log('Компиляция Pug');

    return src('dist/pages/*.pug')
        .pipe(pug())
        .pipe(dest('build/'))
        .pipe(browserSync.stream());
}

exports.development = development;