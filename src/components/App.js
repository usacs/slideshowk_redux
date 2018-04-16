//App.js
//responsible for main view upon landing

import React from 'react'
import { Route, NavLink, HashRouter } from 'react-router-dom'
//import { Start, HowToPlay } from '../containers'
import Presentation from '../components/Presentation'

export default class App extends React.Component {

	render() {
		return (
			<HashRouter>
				<div>
					<h1> Welcome </h1>
					<ul className = "header">
						<li>
							<NavLink to = "/HowToPlay" activeClassName = "selected">
								How To Play
							</NavLink>
						</li>
						<li>
							<NavLink to = "/Start" activeClassName = "selected">
								Get Started
							</NavLink>
						</li>
					</ul>
					<div className = "content">
						<Route exact path = "/HowToPlay" component = {Presentation}/>
						<Route exact path = "/Start" component = {Presentation}/>
					</div>
				</div>
			</HashRouter>
		)
	}
}




					

