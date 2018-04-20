//SlideMaker.js
import { GET_IMAGE, FIND_IMAGE } from '../actions/ActionTypes' 

const initialState = {
	imageurl: 'https://media.giphy.com/media/bbr1n5lZGTpYc/giphy.gif',
	author: 'https://www.reddit.com/r/loadingicon/comments/3teuj5/spinning_rainbow_circles/',
	finished: false
}

const SlideMaker =  (state = initialState, action) => {
	switch(action.type) {
		case GET_IMAGE: 
			return {
				imageurl: action.url,
				author: action.author,
				finished: true
			}
		case FIND_IMAGE:
			return initialState
		default: 
			return state
	}
}

export default SlideMaker
