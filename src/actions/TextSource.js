//TextSource.js
import { stext } from '../resources/SubjectText.js'
import { ptext } from '../resources/PepperText.js'


export const getNextText = (query) => {
	
	let choose = Math.ceil((Math.random() + query.charCodeAt(0) / 1000) * 100) 
	//console.log(choose)
	if(choose > 67) {
		return getText(query, ptext)
	}
	return getText(query, stext)
}



export const getNextImage = (query) => {
	const rands = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	
	let seed = query + 
		rands.charAt(Math.floor(Math.random() * rands.length))
	
	return getText(seed, stext)

}


const getText = (word, text) => {
	//return text[getHash(word, text.length)]
	let ind = getHash(word, text.length)
	//console.log(ind)
	return text[ind]
}



const getHash = (word, bins) => {

	let sum = 0
	for(let i = 1; i < word.length; i++) {
		sum+=Math.round(word.charCodeAt(i) * Math.pow(131, i) * Math.random())
	}	
	return sum % bins
}
