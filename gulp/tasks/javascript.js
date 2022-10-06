
import webpack from "webpack"
import webpackStream from "webpack-stream";

export const js = () => {

	return site.gulp.src(site.path.src.js, {sourcemaps: true})
		.pipe(site.plugins.plumber(
		      site.plugins.notify.onError({
		        title: 'See JS',
		        message: "Error: <%= error.message %>"
		})))
		.pipe(webpackStream({
			mode: "development",
			plugins: [
				new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery', 'window.jQuery': 'jquery' }),
			],
			module: {
			  rules: [
			    { test: /\.js/,exclude: /(node_modules)/,loader: 'babel-loader'},
			    { test: /\.css$/,use: ['style-loader','css-loader'],}
			  ],
			},
			output: {
				filename: "scripts.min.js"
			}
		}))
		.pipe(site.gulp.dest(site.path.build.js))
}