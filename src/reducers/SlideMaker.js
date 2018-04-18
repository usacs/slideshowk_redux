import { GET_IMAGE } from '../actions/ActionTypes' 

const initialState = {
	imageurl: ''
}

const SlideMaker =  (state = initialState, action) => {
	switch(action.type) {
		case GET_IMAGE: 
			return {
				...state, 
				imageurl: action.data
			}
		default: 
			return state
	}
}

export default SlideMaker
