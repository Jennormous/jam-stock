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
  createCard(newArr);
}

//where the cards will be generated
const stockData = document.querySelector("#stock-data");

//create stock cards

function createCard(dataSet) {
  for (i = 0; i < dataSet.length; i++) {
    //create card
    let card = document.createElement("div");
    card.className =
      "stock-data__card font-mono bg-gray-100 max-w-sm rounded overflow-hidden shadow-lg";
    //create symbol
    let cardSym = document.createElement("h3");
    cardSym.className = "stock-data__card--symb font-bold text-l mb-2";
    //create symbol name
    let symName = document.createElement("p");
    symName.className = "stock-data__card--name";
    //create symbol date
    let cardDate = document.createElement("p");
    cardDate.className = "stock-data__card--date";

    let symb = document.createTextNode(dataSet[i].symbol);
    cardSym.appendChild(symb);
    card.appendChild(cardSym);

    let name = document.createTextNode(dataSet[i].name);
    symName.appendChild(name);
    card.appendChild(symName);

    let date = document.createTextNode(dataSet[i].date);
    cardDate.appendChild(date);
    card.appendChild(cardDate);

    stockData.appendChild(card);
  }
}

const searchBar = document.querySelector("input");

searchBar.addEventListener("keyup", (event) => {
  console.log(event.target.value);
  event.preventDefault();

  let search = event.target.value;
  search = search.toUpperCase();
  let card = document.querySelectorAll(".stock-data__card");
  let cardSym = document.querySelectorAll(".stock-data__card--symb");
  let symName = document.querySelectorAll(".stock-data__card--name");

  if (search === "") {
    for (i = 0; i < newArr.length; i++) {
      card[i].style.display = "";
    }
  }
  for (i = 0; i < newArr.length; i++) {
    //console.log(cardSym[i].innerText.indexOf(search));
    if (
      cardSym[i].innerText.indexOf(search) === -1 ||
      symName[i].innerText.indexOf(search) === -1
    ) {
      card[i].style.display = "none";
    }
  }
});
