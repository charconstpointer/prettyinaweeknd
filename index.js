import React, {Component, useEffect} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Root} from "./src/Root";
import {GameView} from "./src/GameView";
import './src/scss/main.scss';
import Round from "./src/components/Round";

const App = () => {

    return <Router>
        <Switch>
            <Route exact path={"/"} component={Root}/>
            <Route exact path={"/round"}>
                <GameView>
                    <Round/>
                </GameView>
            </Route>
        </Switch>
    </Router>
};

const app = document.getElementById("app");
app ? ReactDOM.render(<App/>, app) : false;