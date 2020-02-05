import React, { Component, useState, useRef } from "react"
import { HashRouter, Route, Link, Switch } from "react-router-dom"
import Login from "../Login/Login";
import Main from "../Main/Main";
import PrivateRoute from '../../Utils/PrivateRoute';


const Home = () => {

    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <PrivateRoute path="/Main" component={Main} />
            </Switch>
        </HashRouter>
    );

};

export default Home;