import React from 'react'
import { render } from 'react-dom'
import Presentation from './containers/Presentation'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import slidenav from './reducers/rootReducer'


const store = createStore(rootReducer)

const App = () => (
	<div>
		<Provider store={store}>
			<Presentation />
		</Provider>
	</div>
);

render(<App />, document.getElementById('root'))


