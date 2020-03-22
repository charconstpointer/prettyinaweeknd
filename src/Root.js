import React from "react";
import Logo from "./components/Logo";
import Menu from "./components/root/Menu";

const Root = () => {

    return <div className="main container">
        <div className="main__header">
            <Logo scale={1}/>
        </div>
        <Menu/>
        <img src="" alt="" className="main__sun"/>
    </div>
};

export {Root}

