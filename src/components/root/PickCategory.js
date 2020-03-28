import React from 'react'
import Category from "./Category";

import panstwo from '../../assets/categories/panstwo.png'
import imie from '../../assets/categories/imie.png'
import miasto from '../../assets/categories/miasto.png'
import film from '../../assets/categories/film.png'
import potrawa from '../../assets/categories/potrawa.png'
import roslina from '../../assets/categories/roslina.png'
import rzecz from '../../assets/categories/rzecz.png'
import zwierze from '../../assets/categories/zwierze.png'

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

const PickCategory = () => {


    return <div className={'creategame__categories main__text'}>
        <h3>Wybierz kategorie:</h3>
        {
            categories.map(e => <Category image={e.image} name={e.name}/>)
        }
    </div>
};


export default PickCategory