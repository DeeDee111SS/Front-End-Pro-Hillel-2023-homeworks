const { src, dest, parallel } = require('gulp');

const copyCommonScss = () => {
    return src('dist/scss/common/common.scss')
        .pipe(dest('build/styles'));
};

const copyAllCommonScss = () => {
    return src('dist/scss/common/*.scss')
        .pipe(dest('build/styles'));
};

const copyAllScss = () => {
    return src(['dist/**/*.scss', '!dist/project/**'])
        .pipe(dest('build/styles'));
};

exports.copyCommonStyle = copyCommonScss;
exports.copyAllStyle = parallel(copyCommonScss, copyAllCommonScss, copyAllScss);


