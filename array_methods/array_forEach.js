var arr = [];

function getStockSymbols(stocks) {
    stocks.forEach(stock => {
        arr.push(stock.symbol);
    });
    return arr;
}

var symbols = getStockSymbols([{
        symbol: "XFX",
        price: 240.22,
        volume: 23432
    },
    {
        symbol: "TNZ",
        price: 332.19,
        volume: 234
    },
    {
        symbol: "JXJ",
        price: 120.22,
        volume: 5323
    },
]);

console.log(symbols);