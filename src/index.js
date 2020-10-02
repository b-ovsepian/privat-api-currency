import addToMarkup from "./js/addToMarkup.js";

const currentCourse = fetch(
  "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11"
)
  .then((data) => data.json())
  .then((elem) => addToMarkup(elem));
