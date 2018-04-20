//Slide.js
import React from 'react'
import { connect } from 'react-redux'


class Slide extends React.Component
{
	
    
	
    render()
    {
		//console.log('render')
		let textsrc = 'Loading...'
		if(this.props.slidemaker.finished === true) {
			textsrc = this.props.text
		}

        return(
				<div>
					<div className = "SlideContainer">
							<img src = {this.props.slidemaker.imageurl} alt = "image goes here"/>
						<div className = "SlideText">
							<mark>{ textsrc }</mark>			
						</div>
					</div>
					{this.props.slidemaker.author}
				</div>
              );
    }
}

function mapStateToProps(state) {
	return {
		slidemaker: state.slidemaker
	}
}



export default connect (mapStateToProps, null) (Slide)
