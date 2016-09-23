const gulp = require("gulp")
const gulpConcat = require("gulp-concat")
const gulpMustache = require("gulp-mustache")
const join = require("path").join
const mergeAll = require("ramda").mergeAll
const Dotenv = require("dotenv")
const requireEnvironmentVariables = require("require-environment-variables")

Dotenv.load({silent: true})

const STYLES = [
  "./node_modules/normalize.css/normalize.css",
  "./node_modules/animate.css/animate.css",
  "./node_modules/font-awesome/css/font-awesome.css",
  "./node_modules/bulma/css/bulma.css",
  "./source/client/index.css"
]
const HTMLS = [
  "./source/client/index.html"
]
const FONTS = [
  "./node_modules/font-awesome/fonts/*"
]
const STYLE = "index.css"
const DESINATION = "./transpiled/client/"

gulp.task("styles", () => {
  return gulp.src(STYLES)
    .pipe(gulpConcat(STYLE))
    .pipe(gulp.dest(DESINATION))
})

gulp.task("fonts", () => {
  return gulp.src(FONTS)
    .pipe(gulp.dest(join(DESINATION, "fonts")))
})

gulp.task("htmls", () => {
  return gulp.src(HTMLS)
    .pipe(
      gulpMustache(mergeAll([process.env]))
    )
    .pipe(gulp.dest(DESINATION))
})

gulp.task("watch", ["styles", "htmls", "fonts"], () => {
  gulp.watch(STYLES, ["styles"])
  gulp.watch(HTMLS, ["htmls"])
  gulp.watch(FONTS, ["fonts"])
})
gulp.task("build", ["styles", "htmls", "fonts"])
