import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import './App.css';
import ConfigView from "./ConfigView";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
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
