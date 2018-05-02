import React, {Component} from 'react'
import Comment from './Comment'



class CommentList extends Component{
	static defaultProps = {
		comments: []
	}
	handleDeleteComment(index){
		if(this.props.onDeleteComment){
			this.props.onDeleteComment(index)
		}
	}
	render(){
		// const comments = [
		// 	{username: 'luhan', content: 'sm'},
		// 	{username: 'wuyifan', content: 'rapper'},
		// 	{username: 'zhangyixing', content: 'jitiao'},
		// ]

		return(
			<div>
				{this.props.comments.map((comment, i)=>
					<Comment comment={comment}
					index={i}
					key={i}
					onDeleteComment={this.handleDeleteComment.bind(this)}
					/>
				)}
			</div>
		)
	}
}


export default CommentList