var gulp = require('gulp')
var gutil = require('gulp-util')
var gulpSequence = require('gulp-sequence')
var replace = require('gulp-replace')
var exec = require('child_process').exec

gulp.task('release', gulpSequence(
    'montee-de-version',
    // 'build-apk',
    'commit',
    'tag'))

let release = function () {
  const argv = require('yargs')
      .demandOption(['code', 'name'])
      .argv
  return argv
};

gulp.task('montee-de-version', () => {
  const { code, name } = release()

  return gulp
      .src('android/app/build.gradle')
      .pipe(replace(
          /        versionCode .+/,
          `        versionCode ${code}`))
      .pipe(replace(
          /        versionName .+/,
          `        versionName "${name}"`))
      .pipe(gulp.dest('android/app/'))
})

gulp.task('build-apk', (cb) => {
  exec('cd android && ./gradlew assembleRelease', (err, stdout, stderr) => {
    console.log(stdout)
    console.error(stderr)
    cb(err)
  })
})

gulp.task('commit', () => {
  const { name } = release()
  exec(`git commit -am "[RELEASE] v${name}"`)
})
gulp.task('tag', () => {
})