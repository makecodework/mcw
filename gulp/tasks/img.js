
import webp from "gulp-webp"
import imagemin from "gulp-imagemin"
import newer from "gulp-newer"

export const images = () => {
	return site.gulp.src(site.path.src.images)
		.pipe(newer(site.path.build.images))
		.pipe(webp())
		.pipe(site.gulp.dest(site.path.build.images))
		.pipe(site.gulp.src(site.path.src.images))
		.pipe(newer(site.path.build.images))
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: true}],
			interlaced: true,
			optimizationLevel: 3 //from 0 to 7

		}))
		.pipe(site.gulp.dest(site.path.build.images))
}