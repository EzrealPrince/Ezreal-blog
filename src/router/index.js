import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route
} from "react-router-dom"

import HomePage from '../pages/HomePage'
import About from '../pages/About'
import BlogDetail from '../pages/BlogDetail'
import BlogList from '../pages/BlogList'



const Routes = () => (
    <Router>
        <Link to="/about" style={{color:'black'}} />
        <Link to="/blogDetail" style={{color:'black'}} />
        {/* <Link to="/blogDetail" style={{color:'black'}} /> */}

        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/blogDetail" component={BlogDetail} />
        <Route path="/blogList" component={BlogList} />
    </Router>
);

export default Routes;