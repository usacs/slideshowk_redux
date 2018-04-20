//SlideMaker.js
import { GET_IMAGE, FIND_IMAGE } from '../actions/ActionTypes' 

const initialState = {
	imageurl: 'https://vignette.wikia.nocookie.net/joke-battles/images/5/5a/Black.jpg/revision/latest?cb=20161223050425',
	author: '...',
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
