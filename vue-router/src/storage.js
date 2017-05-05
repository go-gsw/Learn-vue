const STORAGE_KEY='todos-vuejs'
export default{
	fetch(){
		return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
	},
	save(items){
		return window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
	}
}