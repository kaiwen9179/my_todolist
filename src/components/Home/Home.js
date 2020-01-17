import React, { Component, useState, useRef } from "react"
import { HashRouter, Route, Link, Switch } from "react-router-dom"
import Login from "../Login/Login";
import Main from "../Main/Main";


const Home = () => {

    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/Main" component={Main} />
            </Switch>
        </HashRouter>
    );

};

export default Home;