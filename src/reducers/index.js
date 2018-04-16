const initialState = require('../actions/SlideActions.js')

export default (state = initialState, action) => {
  switch (action.type) {
  	case 'NEXT_SLIDE':
      return state.count + 1
    case 'PREV_SLIDE':
      return state.count - 1
    default:
      return state.count
  }
}




