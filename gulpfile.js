const gulp = require("gulp")
const gulpConcat = require("gulp-concat")

const SCRIPTS = [
  "./tmp/client/index.js",
  "./static/index.js"
]
const STYLES = [
  "./node_modules/normalize.css/normalize.css",
  "./static/index.css"
]
const HTMLS = [
  "./static/index.html"
]
const SCRIPT = "index.js"
const STYLE = "index.css"
const DESINATION = "./tmp/"

gulp.task("scripts", () => {
  return gulp
    .src(SCRIPTS)
    .pipe(gulpConcat(SCRIPT))
    .pipe(gulp.dest(DESINATION))
})

gulp.task("styles", () => {
  return gulp.src(STYLES)
    .pipe(gulpConcat(STYLE))
    .pipe(gulp.dest(DESINATION))
})

gulp.task("htmls", () => {
  return gulp.src(HTMLS)
    .pipe(gulp.dest(DESINATION))
})

gulp.task("build", ["scripts", "styles", "htmls"])
