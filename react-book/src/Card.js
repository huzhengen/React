import React, {Component} from 'react'

class Card extends Component{
	
	render(){
		return(
			<div className="card">
				<div className="card-content">{this.props.children[0]}</div>
			</div>
		)
	}
}

export default Card