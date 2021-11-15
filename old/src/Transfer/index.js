import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import BuyView from "./buy";
import SellView from "./sell";

import "./index.css";

const TransferView = () => {
    const { path, url } = useRouteMatch();

    return (
        <div className="TransferWrapper">
            <Link to={`${url}/buy`}>Buy</Link>
            <Link to={`${url}/sell`}>Sell</Link>
            <Switch>
                <Route exact path={`${path}/buy`}>
                    <BuyView/>
                </Route>
                <Route path={`${path}/sell`}>
                    <SellView/>
                </Route>
            </Switch>
        </div>
    );
}

export default TransferView;
