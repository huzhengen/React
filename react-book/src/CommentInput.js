import React, {Component} from 'react'
import PropTypes from 'prop-types'

class CommentInput extends Component{
	static propTypes = {
		onSubmit: PropTypes.func
	}
	constructor(){
		super()
		this.state = {
			username: '',
			content: ''
		}
	}
	componentWillMount(){
		this._loadUsername()
	}
	componentDidMount(){
		this.textarea.focus()
	}
	_loadUsername(){
		const username = localStorage.getItem('username');
		if(username){
			this.setState({
				username
			})
		}
	}
	_saveUsername(username){
		localStorage.setItem('username', username)
	}
	handleUsernameBlur(e){
		this._saveUsername(e.target.value)
	}
	handleUsernameChange(e){
		this.setState({
			username: e.target.value
		})
	}
	handleContentChange(e){
		this.setState({
			content: e.target.value
		})
	}
	handleSubmit(){
		if(this.props.onSubmit){
			// const {username, content} = this.state
			this.props.onSubmit({
				username: this.state.username,
				content: this.state.content,
				createdTime: +new Date()
			})
		}
		this.setState({content: ''})
	}
	render(){
		return(
			<div className="comment-input">
				<div className="comment-field">
					<span className="comment-field-name">用户名：</span>
					<div className="comment-field-input">
						<input value={this.state.username}
						onChange={this.handleUsernameChange.bind(this)}
						onBlur={this.handleUsernameBlur.bind(this)}
						type="text"/>
					</div>
				</div>
				<div className="comment-field">
					<span className="comment-field-name">评论内容：</span>
					<div className="comment-field-input">
						<textarea 
						value={this.state.content}
						onChange={this.handleContentChange.bind(this)}
						ref={(textarea)=>{this.textarea = textarea}}
						name="" id="" cols="30" rows="10"></textarea>
					</div>
				</div>
				<div className="comment-field-button">
					<button onClick={this.handleSubmit.bind(this)}>发布</button>
				</div>
			</div>
		)
	}
}


export default CommentInput