const {src, task}= require('gulp');
const ghPages = require('gulp-gh-pages');

task('deploy', () => src('./dist/**/*').pipe(ghPages()));