import React, {useEffect} from "react";
import Logo from "./components/Logo";
import Menu from "./components/root/Menu";
import sun from './assets/sun.png'
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

const Root = () => {

    const connection = new HubConnectionBuilder()
        .withUrl('https://panmia.azurewebsites.net/cutelittlecreatures')
        .configureLogging(LogLevel.Information)
        .build()

    useEffect(() => {connection.start()}, [])

    connection.on("OnNewLobbyCreated", data => {
        console.log(data)
    });

    return <div className="main container">
        <div className="main__header">
            <Logo scale={1}/>
        </div>
        <Menu/>
        <img src={sun} alt="słoneczko" className="main__sun"/>
    </div>
};

export { Root }