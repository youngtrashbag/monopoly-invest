import { useState } from "react";

import './index.css';

const MiscView = () => {
    const miscSettings = {
        risk: 0,
    };

    const [ getSettings, setSettings ] = useState(miscSettings);

    const handleSubmit = () => {
        const settings = getSettings;

        window.sessionStorage.setItem("miscSettings", settings);
        
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
                <option value="3">Very High</option>
            </select>

            <br/>
            <button id="submit" onClick={handleSubmit}>Save!</button>
        </div>
        </>
    );
}

export default MiscView;
