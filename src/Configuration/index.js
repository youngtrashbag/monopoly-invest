import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
} from "react-router-dom";

import PlayerView from "./players";
import CurrencyView from "./currencies";
import MiscView from "./misc";

const ConfigView = () => {
    const { path } = useRouteMatch();

    return (
        <>
        <div className="ConfigWrapper">
            <Router>
                <Link to={`${path}/players`}>Players</Link>
                <Link to={`${path}/currencies`}>Currencies</Link>
                <Link to={`${path}/misc`}>Misc</Link>
                <br/>
                <Switch>
                    <Route exact path={`${path}/players`}>
                        <PlayerView/>
                    </Route>
                    <Route exact path={`${path}/currencies`}>
                        <CurrencyView/>
                    </Route>
                    <Route path={`${path}/misc`}>
                        <MiscView/>
                    </Route>
                </Switch>
            </Router>
        </div>
        </>
    );
}

export default ConfigView;
