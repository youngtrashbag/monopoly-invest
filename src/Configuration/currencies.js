import { useState } from "react";

import './index.css';

const CurrencyView = () => {
    const currencies = [
        {name: "", value: 0},
        {name: "", value: 0},
        {name: "", value: 0},
        {name: "", value: 0},
        {name: "", value: 0},
        {name: "", value: 0},
    ];

    const [ getCurrencies, setCurrencies ] = useState(currencies);

    const changeCurrency = (value, n) => {
        var currencies = getCurrencies;

        if (!isNaN(value)) {
            currencies[n].value = Number(value);
        } else {
            currencies[n].name = value;
        }

        setCurrencies(currencies);
    }

    const handleSubmit = () => {
        var currencies = getCurrencies;

        for (var i=0; i<currencies.length; i++) {
            if (currencies[i].name == "") {
                // remove this and all following elements
                currencies.splice(i, currencies.length);
            }
        }

        // debug
        console.log(currencies);

        window.sessionStorage.setItem("currencies", currencies);
    };

    return (
        <>
        <div className="ListWrapper">
            <h2>Name Currencies</h2>

            <label>Currency #{0+1}</label>
            <input type="text" placeholder="Name" onChange={ (e) => { changeCurrency(e.target.value, 0); } }/>
            <input type="number" placeholder="Value" onChange={ (e) => { changeCurrency(e.target.value, 0); } }/>

            <label>Currency #{1+1}</label>
            <input type="text" placeholder="Name" onChange={ (e) => { changeCurrency(e.target.value, 1); } }/>
            <input type="number" placeholder="Value" onChange={ (e) => { changeCurrency(e.target.value, 1); } }/>

            <label>Currency #{2+1}</label>
            <input type="text" placeholder="Name" onChange={ (e) => { changeCurrency(e.target.value, 2); } }/>
            <input type="number" placeholder="Value" onChange={ (e) => { changeCurrency(e.target.value, 2); } }/>

            <label>Currency #{3+1}</label>
            <input type="text" placeholder="Name" onChange={ (e) => { changeCurrency(e.target.value, 3); } }/>
            <input type="number" placeholder="Value" onChange={ (e) => { changeCurrency(e.target.value, 3); } }/>

            <label>Currency #{4+1}</label>
            <input type="text" placeholder="Name" onChange={ (e) => { changeCurrency(e.target.value, 4); } }/>
            <input type="number" placeholder="Value" onChange={ (e) => { changeCurrency(e.target.value, 4); } }/>

            <label>Currency #{5+1}</label>
            <input type="text" placeholder="Name" onChange={ (e) => { changeCurrency(e.target.value, 5); } }/>
            <input type="number" placeholder="Value" onChange={ (e) => { changeCurrency(e.target.value, 5); } }/>

            <br/>
            <button id="submit" onClick={handleSubmit}>Save!</button>
        </div>
        </>
    );

}

export default CurrencyView;
