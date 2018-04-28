import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Comment extends Component{
	static propTypes = {
		comment: PropTypes.object
	}
	render(){
		const {comment} = this.props
		return(
			<div className="comment">
				<div className="comment-user">
					<span>用户名：{comment.username}</span>
				</div>
				<p>评论：{comment.content}</p>
			</div>
		)
	}
}

export default Comment