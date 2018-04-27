import React, {Component} from 'react'
import Comment from './Comment'



class CommentList extends Component{
	static defaultProps = {
		comments: []
	}
	render(){
		// const comments = [
		// 	{username: 'luhan', content: 'sm'},
		// 	{username: 'wuyifan', content: 'rapper'},
		// 	{username: 'zhangyixing', content: 'jitiao'},
		// ]

		return(
			<div>
				{this.props.comments.map((comment, i)=><Comment comment={comment} key={i} />)}
			</div>
		)
	}
}


export default CommentList