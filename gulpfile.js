// importação do Gulp
const gulp = require('gulp');

// importação do plug-in Sass
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

// importação do plug-in Imagens
const imagemin = require('gulp-imagemin');

// importação do plug-in JS
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');

// função para a leitura das imagens do diretório, comprime e salva em outro diretório
function compressImages(){
    return gulp.src('./source/images/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

// função para a leitura do JS do diretório, compressão e obfuscação do código JS e salva em outro diretório
function compressJavaScript(){
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'));
}

// função para a leitura do arquivo main.scss, mapear, comprimir e salvar o arquivo CSS em outro diretório
function compileSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

// exportação da função padrão para monitoramento do diretório do Sass, de imagens e do JS
exports.default = function(){
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compileSass));
    gulp.watch('./source/images/*.*', {ignoreInitial: false}, gulp.series(compressImages));
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(compressJavaScript));    
}