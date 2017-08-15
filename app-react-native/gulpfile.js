var gulp = require('gulp')
var gutil = require('gulp-util')
var gulpSequence = require('gulp-sequence')
var replace = require('gulp-replace')
var exec = require('child_process').exec

gulp.task('release', gulpSequence('montee-de-version', 'build-apk'))

gulp.task('montee-de-version', () => {
  const argv = require('yargs')
      .demandOption(['version'])
      .argv

  const nouvelleVersion = argv.version
  const versionPrecedente = nouvelleVersion - 1

  gutil.log(`v${versionPrecedente} --> v${nouvelleVersion}`)

  return gulp
      .src('android/app/build.gradle')
      .pipe(replace(
          `        versionCode ${versionPrecedente}`,
          `        versionCode ${nouvelleVersion}`))
      .pipe(gulp.dest('android/app/'))
})

gulp.task('build-apk', (cb) => {
  exec('cd android && ./gradlew assembleRelease', (err, stdout, stderr) => {
    console.log(stdout)
    console.error(stderr)
    cb(err)
  })
})