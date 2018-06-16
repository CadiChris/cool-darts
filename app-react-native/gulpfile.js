var gulp = require("gulp");
var gulpSequence = require("gulp-sequence");
var gutil = require("gulp-util");
var replace = require("gulp-replace");
var exec = require("child_process").exec;

gulp.task(
  "release",
  gulpSequence(
    ["montee-de-version-android", "montee-de-version-ios"],
    "build-apk",
    "commit",
    "tag",
    "push",
    "afficher-reste-a-faire"
  )
);

gulp.task("montee-de-version-android", () => {
  const { code, name } = release();

  return gulp
    .src("android/app/build.gradle")
    .pipe(replace(/versionCode .+/, `versionCode ${code}`))
    .pipe(replace(/versionName .+/, `versionName "${name}"`))
    .pipe(gulp.dest("android/app/"));
});

gulp.task("montee-de-version-ios", () => {
  const { code, name } = release();

  return gulp
    .src("ios/alkeyacricket/Info.plist")
    .pipe(
      replace(
        /<key>CFBundleVersion<\/key>\n.+/,
        `<key>CFBundleVersion</key>\n\t<string>${code}</string>`
      )
    )
    .pipe(
      replace(
        /<key>CFBundleShortVersionString<\/key>\n.+/,
        `<key>CFBundleShortVersionString</key>\n\t<string>${name}</string>`
      )
    )
    .pipe(gulp.dest("ios/alkeyacricket/"));
});

gulp.task("build-apk", cb => {
  execAvecLog("cd android && ./gradlew assembleRelease", cb);
});

gulp.task("commit", cb => {
  const { name } = release();
  execAvecLog(`git commit -am "[RELEASE] v${name}"`, cb);
});

gulp.task("tag", cb => {
  const { name } = release();
  execAvecLog(`git tag -a v${name} -m "v${name}"`, cb);
});

gulp.task("push", cb => {
  const { name } = release();
  execAvecLog(`git push && git push origin v${name}`, cb);
});

gulp.task("afficher-reste-a-faire", () => {
  const afficher = msg => gutil.log(gutil.colors.inverse(msg));

  afficher(">>> IL RESTE DES ÉTAPES MANUELLES <<<");
  afficher(" - le build iOS via XCode");
  afficher(" - les uploads sur les stores");
});

function release() {
  const argv = require("yargs").demandOption(
    ["code", "name"],
    "Utilisez `yarn info-release` pour obtenir les valeurs actuelles de --code et --name"
  ).argv;
  return argv; // { code, name }
}

function execAvecLog(cmd, cb) {
  exec(cmd, (err, stdout, stderr) => {
    console.log(stdout);
    console.error(stderr);
    cb(err);
  });
}
