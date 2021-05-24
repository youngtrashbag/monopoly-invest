import { PlayerList, CurrencyList } from "./list";

const BuyView = () => {
    const changeAmount = () => {
        var submitButton = document.getElementById("submit")
        submitButton.disabled = false;
    }

    const handleSubmit = () => {
        const playerId = document.getElementById("playerSelect").value;
        const currencyId = document.getElementById("currencySelect").value;
        const amount = document.getElementById("amountInput").value;

        var players = JSON.parse(window.sessionStorage.getItem("players"));
        var currencies = JSON.parse(window.sessionStorage.getItem("currencies"));

        players[playerId].portfolio[currencyId] = Number(players[playerId].portfolio[currencyId]) + Number(amount);
        window.sessionStorage.setItem("players", JSON.stringify(players));

        alert(`${players[playerId].name} bought ${amount} ${currencies[currencyId].name}\nthey owe $${amount * currencies[currencyId].value} to the bank`)
    }

    // TODO: show balance of user

    return (
        <>
        <h1>Buy</h1>
        <div className="TransactionWrapper">
            <select id="playerSelect" defaultValue={"default"}>
                <option disabled value="default">Please Select Player</option>
                <PlayerList/>
            </select>
            &nbsp;
            <select id="currencySelect" defaultValue={"default"}>
                <option disabled value="default">Please Select Currency</option>
                <CurrencyList/>
            </select>
            &nbsp;
            <input id="amountInput" type="number" placeholder="Amount" step="0.1" onChange={changeAmount}/>
        </div>
        &nbsp;
        <button id="submit" onClick={handleSubmit}>Buy!</button>
        </>
    );
}

export default BuyView;
