import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import routes from "./routes"; //all routes

import Home from "../screen/home";
export const RouterApp = (props) => {
    return (
        <Router>
            <Switch>
                
                <Route exact component={Home} path={routes.Home}  {...props} />
                
            </Switch>
        </Router>
    )
}

export default RouterApp;
