import React, {Component, useEffect} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import {Root} from "./src/Root";
import {Game} from "./src/Game";
import './src/scss/main.scss';

const App = () => {

    return <Router>
        <Switch>
            <Route exact path={"/"}>
                <Root/>
            </Route>
            <Route exact path={"/game"}>
                <Game />
            </Route>
        </Switch>
    </Router>
};

const app = document.getElementById("app");
app ? ReactDOM.render(<App/>, app) : false;