import gulp from 'gulp';

gulp.task('message', (done) => {
  console.log('hello world!');
  done();
});

gulp.task('default', gulp.series('message'));
