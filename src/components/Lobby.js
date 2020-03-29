import React from 'react'
import human from '../assets/human.png'
import {useSelector} from "react-redux";

const users = [
    'kuba', 'pati', 'ktos', 'zdzisław'
]

const Lobby = () => {

    const chosenCategories = useSelector(state => state.chosenCategories);

    console.log(chosenCategories)

    return <div className={"lobby"}>
        <div className={"lobby__room"}>
            <div className={'wrapper'}>
                <img src={human} alt="człowieczek"/>
                <h3 className={"main__text"}>Lista graczy i punkty</h3>
            </div>
            <div className={'lobby__people'}>
                {users.map((e, i) => <span className={"main__text"}>{i + 1}. {e}</span>)}
            </div>
        </div>
        <div className={"lobby__chat"}>
            <div className={"lobby__messages"}>
                <p><span className={"bold"}>KAZIK: </span><span>TESKTASDdikjswabijdbiwsabdWASD jakis tam tekst wsobie wiadomosci a ciekawe co to</span>
                </p>
            </div>
            <input type="text" placeholder={"Napisz wiadomość..."}/>
        </div>
    </div>
};

export default Lobby