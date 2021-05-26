import { useState } from "react";

import './index.css';

const MiscConfigView = () => {
    const miscSettings = {
        risk: 0,
        transactionFee: false,
    };

    const [ getSettings, setSettings ] = useState(miscSettings);

    const handleSubmit = () => {
        const settings = getSettings;

        window.sessionStorage.setItem("miscSettings", JSON.stringify(settings));
        
        // debug
        console.log(settings);
    }

    return (
        <>
        <div className="ListWrapper">
            <h2>Misc Settings</h2>
            <label>Risk</label>
            <select
                onChange={(e) => {
                    var settings = getSettings;
                    settings.risk = Number(e.target.value);
                    setSettings(settings);
                }}
            >
                <option value="0">Low</option>
                <option value="1">Medium</option>
                <option value="2">High</option>
            </select>
            <br/>
            <label>Transaction Fees<br/>(redistribute 10% of each sale to players)</label>
            <input
                type="checkbox"
                onClick={(e) => {
                    var settings = getSettings;
                    settings.transactionFee = Number(e.target.checked);
                    setSettings(settings);
                }}
            />

            <br/>
            <button id="submit" onClick={handleSubmit}>Save!</button>
        </div>
        </>
    );
}

export default MiscConfigView;
