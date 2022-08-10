import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route , Link , Switch , BrowserRouter as Router} from "react-router-dom";
import './index.css';
import App from './App';
import visit from "./visit"
import notfound from "./notfound";
import user from "./user";

const routing = (
    <Router>
            <Route exact path="/" component={App}/>
            <Route path="/visit" component={visit}/>
            <Route path="/user" component={user}/>
            <Route component={notfound}/>
</Router>
)

ReactDOM.render(routing,
  document.getElementById('root')
);
