import gulp from "gulp"
import {path} from "./gulp/config/path.js"
import {plugins} from "./gulp/config/plugins.js"

global.site = {
	gulp, path, plugins
}

import {scss} from "./gulp/tasks/sass.js"
import {images} from "./gulp/tasks/img.js"
import {html} from "./gulp/tasks/html.js"
import {js} from "./gulp/tasks/javascript.js"
import {reset} from "./gulp/tasks/del.js"

let watcher = () => {
	gulp.watch(path.watch.sass, scss)
	gulp.watch(path.watch.html, html)
	gulp.watch(path.watch.images, images)
	gulp.watch(path.watch.js, js)
}

const mainTasks = gulp.parallel(scss, images, html, js);
const result = gulp.series(reset, mainTasks, gulp.parallel(watcher));
gulp.task('default', result); 