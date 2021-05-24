import { PlayerList, CurrencyList } from "./list";

const SellView = () => {
    const changeAmount = () => {
        var submitButton = document.getElementById("submit")
        submitButton.disabled = false;
    }

    const handleSubmit = () => {
        const playerId = document.getElementById("playerSelect").value;
        const currencyId = document.getElementById("currencySelect").value;
        const amount = Number(document.getElementById("amountInput").value);

        var players = JSON.parse(window.sessionStorage.getItem("players"));
        var currencies = JSON.parse(window.sessionStorage.getItem("currencies"));

        const playerBalance = Number(players[playerId].portfolio[currencyId]);

        // validate if user has enough
        if (playerBalance < Number(amount)) {
            const submitButton = document.getElementById("submit");
            submitButton.disabled = true;
            // alert not very modern way of showing information, but works good
            alert("Player does not have high enough balance");
        } else {
            // subtract value from portfolio
            players[playerId].portfolio[currencyId] = Number(players[playerId].portfolio[currencyId]) - amount;
            window.sessionStorage.setItem("players", JSON.stringify(players));

            alert(`${players[playerId].name} sold ${amount} ${currencies[currencyId].name}\nbank owes $${amount * currencies[currencyId].value}`)
        }
    }

    // TODO: show balance of user

    return (
        <>
        <h1>Sell</h1>
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
        <button id="submit" onClick={handleSubmit}>Sell!</button>
        </>
    );
}

export default SellView;
