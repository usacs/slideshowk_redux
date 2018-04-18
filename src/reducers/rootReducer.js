import { combineReducers } from 'redux'
import SlideNav from './SlideNav'
import SlideMaker from './SlideMaker'

const rootReducer = combineReducers({
	slidenav: SlideNav,
	slidemaker: SlideMaker,

})

export default rootReducer
