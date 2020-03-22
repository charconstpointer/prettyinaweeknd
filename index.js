import React, { Component } from "react";
import ReactDOM from "react-dom";
import {Root} from "./src/Root";
import './src/scss/main.scss'

const App = () => {

    return <Root/>
};

const app = document.getElementById("app");
app ? ReactDOM.render(<App />, app) : false;