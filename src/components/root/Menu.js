import React from "react";
import {Link} from "react-router-dom";

const Menu = () => {

    return <div className="main__menu">
        <Link to={'/lobbies'} className="main__new main__text"
        >
            <span>+ </span>
            Dołącz do gry
        </Link>
        <Link to={'/creategame'} className="main__join main__text">
            <span>v </span>
            Nowa gra
        </Link>
    </div>

};

export default Menu