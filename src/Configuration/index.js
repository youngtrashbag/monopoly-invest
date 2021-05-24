import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
} from "react-router-dom";

import PlayerConfigView from "./players";
import CurrencyConfigView from "./currencies";
import MiscConfigView from "./misc";

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
                        <PlayerConfigView/>
                    </Route>
                    <Route exact path={`${path}/currencies`}>
                        <CurrencyConfigView/>
                    </Route>
                    <Route path={`${path}/misc`}>
                        <MiscConfigView/>
                    </Route>
                </Switch>
            </Router>
        </div>
        </>
    );
}

export default ConfigView;
