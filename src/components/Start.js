//Start.js
import React from 'react'
import { connect } from 'react-redux'
import Setup from '../containers/Setup'
import Presentation from '../containers/Presentation'

class Start extends React.Component {

	
	render() {
		//console.log('rendering Start')
		const {ready, ...others} = this.props.slidenav
	
		let content = null;
	
		if(ready === true) {
			content = <Presentation />
		} else {
			content = <Setup />
		}

		return(
			<div>
				{ content }
			</div>
		)
	}

}

function mapStateToProps(state) {
	return {
		slidenav: state.slidenav
	}
}


export default connect(mapStateToProps, null) (Start)
