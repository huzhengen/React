import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Index from '../component/index/index.js';
import Search from '../component/search/search.js';
import Detail from '../component/detail/detail.js';
import More from '../component/more/more.js';
import Loadmore from '../component/loadmore/loadmore';

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
                        <Route exact path="/more/:url" component={More} />
                        <Route exact path="/search/" component={Search} />
                        <Route exact path="/search/:movieName" component={Search} />
                        <Route exact path="/detail/:movieId" component={Detail} />
                        <Route exact path="/loadmore" component={Loadmore} />
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;