import React from 'react'

const players = [
    {
        name: 'Jaca',
        scores: [2, 4, 8, 0, 3]
    },
    {
        name: 'Kuba',
        scores: [2, 4, 8, 0, 3]
    },
    {
        name: 'mo',
        scores: [2, 4, 8, 0, 3]
    },
    {
        name: 'Pati',
        scores: [2, 4, 8, 0, 3]
    },
    {
        name: 'Drabbi',
        scores: [2, 4, 8, 0, 3]
    },
    {
        name: 'Andżej',
        scores: [2, 4, 8, 0, 3]
    },
    {
        name: 'Ókaszdswadswadwads',
        scores: [2, 4, 8, 0, 3]
    },
    {
        name: 'Toiadspdswadsadsaw',
        scores: [2, 4, 8, 0, 3]
    }
];

const Standings = () => {

    const createStandings = () => {
        const standings = [];

        for (let i = 0; i < players[0].scores.length; i++) {
            standings.push(<li className={"standings__element"}>
                <span className={"standings__round main__text"}>Runda {i + 1}</span>
                {players.map((player, key) => {
                    return <span className={"standings__score main__text"} key={key}>{player.scores[i]} pkt</span>
                })
                }
            </li>)
        }

        return standings;
    };

    return <ul className={"standings"}>
        <li className={"standings__element"}>
            <span className={"standings__round main__text"}/>
            {
                players.map((player, key) => {
                    return <span className={"standings__player main__text"} key={key}>{player.name}</span>
                })
            }
        </li>
        {
            createStandings()
        }
        <hr/>
        <li className={"standings__element"}>
            <span className={"standings__round main__text"}>Podsumowanie</span>
            {
                players.map((player, key) => {
                    return <span className={"standings__score main__text"} key={key}>
                        {player.scores.reduce((a,b) => a + b, 0)} pkt
                    </span>
                })
            }
        </li>
    </ul>
};

export default Standings