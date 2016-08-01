const gulp = require("gulp")
const gulpConcat = require("gulp-concat")

const STYLES = [
  "./node_modules/normalize.css/normalize.css",
  "./client/index.css"
]
const HTMLS = [
  "./client/index.html"
]
const STYLE = "index.css"
const DESINATION = "./tmp/"

gulp.task("styles", () => {
  return gulp.src(STYLES)
    .pipe(gulpConcat(STYLE))
    .pipe(gulp.dest(DESINATION))
})

gulp.task("htmls", () => {
  return gulp.src(HTMLS)
    .pipe(gulp.dest(DESINATION))
})

gulp.task("watch", ["styles", "htmls"], () => {
  gulp.watch(STYLES, ["styles"])
  gulp.watch(HTMLS, ["htmls"])
})
gulp.task("build", ["styles", "htmls"])
