import { useState } from "react";
import { Formik, Form } from "formik";

import { PlayerColors } from "./global";

const ConfigView = () => {
    const [ getPlayerCount, setPlayerCount ] = useState(4);
    const [ getCurrencyCount, setCurrencyCount ] = useState(4);

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

    const PlayerNames = (props) => {
        const { values, handleChange } = props;

        var inputs = [];
        for (var i = 0; i < getPlayerCount; i++) {
            inputs.push(
                <>
                    <label style={{color: PlayerColors[i] }}>Player #{i+1}</label>
                    <input name={`playerNameInput${i+1}`} type="text" value={values.players[i]} onChange={handleChange}/>
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

    const CurrencyNames = (props) => {
        const { values, handleChange } = props;

        var inputs = [];
        for (var i = 0; i < getCurrencyCount; i++) {
            inputs.push(
                <>
                    <label>Currency #{i+1}</label>
                    <input name={`currencyName${i+1}`} type="text" placeholder="Name" value={values.currencies[i].name} onChange={handleChange}/>
                    <input name={`currencyValue${i+1}`} type="number" placeholder="Value" value={values.currencies[i].value} onChange={handleChange}/>
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

    const RiskSelector = (props) => {
        const { values } = props;

        function changeRisk(event) {
            values.risk = event.target.value;
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

    const initialValues = {
        players: [
            "",
            "",
            "",
            "",
            "",
        ],
        currencies: [
            {name: "", value: 0},
            {name: "", value: 0},
            {name: "", value: 0},
            {name: "", value: 0},
            {name: "", value: 0},
            {name: "", value: 0},
        ],
        risk: 0,
    };

    const handleSubmit = (data) => {
        // TODO: implement formik logic, and save this as window.sessionStorage values i think
        console.log(`#Player: ${getPlayerCount}\n#Currencies: ${getCurrencyCount}\nRisk: ${data.risk}`);
    };


    return (
            <Formik
                enableReinitialize
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
            { (formik) => {
                return(
                <Form>
                <div className="ConfigWrapper">
                    <div className="PlayerWrapper">
                        <div className="ListWrapper">
                            <PlayerCount/>
                            <PlayerNames values={formik.values} handleChange={formik.handleChange}/>
                        </div>
                    </div>
                    <div className="CurrencyWrapper">
                        <div className="ListWrapper">
                            <CurrencyCount/>
                            <CurrencyNames values={formik.values} handleChange={formik.handleChange}/>
                        </div>
                    </div>
                    <div className="OtherWrapper">
                        <h2>Other Values</h2>
                        <div className="ListWrapper">
                            <RiskSelector values={formik.values}/>
                        </div>
                    </div>
                    <button id="submit" type="submit">Save and Continue!</button>
                </div>
                </Form>
                );
            }}
            </Formik>
    );
}

export default ConfigView;
