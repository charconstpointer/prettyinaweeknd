import React, {Component, useEffect} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './src/scss/main.scss';
//components
import Round from "./src/components/Round";
import {Root} from "./src/Root";
import {GameView} from "./src/GameView";
//images
import cube from './src/assets/cube.png'
import standings from './src/assets/standings.png'

const App = () => {

    return <Router>
        <Switch>
            <Route exact path={"/"} component={Root}/>
            <Route exact path={"/round"}>
                <GameView image={cube}>
                    <Round/>
                </GameView>
            </Route>
        </Switch>
    </Router>
};

const app = document.getElementById("app");
app ? ReactDOM.render(<App/>, app) : false;