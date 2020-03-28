import React, {Component, useEffect} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {reducers} from "./src/store/reducers";
import './src/scss/main.scss';
//components
import Round from "./src/components/Round";
import {Root} from "./src/Root";
import {GameView} from "./src/GameView";
import Standings from "./src/components/Standings";
import Creategame from "./src/components/Creategame";
import Lobby from "./src/components/Lobby";
import Lobbies from "./src/components/Lobbies";
//images
import cube from './src/assets/cube.png'
import standings from './src/assets/standings.png'
import pacifist from './src/assets/pacifist.png'



const App = () => {

    const store = createStore(reducers, applyMiddleware(thunk, logger));

    return <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path={"/"} component={Root}/>
                <Route exact path={"/round"}>
                    <GameView image={cube} header={"Rozgrywka"} show={true}>
                        <Round/>
                    </GameView>
                </Route>
                <Route exact path={"/standings"}>
                    <GameView image={standings} header={"Wyniki po Rundzie"} show={true}>
                        <Standings numberOfPlayers={8}/>
                    </GameView>
                </Route>
                <Route exact path={"/creategame"}>
                    <GameView image={pacifist} header={"Stwórz Grę"} show={false}>
                        <Creategame/>
                    </GameView>
                </Route>
                <Route exact path={"/lobby"}>
                    <GameView image={pacifist} header={`Pokój Marian`} show={false}>
                        <Lobby/>
                    </GameView>
                </Route>
                <Route exact path={"/lobbies"}>
                    <GameView image={pacifist} header={"Dostępne lobby"} show={false}>
                        <Lobbies/>
                    </GameView>
                </Route>
            </Switch>
        </Router>
    </Provider>
};

const app = document.getElementById("app");
app ? ReactDOM.render(<App/>, app) : false;