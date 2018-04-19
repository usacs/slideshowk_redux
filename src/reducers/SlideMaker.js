//SlideMaker.js
import { GET_IMAGE } from '../actions/ActionTypes' 

const initialState = {
	imageurl: '',
	author: '',
	text: ''
}

const SlideMaker =  (state = initialState, action) => {
	switch(action.type) {
		case GET_IMAGE: 
			return {
				...state,
				imageurl: action.url,
				text: action.text,
				author: action.author
			}
		default: 
			return state
	}
}

export default SlideMaker
