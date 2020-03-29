import React from 'react'
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";


const Gamesettings = (props) => {

        const history = useHistory();
        const chosenCategories = useSelector(state => state.chosenCategories);

        const createGame = () => {
            fetch("https://panmia.azurewebsites.net/Games", {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                    "categories": chosenCategories
                })
            })
                .then(res => res.json())
                .then(res => console.log(res))
                .then(res => history.push("/lobby"))
                .catch(error => console.warn(error))
        };

        const generateButtons = (quantity, name) => {
            const buttons = []

            for (let i = 1; i <= quantity; i++) {
                buttons.push(<div className={'creategame__checkboxes'}>
                    <input type={'radio'} name={name} value={i} className={'creategame__buttons main__text'}/>
                    <span className={'checkmark'}/>
                    <label className={"main__text"}>{i}</label>
                </div>)
            }

            return buttons
        };

        return <div className={'creategame__settings'}>
            <div className={'creategame__flex'}>
                <span className={'creategame__option main__text bold'}>Liczba rund: </span>
                {
                    generateButtons(10, 'rounds')
                }
            </div>
            <div className={'creategame__flex'}>
                <span className={'creategame__option main__text bold'}>Liczba Graczy: </span>
                {
                    generateButtons(8, 'players')
                }
            </div>
            <div className={'creategame__flex'}>
                <span className={"main__text bold creategame__room"}>Wpisz nazwę pokoju: </span>
                <input className={"main__text creategame__room__input"} placeholder={"Nazwa pokoju..."}/>
            </div>
            <button onClick={createGame} className={"creategame__accept main__text bold"}>Stwórz Pokój</button>
        </div>
    }
;

export default Gamesettings