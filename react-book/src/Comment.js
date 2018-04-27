import React, {Component} from 'react'

class Comment extends Component{
	render(){
		return(
			<div className="comment">
				<div className="comment-user">
					<span>用户名：{this.props.comment.username}</span>
				</div>
				<p>评论：{this.props.comment.content}</p>
			</div>
		)
	}
}

export default Comment