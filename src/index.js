import React from 'react'
import { render } from 'react-dom'
import Presentation from './containers/Presentation'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/rootReducer'

 


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(rootReducer)

store.subscribe(() => {
  console.log(store.getState())
})

const App = () => (
	<div>
		<Provider store={store}>
			<Presentation />
		</Provider>
	</div>
);

render(<App />, document.getElementById('root'))


