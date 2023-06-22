const { src, dest, parallel, watch } = require('gulp');

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

const changeAppStylesFile = (done) => {
    console.log('Ой, файл index.scss изменился');

    done();
};

const checkFileStructure = (done) => {
    console.log('Изменилась структура файлов');

    done();
};

const watcherChangeAppStylesFile = () => {
    watch('dist/scss/index.scss', { events: 'change' }, changeAppStylesFile);
};

const watcherChangeFileStructure = () => {    
    watch('dist/scss/', { events: ['add', 'unlink'] }, checkFileStructure);
};

exports.copyCommonStyle = copyCommonScss;
exports.copyAllStyle = parallel(copyCommonScss, copyAllCommonScss, copyAllScss);
exports.watcher1= watcherChangeAppStylesFile;
exports.watcher2 = watcherChangeFileStructure;

