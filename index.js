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
import Standings from "./src/components/Standings";
import Creategame from "./src/components/Creategame";
import Lobby from "./src/components/Lobby";
import Lobbies from "./src/components/Lobbies";

const App = () => {

    return <Router>
        <Switch>
            <Route exact path={"/"} component={Root}/>
            <Route exact path={"/round"}>
                <GameView image={cube} header={"Rozgrywka"}>
                    <Round/>
                </GameView>
            </Route>
            <Route exact path={"/standings"}>
                <GameView image={standings} header={"Wyniki po Rundzie"}>
                    <Standings numberOfPlayers={8}/>
                </GameView>
            </Route>
            <Route exact path={"/creategame"}>
                <GameView image={standings} header={"Stwórz Grę"}>
                    <Creategame/>
                </GameView>
            </Route>
            <Route exact path={"/lobby"}>
                <GameView image={standings} header={`Pokój Marian`}>
                    <Lobby/>
                </GameView>
            </Route>
            <Route exact path={"/lobbies"}>
                <GameView image={standings} header={"Dostępne lobby"}>
                    <Lobbies/>
                </GameView>
            </Route>
        </Switch>
    </Router>
};

const app = document.getElementById("app");
app ? ReactDOM.render(<App/>, app) : false;