//index.js
//landing houses app

import React from 'react'
import { render }  from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/index.js'
import App from './components/App.js'

//styling
//CSS here

const store = createStore(rootReducer)

render(
	<Provider store={store}>
		<App /> 
	</Provider>, 
	document.getElementById("root")
)

