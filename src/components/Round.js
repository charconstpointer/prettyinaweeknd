import React from "react";
//Categories images
import panstwo from '../assets/categories/panstwo.png'
import imie from '../assets/categories/imie.png'
import miasto from '../assets/categories/miasto.png'
import film from '../assets/categories/film.png'
import potrawa from '../assets/categories/potrawa.png'
import roslina from '../assets/categories/roslina.png'
import rzecz from '../assets/categories/rzecz.png'
import zwierze from '../assets/categories/zwierze.png'

const categories = [
    {
        image: panstwo,
        name: "Państwo"
    },
    {
        image: imie,
        name: "Imię"
    },
    {
        image: miasto,
        name: "Miasto"
    },
    {
        image: film,
        name: "Film"
    },
    {
        image: potrawa,
        name: "Potrawa"
    },
    {
        image: roslina,
        name: "Roślina"
    },
    {
        image: rzecz,
        name: "Rzecz"
    },
    {
        image: zwierze,
        name: "Zwierzę"
    },
];

const Round = () => {

    return <div className={"categories main__text"}>
        <ul className={"categories__list"}>
            {
                categories.map((category, key) => {
                    return <li key={key} className={"categories__item category"}>
                        <img src={category.image} alt="icon" className={"category__image"}/>
                        <span className={"category__name"}>{category.name}: </span>
                        <input type="text" name={category} className={"category__input"} placeholder={"C..."}/>
                    </li>
                })
            }
        </ul>
    </div>
};

export default Round