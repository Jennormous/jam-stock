//array that gets 100 unique indexes from all available stocks
let arr = [];
while (arr.length < 100) {
  let r = Math.floor(Math.random() * 8886) + 1;
  if (arr.indexOf(r) === -1) arr.push(r);
}
//get data from API
axios.get("https://api.iextrading.com/1.0/ref-data/symbols").then((result) => {
  getData(result.data);
});

let newArr = [];
function getData(result) {
  for (i = 0; i < arr.length; i++) {
    let index = arr[i];
    newArr[i] = result[index];
  }
  console.log(newArr);
}

//where the cards will be generated
const stockData = document.querySelector("#stock-data");

//create stock cards

function createCard(dataSet) {
  for(i=0; dataSet.length; i++) {

    //create card
    let card = document.createElement("div");
    card.className="stock-data__card";
    //create symbol
    let cardSymb = document.createElement("h3");
    cardSym.className = "stock-data__card--symb";
    //create symbol name
    let


  }
}