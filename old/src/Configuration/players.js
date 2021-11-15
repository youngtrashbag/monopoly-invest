import { useState } from "react";

import { PlayerColors } from "../global";
import './index.css';

const PlayerConfigView = () => {
    const players = [
        {
            name: "",
            portfolio: [0, 0, 0, 0, 0, 0],
        },
        {
            name: "",
            portfolio: [0, 0, 0, 0, 0, 0],
        },
        {
            name: "",
            portfolio: [0, 0, 0, 0, 0, 0],
        },
        {
            name: "",
            portfolio: [0, 0, 0, 0, 0, 0],
        },
        {
            name: "",
            portfolio: [0, 0, 0, 0, 0, 0],
        },
    ];

    const [ getPlayers, setPlayers ] = useState(players);

    const changePlayer = (value, n) => {
        var players = getPlayers;

        players[n].name = value;

        setPlayers(players);
    }

    const handleSubmit = () => {
        var players = getPlayers;

        for (var i=0; i<players.length; i++) {
            if (players[i].name === "") {
                // remove this and all following elements
                players.splice(i, players.length);
            }
        }
        window.sessionStorage.setItem("players", JSON.stringify(players));

        alert("Changed Player Settings");
        // refresh
        window.location.reload();
    };

    return (
        <>
        <div className="ListWrapper">
            <h2>Name Currencies</h2>

            <label style={{color: PlayerColors[0] }}>Player #{0+1}</label>
            <input type="text" placeholder="Name" onChange={ (e) => { changePlayer(e.target.value, 0); } }/>

            <label style={{color: PlayerColors[1] }}>Player #{1+1}</label>
            <input type="text" placeholder="Name" onChange={ (e) => { changePlayer(e.target.value, 1); } }/>

            <label style={{color: PlayerColors[2] }}>Player #{2+1}</label>
            <input type="text" placeholder="Name" onChange={ (e) => { changePlayer(e.target.value, 2); } }/>

            <label style={{color: PlayerColors[3] }}>Player #{3+1}</label>
            <input type="text" placeholder="Name" onChange={ (e) => { changePlayer(e.target.value, 3); } }/>

            <label style={{color: PlayerColors[4] }}>Player #{4+1}</label>
            <input type="text" placeholder="Name" onChange={ (e) => { changePlayer(e.target.value, 4); } }/>

            <br/>
            <button id="submit" onClick={handleSubmit}>Save!</button>
        </div>
        </>
    );
}

export default PlayerConfigView;
