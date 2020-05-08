import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

import HomePage from '../pages/HomePage'
import About from '../pages/About'
import BlogDetail from '../pages/BlogDetail'
import BlogList from '../pages/BlogList'



const Routes = () => (
    <Router>
        <Switch>
            <Route path="/">
                <HomePage />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/blogDetail">
                <BlogDetail />
            </Route>
            <Route path="/blogList">
                <BlogList />
            </Route>
        </Switch>
    </Router>
);

export default Routes;