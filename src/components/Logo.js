import pencil from "../assets/pencil.png";
import React from "react";

const Logo = ({scale}) => {

    return <div className="logo" style={{transform: `scale(${scale})`}}>
        <h1 className="logo__title main__text">PaństwaMiasta</h1>
        <img src="" alt="Map" className="logo__map"/>
        <img src={pencil} alt="Pencil" className="logo__pencil"/>
    </div>
};

export default Logo