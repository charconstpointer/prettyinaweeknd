import React from 'react'


const Lobbies = () => {

    const lobbies = [
        {
            name: "Twój stary pokój",
            players: 3,
            owner: "Roman"
        },
        {
            name: "Twój nowy pokój",
            players: 8,
            owner: "Wacek"
        },
        {
            name: "Pokój miłości",
            players: 2,
            owner: "Zakochani"
        }
    ];

    return <ul className={"lobbies"}>
        <li className={"lobbies__row lobbies__main__row"}>
            <span className={"lobbies__col__1 main__text"}>
                Nazwa Pokoju
            </span>
            <span className={"lobbies__col__2 main__text"}>
                Liczba Graczy
            </span>
            <span className={"lobbies__col__3 main__text"}>
                Założyciel
            </span>
        </li>
        {
            lobbies.map((lobby, key) => {
                return <li className={"lobbies__row"}>
                    <span className={"lobbies__col__1 main__text"}>
                        {lobby.name}
                    </span>
                    <span className={"lobbies__col__2 main__text"}>
                        {lobby.players}/8
                    </span>
                    <span className={"lobbies__col__3 main__text"}>
                        {lobby.owner}
                    </span>
                    <button className={"lobbies__col__4 main__text"}>
                        Dołącz!
                    </button>
                </li>
            })
        }
    </ul>
};

export default Lobbies