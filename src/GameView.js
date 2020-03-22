import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const GameView = (props) => {

    return <div className={"container-grid"}>
        <Sidebar image={null}/>
        <Header header={"Rozgrywka"}/>
        {props.children}
    </div>
};

export {GameView}