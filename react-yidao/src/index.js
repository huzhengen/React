import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserAddPage from './pages/UserAdd';
import HomePage    from './pages/Home';

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/user/add" component={UserAddPage} />
        </Switch>
    </BrowserRouter>
), document.getElementById("app"));