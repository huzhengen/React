import React, {Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'



class CommentApp extends Component{
	constructor(){
		super()
		this.state = {
			comments: []
		}
	}
	handleSubmitComment(comment){
		// console.log(comment)
		if(!comment.username){
			alert('请输入用户名')
			return
		}
		if(!comment.content){
			alert('请输入评论内容')
			return
		}
		this.state.comments.push(comment)
		this.setState({
			comments: this.state.comments
		})
	}
	render(){
		return(
			<div className="wrapper">
				<CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
				<CommentList comments={this.state.comments} />
			</div>
		)
	}
}


export default CommentApp