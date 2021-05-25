// generate data for trends
function GenerateData(currencyId) {
    const currency = JSON.parse(window.sessionStorage.getItem("currencies"))[currencyId];
    const trendData = JSON.parse(window.sessionStorage.getItem("trendData"));

    var data = [];

    var oldPrice = Number(currency.value);
    for (var i=0; i<trendData[currencyId].length; i++) {
        // modifier is percent sinking or rising
        const modifier = Number(trendData[currencyId][i]);
        console.log(modifier);
        const newPrice = (oldPrice / 100) * (100 + modifier);
        oldPrice = newPrice;

        data.push({
            name: i,
            price: newPrice,
        });
    };

    return data;
}

export { GenerateData };
