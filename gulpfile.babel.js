import gulp from 'gulp';

const Message = (done) => {
  console.log('hello world!');
  done();
}

gulp.task('default', gulp.series(Message));
