import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";


const Game = () => {

    return <div className={"container-grid"}>
        <Sidebar image={null}/>
        <Header header={"Rozgrywka"}/>
    </div>
};

export {Game}