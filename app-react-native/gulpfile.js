var gulp = require('gulp')
var gutil = require('gulp-util')
var gulpSequence = require('gulp-sequence')
var replace = require('gulp-replace')
var exec = require('child_process').exec

gulp.task('release', gulpSequence(
    'montee-de-version',
    'build-apk',
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
  execAvecLog('cd android && ./gradlew assembleRelease', cb)

})

gulp.task('commit', (cb) => {
  const { name } = release()
  execAvecLog(`git commit -am "[RELEASE] v${name}"`, cb)
})

gulp.task('tag', (cb) => {
  const { name } = release()
  execAvecLog(`git tag -a v${name} -m "v${name}"`, cb)
})

function execAvecLog(cmd, cb) {
  exec(cmd, (err, stdout, stderr) => {
    console.log(stdout)
    console.error(stderr)
    cb(err)
  })}