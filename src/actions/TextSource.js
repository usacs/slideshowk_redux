//TextSource.js
import { stext } from '../resources/SubjectText.js'
import { ptext } from '../resources/PepperText.js'
import { ttext } from '../resources/TechText.js'

const all = ttext.concat(stext).concat(ptext)




export const getNextText = (query) => {
	
	let choose = Math.ceil(Math.random() * 100) 
	//console.log(choose)
	if(choose >= 67) {
		shuffle(ptext)
		return getText(query, ptext)
	} else if(choose >= 33) {
	//random tech stack
		shuffle(ttext)
		shuffle(stext)
		return getText(query, ttext) + '\n' + getText(query, stext)
	} else {
		shuffle(stext)
		return getText(query, stext)
	}
}



export const getNextImage = (query) => {
	const rands = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	for(let i = 0; i < query.length; i++) {
		query = query + 
			rands.charAt((Math.floor(Math.random() * rands.length * i)) % query.length)
	}
	
	shuffle(all)
	return getText(query, all)

}


const getText = (word, text) => {
	//return text[getHash(word, text.length)]
	let ind = getHash(word, text.length)
	//console.log(ind)
	return text[ind]
}



const getHash = (word, bins) => {

	let gsum = 0
	let ssum = 0
	for(let i = 0; i < word.length; i++) {
		gsum+=Math.round(word.charCodeAt(i) * Math.pow(199, Math.random() * i))
		ssum+=Math.round(Math.random() * word.charCodeAt(i))
	}	

	let val = Math.round(Math.random() * (gsum % bins + ssum * Math.random()))
	if(val > bins) {
		val = val % bins
	}

	//console.log(val)

	return val
}

const shuffle  = (array) => {
  var i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}
