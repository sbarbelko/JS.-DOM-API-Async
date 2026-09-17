// task 1

// function printNumbers(from, to, interval) {
//   let counter = from;

//   function count() {
//     console.log(counter);
//     if (counter < to) {
//       counter++;
//       setTimeout(count, interval);
//     }
//   }
//   count();
// }

// printNumbers(1, 10, 1000);

// task 2

const binancePriceChange = "https://api.binance.com/api/v3/ticker/24hr";

fetch(binancePriceChange)
  .then((res) => res.json())
  .then((data) => generateTable(data))
  .catch((err) => console.log("err", err));

const body = document.querySelector("body");

const table = document.createElement("table");
body.append(table);

const caption = document.createElement("caption");
table.append(caption);
caption.textContent = "Курс валют";

const tableHeader = document.createElement("thead");
table.append(tableHeader);

const trHeader = document.createElement("tr");
tableHeader.append(trHeader);

const symbolName = document.createElement("th");
const lastPriceName = document.createElement("th");
const priceChangePercentName = document.createElement("th");
const quoteVolumeName = document.createElement("th");
trHeader.append(
  symbolName,
  lastPriceName,
  priceChangePercentName,
  quoteVolumeName,
);
symbolName.textContent = "Торгова пара";
lastPriceName.textContent = "Курс";
priceChangePercentName.textContent = "Зміна 24г (%)";
quoteVolumeName.textContent = "Об'єм 24г";

const tbody = document.createElement("tbody");
table.append(tbody);

function generateTable(data) {
  data.slice(0, 20).forEach((item) => {
    const tr = document.createElement("tr");
    tbody.append(tr);

    const symbol = document.createElement("td");
    symbol.textContent = item.symbol;
    tr.append(symbol);
    symbol.classList.add("leftText");

    const lastPrice = document.createElement("td");
    lastPrice.textContent = parseFloat(item.lastPrice);
    tr.append(lastPrice);

    const priceChangePercent = document.createElement("td");
    priceChangePercent.textContent = item.priceChangePercent;
    tr.append(priceChangePercent);

    const quoteVolume = document.createElement("td");
    quoteVolume.textContent = Number(item.quoteVolume).toFixed(4);
    tr.append(quoteVolume);
  });
}
