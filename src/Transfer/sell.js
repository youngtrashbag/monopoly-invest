import { PlayerList, CurrencyList } from "./list";
import { currentCurrencyValue } from "../utils";

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
        var settings = JSON.parse(window.sessionStorage.getItem("miscSettings"));

        const playerBalance = Number(players[playerId].portfolio[currencyId]);
        const currentPrice = currentCurrencyValue(currencyId);

        // validate if user has enough
        if (playerBalance < Number(amount)) {
            const submitButton = document.getElementById("submit");
            submitButton.disabled = true;
            // alert not very modern way of showing information, but works good
            alert("Player does not have high enough balance");
        } else {
            // only charge fees when selling currency to bank
            var fees = 0;
            if (settings.transactionFee) {
                fees = Math.ceil(((amount * currentCurrencyValue) / 100) * 10);

                alert(`${players[playerId].name} sold ${amount} ${currencies[currencyId].name}\nbank owes $${amount * currentPrice}\nfees include distributing $${fees} to players`)
            } else {
                alert(`${players[playerId].name} sold ${amount} ${currencies[currencyId].name}\nbank owes $${amount * currentPrice}`)
            }

            // subtract value from portfolio
            players[playerId].portfolio[currencyId] = Number(players[playerId].portfolio[currencyId]) - amount;
            window.sessionStorage.setItem("players", JSON.stringify(players));

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
            <input id="amountInput" type="number" placeholder="Amount" step="0.1" min="0" onChange={changeAmount}/>
        </div>
        &nbsp;
        <button id="submit" onClick={handleSubmit}>Sell!</button>
        </>
    );
}

export default SellView;
