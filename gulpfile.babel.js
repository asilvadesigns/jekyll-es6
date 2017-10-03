import gulp from 'gulp';

gulp.task('message', (done, MESSAGE) => {
  console.log('hello world!');
  done();
});

gulp.task('default', gulp.series('message'));
