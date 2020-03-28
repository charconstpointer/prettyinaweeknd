import React from "react";
import Logo from "./Logo";

const Header = ({header, show}) => {

    return <div className={"header"}>
        <div className={"header__informations main__text"}>
            <h1>{header}</h1>
            <hr/>
            { show && <>
                <p>Runda: <span className={"header__bold"}>{1 } / {5}</span></p>
                <p>Litera: <span className={"header__bold"}>C</span></p>
            </>
            }
        </div>
        <div className={"header__logo__container"}>
            <Logo scale={0.5}/>
        </div>
    </div>
};

export default Header