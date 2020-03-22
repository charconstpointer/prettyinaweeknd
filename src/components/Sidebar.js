import React from "react";
import {Link} from "react-router-dom";

const Sidebar = ({image}) => {

    return <div className={"sidebar"}>
        <img src={image} alt="icon" className="logo__pencil"/>
    </div>

};

export default Sidebar