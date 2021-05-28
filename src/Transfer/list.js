import { PlayerColors } from "../global";
import { currentCurrencyValue, playerTotalBalance } from "../utils";
import { CurrencyColors } from "../global";

const PlayerList = () => {
    const players = JSON.parse(window.sessionStorage.getItem("players"));

    var list = [];
    for (var i=0; i<players.length; i++) {
        list.push(
            <option
            style={{color: PlayerColors[i] }}
            key={i}
            value={i}>
                { `${players[i].name} $${playerTotalBalance(i)}` }
            </option>
        );
    }

    return list;
}

const CurrencyList = () => {
    const currencies = JSON.parse(window.sessionStorage.getItem("currencies"));

    var list = [];
    for (var i=0; i<currencies.length; i++) {
        list.push(
            <option
            style={{color: CurrencyColors[i] }}
            key={i}
            value={i}>
                { `${currencies[i].name} $${currentCurrencyValue(i)}` }
            </option>
        );
    }

    return list;
}

export { PlayerList, CurrencyList };
