import { useParams } from "react-router-dom";

import { PlayerColors } from "../global";
import { currentCurrencyValue } from "../utils";

// TODO: generate chart for user portfolio (very cool idea)

const PlayerView = () => {
    const { playerId } = useParams();
    const players = JSON.parse(window.sessionStorage.getItem("players"));
    const currencies = JSON.parse(window.sessionStorage.getItem("currencies"));

    if (playerId >= players.length) {
        return (
            <h1>Not Found</h1>
        );
    }

    var currencyRows = [];
    var totalFiatValue = 0;
    for (var i=0; i<currencies.length; i++) {
        const currencyName = currencies[i].name;
        const amountOwned = players[playerId].portfolio[i];
        const fiatValue = players[playerId].portfolio[i] * currentCurrencyValue(i);

        totalFiatValue += fiatValue;

        currencyRows.push(
            <tr>
                <td>{currencyName}</td>
                <td>{amountOwned}</td>
                <td>{fiatValue}</td>
            </tr>
        )
    }

    return (
        <>
        <h1 style={{ color: PlayerColors[playerId] }}>
            Portfolio { players[playerId].name }
        </h1>
        <h3>Total Fiat Balance: ${totalFiatValue}</h3>
        <table>
            <thead>
                <tr>
                    <th>Currency</th>
                    <th># Owned</th>
                    <th>Fiat Value</th>
                </tr>
            </thead>
            <tbody>
                {currencyRows}
            </tbody>
        </table>
        </>
    )
}

export default PlayerView;