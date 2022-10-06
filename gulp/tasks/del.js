import del from "del"

export const reset = async() => {
	return del.sync([site.path.build.css],[site.path.build.html],[site.path.build.js])
}