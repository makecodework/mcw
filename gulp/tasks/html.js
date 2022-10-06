import webHtml from "gulp-webp-html-nosvg"
export const html = () => {
	return site.gulp.src(site.path.src.html)
		.pipe(webHtml())
		.pipe(site.gulp.dest(site.path.build.html))
}