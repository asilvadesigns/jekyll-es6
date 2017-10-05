import gulp from 'gulp';
import cp from 'child_process';
import sync from 'browser-sync';

const JEKYLL = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
const PATHS = {
  jekyll: {
    src: ['./index.html', './_includes/*', './_layouts/*', './_pages/*', './_posts/*', './_projects'],
    dest: './_site/'
  }
}

const Build = (done) => {
  return cp.spawn(JEKYLL , ['build'], {stdio: 'inherit'}).on('close', done);
}

const Reload = () => {
  sync.reload();
}

const Serve = () => {
  sync.init({
    server: PATHS.jekyll.dest,
    notify: false
  });
}

const Watch = () => {
  gulp.watch(PATHS.jekyll.src).on('change', gulp.series(Build, Reload));
}

gulp.task('default',
  gulp.series(
    Build,
    gulp.parallel(Serve, Watch)
  )
);
