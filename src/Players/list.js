import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
} from "react-router-dom";

import { PlayerColors } from "../global";

const PlayerListView = () => {
    const { url } = useRouteMatch();

    const players = JSON.parse(window.sessionStorage.getItem("players"));

    var list = [];
    for (var i=0; i<players.length; i++) {
        list.push(
            <li style={{color: PlayerColors[i] }} key={i}>
                <Link to={`${url}/${i}`}>{ players[i] }</Link>
            </li>
        );
    }

    return (
        <ul>
            {list}
        </ul>
    );
}

export default PlayerListView;
