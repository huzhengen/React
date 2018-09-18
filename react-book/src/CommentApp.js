import React, {Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import Button from './components/Button';

class CommentApp extends Component{
	constructor(){
		super()
		this.state = {
			comments: []
		}
	}
	componentWillMount(){
		this._loadComments()
	}
	_loadComments(){
		let comments = localStorage.getItem('comments')
		if(comments){
			comments = JSON.parse(comments)
			this.setState({
				comments
			})
		}
	}
	_saveComments(comments){
		localStorage.setItem('comments', JSON.stringify(comments))
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
		this._saveComments(this.state.comments)
	}
	handleDeleteComment(index){
		console.log(index)
		const comments = this.state.comments
		comments.splice(index, 1)
		this.setState({comments})
		this._saveComments(comments)
	}
	render(){
		return(
			<div className="wrapper">
				<CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
				<CommentList
				comments={this.state.comments}
				onDeleteComment={this.handleDeleteComment.bind(this)}
				/>
				<div>
					<hr/>
					<Button value="按钮1" />
					<Button value="按钮2" />
					<Button value="按钮3" />
				</div>
			</div>
		)
	}
}


export default CommentApp