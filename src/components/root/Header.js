import pencil from "../../assets/pencil.png";
import React from "react";

const Header = () => {

    return <div className="main__header">
        <h1 className="main__title main__text">PaństwaMiasta</h1>
        <img src="" alt="Map" className="main__map"/>
        <img src={pencil} alt="Pencil" className="main__pencil"/>
    </div>

};

export default Header