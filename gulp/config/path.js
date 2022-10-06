import * as nodePath from "path"
const buildFolder = `.`
const srcFolder = `./src`

export const path = {
	build: {
		html: `${buildFolder}/`,
		css: `${buildFolder}/css/`,
		images: `${buildFolder}/images/`,
		js: `${buildFolder}/js/`,
	},
	src: {
		html: `${srcFolder}/*.html`,
		sass: `${srcFolder}/sass/**/*.scss`,
		images: `${srcFolder}/images/**/*.{jpg,jpeg,png,webp}`,
		svg: `${srcFolder}/images/**/*.svg`,
		js: `${srcFolder}/js/scripts.js`,
	},
	watch: {
		html: `${srcFolder}/*.html`,
		sass: `${srcFolder}/sass/**/*.scss`,
		images: `${srcFolder}/images/**/*.{jpg,jpeg,png,webp}`,
		js: `${srcFolder}/js/**/*.js`,
	}
}