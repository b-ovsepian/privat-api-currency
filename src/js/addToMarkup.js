const tableRef = document.querySelector("table");
import tableTpl from "../templates/table.hbs";

function addToMarkup(data) {
  const markup = tableTpl(data);
  tableRef.insertAdjacentHTML("beforeend", markup);
}

export default addToMarkup;
