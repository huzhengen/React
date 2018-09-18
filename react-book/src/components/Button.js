import React, { Component } from 'react';
import './button.css'

class Button extends Component{
    constructor(props){
        super(props);
        this.state = {
            active: false,
            deltaX: 0,
            deltaY: 0
        };
        this.myRef = React.createRef();
    }

    handleClick(e){
        console.log(this.myRef.current.getBoundingClientRect())
        let {x, y} = this.myRef.current.getBoundingClientRect();
        let {clientX, clientY} = e;
        let deltaX = clientX - x - 5;
        let deltaY = clientY - y - 5;
        this.setState({
            active: true,
            deltaX: deltaX,
            deltaY: deltaY
        })
        this.props.onClick && this.props.onClick.call(null, 'hello')
    }

    handleAnimationEnd(){
        this.setState({
            active: false,
        })
    }

    render(){
        return (
            <button className="button2" ref={this.myRef} onClick={(this.handleClick.bind(this))}>
                <span className="value">{this.props.value}</span>
                {this.state.active === true ? <span className="circle" 
                onAnimationEnd={this.handleAnimationEnd.bind(this)}
                style={{left: this.state.deltaX, top: this.state.deltaY}}></span> : ''}
            </button>
        )
    }
}

export default Button