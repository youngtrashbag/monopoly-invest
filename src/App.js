import { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

import './App.css';
import ConfigView from "./Configuration/index";
import PlayersView from "./Players/index";

function App() {

    const [ players, setPlayers ] = useState(window.sessionStorage.getItem("players"));
    const [ currencies, setCurrencies ] = useState(window.sessionStorage.getItem("currencies"));
    const [ settings, setSettings ] = useState(window.sessionStorage.getItem("miscSettings"));

    const [ headerMessage, setHeaderMessage ] = useState();

    function isNullOrUndef(value) {
        if (value === null || value === undefined) {
            return true;
        } else {
            return false;
        }
    }

    useEffect(() => {
        var message = "Please Configure [ ";
        var modified = false;

        if (isNullOrUndef(players)) {
            message += "Player Names,";
            modified = true;
        }
        if (isNullOrUndef(currencies)) {
            message += "Currencies,";
            modified = true;
        }
        if (isNullOrUndef(settings)) {
            message += "MiscSettings,";
            modified = true;
        }

        message += " ] in Config";
        if (modified) {
            setHeaderMessage(message);
        }
    }, [players,currencies,settings]);

    return (
        <div className="App">
            {
                !isNullOrUndef(headerMessage) &&
                    <div className="HeaderMessage">
                        <p>{ headerMessage }</p>
                    </div>
            }
            <Router>
                <Link to="/">Home</Link>
                <Link to="/config">Configuration</Link>
                <Link to="/players">Players</Link>
                <Switch>
                    <Route path="/players">
                        <PlayersView/>
                    </Route>
                    <Route path="/config">
                        <ConfigView/>
                    </Route>
                    <Route exact path="/">
                        <h1>default view</h1>
                    </Route>
                    <Route path="*">
                        <h1>Not Found</h1>
                </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
