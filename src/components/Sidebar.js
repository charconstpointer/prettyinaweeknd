import React from "react";
import {Link} from "react-router-dom";

const Sidebar = ({image}) => {

    return <div className={"sidebar"}>
        <img src={image} alt="icon"/>
    </div>

};

export default Sidebar