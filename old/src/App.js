import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ConfigView from "./Configuration/index";
import PlayersView from "./Players/index";
import TransferView from "./Transfer/index";
import ChartView from "./Charts/index";

import { isNullOrUndef, randomNumber } from "./utils";

import './App.css';

function App() {
    const [ players, setPlayers ] = useState(JSON.parse(window.sessionStorage.getItem("players")));
    const [ currencies, setCurrencies ] = useState(JSON.parse(window.sessionStorage.getItem("currencies")));
    const [ trendData, setTrendData ] = useState(JSON.parse(window.sessionStorage.getItem("trendData")));
    const [ settings, setSettings ] = useState(JSON.parse(window.sessionStorage.getItem("miscSettings")));

    const [ headerMessage, setHeaderMessage ] = useState();

    useEffect(() => {
        var modified = false;
        var links = [];

        if (isNullOrUndef(players)) {
            links.push(
                <>
                <Link to={`/config/players`}>Player Names</Link>
                &nbsp;
                </>
            )
            modified = true;
        }
        if (isNullOrUndef(currencies)) {
            links.push(
                <>
                <Link to={`/config/currencies`}>Currencies</Link>
                &nbsp;
                </>
            )
            modified = true;
        }
        if (isNullOrUndef(settings)) {
            links.push(
                <>
                <Link to={`/config/misc`}>Misc Settings</Link>
                &nbsp;
                </>
            )
            modified = true;
        }

        if (modified) {
            console.log(links.length);
            setHeaderMessage(
                <p>Please Configure [ {links}] in Config</p>
            );
        }
    }, [players, currencies, settings]);

    // litteraly copied code from Configuration/currencies.js
    if (isNullOrUndef(trendData)) {
        // datastructure is as follows: trenddata[currencyId[iteration]]
        var trenddata = new Array(6);
        // generate trend data array
        for (var i=0; i<trenddata.length; i++) {
            // for debugging only
            //trenddata[i] = [0, 50, -50];
            trenddata[i] = [0];
        };

        setTrendData(trenddata);
        window.sessionStorage.setItem("trendData", JSON.stringify(trenddata));
    }

    // only execute if all values have been configured
    // header message is empty, all values have been configured
    if (!(isNullOrUndef(players)
        || isNullOrUndef(currencies)
        || isNullOrUndef(settings)
        )) {
        // generate percentual changes every minute
        // 90s * 1000ms = 90000
        setInterval(() => {
            var max = 5;
            switch (settings.risk) {
                // high risk
                case 2:
                    max = 35;
                    break;
                // medium risk
                case 1:
                    max = 20;
                    break;
                // low risk
                default:
                    break;
            }

            for (var i=0; i<currencies.length; i++) {
                trendData[i].push(randomNumber(max));
            }

            window.sessionStorage.setItem("trendData", JSON.stringify(trendData));
        }, 90000);
    }

    return (
        <div className="App">
            <Router>
                <div className="HeaderWrapper">
                    {
                    !isNullOrUndef(headerMessage) &&
                        <div className="HeaderMessage">
                            { headerMessage }
                        </div>
                    }
                    <div id="HeaderNavigation" className="HeaderNavigation">
                        <Link to="/">Home</Link>
                        <Link to="/config">Configuration</Link>
                        <Link to="/players">Players</Link>
                        <Link to="/transfer">Buy/Sell</Link>
                        <Link to="/charts">Charts</Link>
                    </div>
                </div>

                <Switch>
                    <Route path="/charts">
                        <ChartView/>
                    </Route>
                    <Route path="/transfer">
                        <TransferView/>
                    </Route>
                    <Route path="/players">
                        <PlayersView/>
                    </Route>
                    <Route path="/config">
                        <ConfigView/>
                    </Route>
                    <Route exact path="/">
                        <h1>Monopoly Investment Game</h1>
                        <p>Use this as an Addon for your Game if you want to make (or lose) a quick buck.</p>
                        <h2>Getting Started</h2>
                        <p>Enter your Players in the <Link to="/config/players">Settings</Link>&#20;
                        as well as the <Link to="/config/currencies">Currencies</Link> you want to invest in. 
                        There also are some <Link to="/config/misc">miscellaneous settings</Link>.
                        </p>
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
