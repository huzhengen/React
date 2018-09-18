import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

class Title extends Component{
	handleClickOnTitle(word, e){
		console.log(e.target.innerHTML)
		console.log(this, word)
	}
	render(){
		return (
			<div>
			<h1 onClick={this.handleClickOnTitle}>React Book</h1>
			<h1 onClick={this.handleClickOnTitle.bind(this, 'hello')}>React this</h1>
			</div>
		)
	}
}

class Header extends Component{
	render(){
		return (
			<div>
				<Title />
				<h2>this is header</h2>
			</div>
		)
	}
}

class Main extends Component{
	render(){
		return(
			<div><h3>this is main</h3></div>
		)
	}
}

class Footer extends Component{
	render(){
		return(
			<div><h3>this is footer</h3></div>
		)
	}
}

class LikeButton extends Component{
	static defaultProps = {
		likedText:"取消", 
		unlikedText:"点赞"
	}
	constructor(props){
		super(props)
		this.state = {
			isLiked: false,
			name: 'lu'
		}
	}
	handleClickOnLikeButton(){
		this.setState({
			isLiked: !this.state.isLiked
		})
		if(this.props.onClick){
			this.props.onClick()
		}
	}
	render(){
		const wordings = this.props.wordings || {likedText:"取消", unlikedText:"点赞"}
		return(
			<h3>
				<button onClick={this.handleClickOnLikeButton.bind(this)}>
				{this.state.isLiked ? wordings.likedText : wordings.unlikedText}
				</button>	
			</h3>
		)
	}
}

// class HelloWorld = (props)=>{
// 	const sayHi = (e)=>console.log('hi say hi')
// 	return (
// 		<div onClick={sayHi}>hello world</div>
// 	)
// }

const users = [
	{username:'luhan', age:11, gender:'male'},
	{username:'wanlu', age:211, gender:'male'},
	{username:'yangjiu', age:21, gender:'female'},
	{username:'yanli', age:33, gender:'male'},
]

class User extends Component{
	render(){
		const {user} = this.props
		return(
			<ul>
				<li>{user.username}</li>
				<li>{user.age}</li>
				<li>{user.gender}</li>
			</ul>
		)
	}
}

class Index extends Component{
	render(){
		return(
			<div>
				<Header />
				<Main />
				<Footer />
				<LikeButton 
				wordings={{likedText:"已赞", unlikedText:"赞"}}
				onClick={()=>console.log('click on likebutton')} />
				{/*{users.map((user,key)=>{
					return(
						<ul key={key} data-key={key}>
							<li>{user.username}</li>
							<li>{user.age}</li>
							<li>{user.gender}</li>
						</ul>
					)
				})}*/}
				<div>
					{users.map((user,key)=><User key={key} user={user} />)}
				</div>
			</div>
		)
	}
}

ReactDOM.render(<Index />, document.getElementById('root'));
// registerServiceWorker();
