import { useState } from "react";

const PlayerColors = [
    "#CC0000",
    "#00CC00",
    "#0000CC",
    "#CC00CC",
    "#CCCC00",
]

const ConfigView = () => {
    const [ getPlayerCount, setPlayerCount ] = useState(4);
    const [ getCurrencyCount, setCurrencyCount ] = useState(4);
    const [ getRisk, setRisk ] = useState(2);

    const PlayerCount = () => {
        function changePlayerCount(event) {
            setPlayerCount(event.target.value);
        }

        return (
            <>
                <h2># Players</h2>
                <select onChange={changePlayerCount}>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                </select>
            </>
        );
    }

    const PlayerNames = () => {
        var inputs = [];
        for (var i = 1; i <= getPlayerCount; i++) {
            inputs.push(
                <>
                    <label style={{color: PlayerColors[i-1] }}>Player #{i}</label>
                    <input key={i} name={`player${i}`} type="text"/>
                </>
            );
        }

        return (
            <>
                <h2>Name Players</h2>
                {inputs}
            </>
        );
    }

    const CurrencyCount = () => {
        function changeCurrencyCount(event) {
            setCurrencyCount(event.target.value);
        }

        return (
            <>
                <h2># Currencies</h2>
                <select onChange={changeCurrencyCount}>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                    <option value="6">Six</option>
                </select>
            </>
        );
    }

    const CurrencyNames = () => {
        var inputs = [];
        for (var i = 1; i <= getCurrencyCount; i++) {
            inputs.push(
                <>
                    <label>Currency #{i}</label>
                    <input key={i} type="text"/>
                </>
            );
        }

        return (
            <>
                <h2>Name Currencies</h2>
                {inputs}
            </>
        );
    }

    const RiskSelector = () => {
        function changeRisk(event) {
            setRisk(event.target.value);
        }

        return (
            <>
            <label>Risk</label>
                <select onChange={changeRisk}>
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
                <option value="4">Very High</option>
            </select>
            </>
        );
    }

    const onSubmit = () => {
        // TODO: implement formik logic, and save this as window.sessionStorage values i think
        console.log(`#Player: ${getPlayerCount}\n#Currencies: ${getCurrencyCount}\nRisk: ${getRisk}`);
    };

    return (
        <div className="ConfigWrapper">
            <div className="PlayerWrapper">
                <div className="ListWrapper">
                    <PlayerCount/>
                    <PlayerNames/>
                </div>
            </div>
            <div className="CurrencyWrapper">
                <div className="ListWrapper">
                    <CurrencyCount/>
                    <CurrencyNames/>
                </div>
            </div>
            <div className="OtherWrapper">
                <h2>Other Values</h2>
                <div className="ListWrapper">
                    <RiskSelector/>
                </div>
            </div>
        <button id="submit" onClick={onSubmit}>Save and Continue!</button>
        </div>
    );
}

export default ConfigView;
