import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const GameView = (props) => {

    return <div className={"container-grid"}>
        <Sidebar image={props.image}/>
        <Header header={props.header} show={props.show}/>
        {props.children}
    </div>
};

export {GameView}