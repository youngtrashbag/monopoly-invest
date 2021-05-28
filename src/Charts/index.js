import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import SingleChartView from "./chart";
import { CurrencyColors } from "../global";
import "./index.css";

const ChartView = () => {
    const { path, url } = useRouteMatch();
    const currencies = JSON.parse(window.sessionStorage.getItem("currencies"));

    // TODO: generate links for all currencies
    var currencyLinks = [];
    for (var i=0; i<currencies.length; i++) {

        currencyLinks.push(
            <li style={{color: CurrencyColors[i] }} key={i}>
                <Link to={`${url}/${i}`}>{currencies[i].name}</Link>
            </li>
        );
    }

    return (
        <div className="ChartWrapper">
            <Link to={`${url}/`}>All Currencies</Link>
            <br/>
            <ul>
                {currencyLinks}
            </ul>
            <Switch>
                <Route path={`${path}/:currencyId`}>
                    <SingleChartView/>
                </Route>
                <Route exact path={`${path}/`}>
                    <h1>todo: generate chart with graphs overlaid</h1>
                </Route>
            </Switch>
        </div>
    );
}

export default ChartView;
