import React from 'react'


const Gamesettings = (props) => {

    const generateButtons = (quantity, name) => {
        const buttons = []
        for (let i = 1; i <= quantity; i++) {
            buttons.push(<div className={'creategame__checkboxes'}>
                <input  type={'radio'} name={name} value={i} className={'creategame__buttons main__text'}/>
                <span className={'checkmark'}/>
                <label className={"main__text"}>{i}</label>
                </div>
                )
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
        <button className={"creategame__accept main__text bold"}>Stwórz Pokój</button>
    </div>
};


export default Gamesettings