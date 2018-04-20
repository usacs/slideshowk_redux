//TextSource.js
import { stext } from '../resources/SubjectText.js'
import { ptext } from '../resources/PepperText.js'
import { ttext } from '../resources/TechText.js'

const all = ttext.concat(stext).concat(ptext)




export const getNextText = (query) => {
	//console.log('query ' + query)
	let choose = Math.floor(Math.random() * 100) 
	//console.log(choose)
	if(choose >= 66) {
		shuffle(ptext)
		return getText(query, ptext)
	} else if(choose >= 33) {
	//random tech stack
		shuffle(ttext)
		shuffle(stext)
		let aug = Math.floor(Math.random()  * 100)
		switch(true) {
			case(aug < 50) :
				return 'We use\n' + getText(query, ttext) + ' ' + getText(query, stext)
			case(aug >= 50) :
				return 'Introducing:\n' + getText(query, ttext) + ' ' + getText(query, stext)
			default:
				return 'HMMMMM.'
		}

	} else {
		shuffle(stext)
		let aug = Math.floor(Math.random() * 10)
		//console.log(aug)
		switch(true) {
			case(aug <= 1) :
				return 'Our best asset:\nthe ' + getText(query, stext)
			case(aug > 1 && aug <= 3) :
				return 'Compare with competitors\'\n' + getText(query, stext)
			case(aug > 3 && aug < 6) :
				return 'Consider the ' + getText(query, stext)
			case(aug >= 6 && aug <= 7) :
				return 'We are in the\n' + getText(query, stext) + ' business'
			case(aug > 7) : 
				return 'Selling ' + getText(query, stext) + '\nsolutions'
			default: 
				return 'UH......'
		}
	}
}



export const getNextImage = (query) => {
	const rands = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	let x = query.length
	for(let i = 0; i < x; i++) {
		query = query + 
			rands.charAt((Math.floor(Math.random() * rands.length * i)) % rands.length)
	}
	//console.log(query)
	
	shuffle(all)
	return getText(query, all)

}


const getText = (word, text) => {
	//return text[getHash(word, text.length)]
	let ind = getHash(word, text.length)
	console.log('length ' + text.length)
	console.log('ind ' + ind)
	console.log('word ' + text[ind])
	return text[ind]
}



const getHash = (word, bins) => {

	let gsum = 0
	let ssum = 0
	for(let i = 0; i < word.length; i++) {
		gsum+=Math.floor(word.charCodeAt(i) * Math.pow(199, Math.random() * i))
		ssum+=Math.floor(Math.random() * word.charCodeAt(i))
	}	

	let val = Math.floor(Math.random() * (gsum % bins + ssum * Math.random()))

	console.log('first val ' + val)
	if(val >= bins) {
		val = val % bins
	}

	console.log('val ' + val)
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
  //console.log(array)
}
