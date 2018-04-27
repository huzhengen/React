import React, {Component} from 'react'

class Clock extends Component{
	constructor(){
		super()
		this.state = {
			date: new Date()
		}
	}
	componentWillMount(){
		// ajax.get('http://json-api.com/user', (userData)=>{
		// 	this.setState({userData})
		// })
		this.timer = setInterval(()=>{
			this.setState({date: new Date()})
		}, 1000)
	}
	componentWillUnmount(){
		clearInterval(this.timer)
	}
	render(){
		return(
			<h1>现在时间是：{this.state.date.toLocaleTimeString()}</h1>
		)
	}
}

export default Clock