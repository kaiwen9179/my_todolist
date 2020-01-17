import React, { Component, useState, useRef } from "react"
import { HashRouter, Route, Link, Switch } from "react-router-dom"
import Main from "../Main/Main";

const Login = () => {

    return (

        <div className='login'>
            <h1 style={{ color: "black", fontFamily: "Microsoft JhengHei" }}>登入畫面</h1>
            <p>帳號</p>
            <input type="text" />
            <p>密碼</p>
            <input type="text" />
            <br /><br />
            <Link to="/Main">
                <input type="button" value="登入" />
            </Link>
            <Link to="/">
                <input type="button" value="取消" />
            </Link>

        </div>
    );

};

export default Login;