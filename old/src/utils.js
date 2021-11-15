const isNullOrUndef = (value) => {
    if (value === null || value === undefined) {
        return true;
    } else {
        return false;
    }
}

const currentCurrencyValue = (currencyId) => {
    const currency = JSON.parse(window.sessionStorage.getItem("currencies"))[currencyId];
    const trendData = JSON.parse(window.sessionStorage.getItem("trendData"))[currencyId];

    var newPrice;
    var oldPrice = Number(currency.value);
    for (var i=0; i<trendData.length; i++) {
        // modifier is percent sinking or rising
        const modifier = Number(trendData[i]);
        newPrice = (oldPrice / 100) * (100 + modifier);
        oldPrice = newPrice;

    };

    return newPrice;
}

const playerBalance = (playerId, currencyId) => {
    const cValue = currentCurrencyValue(currencyId);
    const player = JSON.parse(window.sessionStorage.getItem("players"))[playerId]
    return player.portfolio[currencyId] * cValue;
}

const playerTotalBalance = (playerId) => {
    const player = JSON.parse(window.sessionStorage.getItem("players"))[playerId]

    var totalBalance = 0;
    for (var c=0; c<player.portfolio; c++) {
        totalBalance += player.portfolio[c] * currentCurrencyValue(c);
    }

    return totalBalance;
}

// random positive or negative number
// (for random percent generating)
const randomNumber = (max) => {
    // negate percentual change
    var number = Math.floor(Math.random() * max);
    var rand = Math.random();

    if (rand > 0.5) {
        number *= -1;
        // make decrease not so hurtful
        number += 2;
    }

    // this is supposed to make investing overall profitable
    number += 1;

    return number;
}

export { isNullOrUndef, currentCurrencyValue, playerBalance, playerTotalBalance, randomNumber };
