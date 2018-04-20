import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import { withRouter } from 'react-router'
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom'
import rootReducer from './reducers/rootReducer'
import HowToPlay from './components/HowToPlay'
import Start from './components/Start'
require('./styles/styles.css')


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)))



/*
store.subscribe(() => {
  console.log(store.getState())
})
*/

const App = () => (
	<div>
		<Provider store={store}>
			<Router>
				<div>
					<div className = "pagetitle">
						<h1>Slideshow Karaoke</h1>
					</div>
					<ul className = "header">
						<li>
							<Link to = "/HowToPlay">
								How To Play
							</Link></li>
						<li>
							<Link to = "/Start">
								Get Started
							</Link></li>
					</ul>
					<div className = "content">
					</div>
					<div className = "footer">
					</div>

					
					<Route path = "/HowToPlay" component={HowToPlay} />
					<Route path = "/Start" component={Start} />
					<Route path = "/" render={() => <Redirect to="/HowToPlay" />} />
				</div>
			</Router>
		</Provider>
	</div>
)

render(<App />, document.getElementById('root'))

export default withRouter(App)


