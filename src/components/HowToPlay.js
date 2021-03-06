//HowToPlay.js

import React from 'react'
import ReactMarkdown from 'react-markdown'


class HowToPlay extends React.Component {
	
	componentWillMount() {
 		const readmePath = require("../resources/DESCRIPTION.md")

  		fetch(readmePath)
    		.then(response => {
      			return response.text()
    		})
    		.then(text => {
      			this.setState({
        		md:  text
      		})
    	})
	}
	
	render() {
		let md = "#Loading..."
		let s = this.state
		if(s != null) {
			md = this.state.md
		}


		return(
			<div className = "description">
				<h2>HOW TO PLAY:</h2>
				<div className = "body">
					<ReactMarkdown source = {md} />
				</div>
			</div>
		);
	}
}

export default HowToPlay
