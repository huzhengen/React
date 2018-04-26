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
	constructor(){
		super()
		this.state = {isLiked: false}
	}
	handleClickOnLikeButton(){
		this.setState({
			isLiked: !this.state.isLiked
		})
	}
	render(){
		return(
			<button onClick={this.handleClickOnLikeButton.bind(this)}>{this.state.isLiked ? '取消' : '点赞'}</button>
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
				<LikeButton />
			</div>
		)
	}
}

ReactDOM.render(<Index />, document.getElementById('root'));
// registerServiceWorker();
