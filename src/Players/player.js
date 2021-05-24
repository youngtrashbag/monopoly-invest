import { useParams } from "react-router-dom";

import { PlayerColors } from "../global";

const PlayerView = () => {
    const { playerId } = useParams();
    const players = JSON.parse(window.sessionStorage.getItem("players"));

    if (playerId >= players.length) {
        return (
            <h1>Not Found</h1>
        );
    }

    return (
        <h1 style={{ color: PlayerColors[playerId] }}>
            { players[playerId] }
        </h1>
    )
}

export default PlayerView;