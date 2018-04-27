import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CommentApp from './CommentApp';
import Clock from './Clock';
import Card from './Card';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

class Main extends Component{
	constructor(){
		super()
		this.state = {
			isShowClock: true
		}
	}
	handleShowOrHide(){
		this.setState({
			isShowClock: !this.state.isShowClock
		})
	}
	render(){
		return(
			<div>
				<CommentApp />
				{this.state.isShowClock ? <Clock /> : null}
				<h3><button onClick={this.handleShowOrHide.bind(this)}>显示/隐藏时钟</button></h3>
				<Card>
					<h2>React.js 小书</h2>
				    <div>开源、免费、专业、简单</div>
				    订阅：<input />
				</Card>
			</div>
		)
	}
}

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
