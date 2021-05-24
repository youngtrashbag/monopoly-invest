import { Switch, Route, useRouteMatch } from "react-router-dom";

import PlayerListView from "./list";
import PlayerView from "./player";

import "./index.css";

const PlayersView = () => {
    const { path } = useRouteMatch();

    return (
        <div className="PlayerWrapper">
            <Switch>
                <Route exact path={`${path}/:playerId`}>
                    <PlayerView/>
                </Route>
                <Route path={`${path}/`}>
                    <PlayerListView/>
                </Route>
            </Switch>
        </div>
    );
}

export default PlayersView;
