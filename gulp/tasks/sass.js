import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import rename from "gulp-rename"
import cleanCss from "gulp-clean-css"
import webpCss from "gulp-webpcss"
import mediaQueries from "gulp-group-css-media-queries"
import autoprefixer from "gulp-autoprefixer"

export const scss = () => {
	return site.gulp.src(site.path.src.sass, { sourcemap: true})
		.pipe(site.plugins.plumber(
		      site.plugins.notify.onError({
		        title: 'See SASS',
		        message: "Error: <%= error.message %>"
		})))
		.pipe(sass({
			outpuStyle: "expanded"
		}))
		.pipe(mediaQueries())
		.pipe(webpCss({
	      webpClass: ".webp",
	      nowebpClass: ".no-webp"
	    }))
	    .pipe(autoprefixer({
	      cascade: true,
	      overrideBrowserslist: ["last 3 versions"],
	      grid: true

	    }))
	    .pipe(
	      cleanCss()
	    )
	    .pipe(rename({
	      extname: ".min.css"
	    }))
	    .pipe(site.gulp.dest(site.path.build.css))
}