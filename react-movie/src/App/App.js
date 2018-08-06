import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import './App.css';
import Index from '../component/index/index.js';

class App extends Component{

    render(){
        return (
            <div className="App">
                <Router>
                    <div>
                        <div className="headerStyle">
                            <p><Link to="/">首页</Link></p>
                        </div>
                        <Route exact path="/" component={Index} />
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;