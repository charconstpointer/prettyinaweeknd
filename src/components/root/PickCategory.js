import React, {useEffect, useState} from 'react'
import Category from "./Category"
import panstwo from '../../assets/categories/panstwo.png'
import imie from '../../assets/categories/imie.png'
import miasto from '../../assets/categories/miasto.png'
import film from '../../assets/categories/film.png'
import potrawa from '../../assets/categories/potrawa.png'
import roslina from '../../assets/categories/roslina.png'
import rzecz from '../../assets/categories/rzecz.png'
import zwierze from '../../assets/categories/zwierze.png'


const imageMapper = (expression) => {
    switch(expression) {
        case "Panstwa":
            return panstwo;
        case "Imie":
            return imie;
        case "Miasto":
            return miasto;
        case "Film":
            return film;
        case "Potrawa":
            return potrawa;
        case "Roslina":
            return roslina;
        case "Rzecz":
            return rzecz;
        case "Zwierze":
            return zwierze;
    }
};

const nameMapper = (expression) => {
    switch(expression) {
        case "Panstwa":
            return "Państwo";
        case "Imie":
            return "Imię";
        case "Miasto":
            return "Miasto";
        case "Film":
            return "Film";
        case "Potrawa":
            return "Potrawa";
        case "Roslina":
            return "Roślina";
        case "Rzecz":
            return "Rzecz";
        case "Zwierze":
            return "Zwierzę";
    }
};

const PickCategory = () => {

    const [categories, setCategories] = useState([]);
    const [chosenCategories, setChosenCategories] = useState([]);
    
    useEffect(() => {
        fetch('https://panmia.azurewebsites.net/Categories')
            .then(res => res.json())
            .then(res => setCategories(res))
            .catch(error => console.log(error))
    }, []);

    useEffect(() => {
        console.log(chosenCategories)
    }, [chosenCategories]);

    return <div className={'creategame__categories main__text'}>
        <h3>Wybierz kategorie:</h3>
        {
            categories.map((e,key) => {
                const image = imageMapper(e.name);
                const name = nameMapper(e.name);
                return <Category image={image} name={name} guid={e.guid} key={key} setChosen={setChosenCategories}/>
            }
            )}
    </div>
};

export default PickCategory