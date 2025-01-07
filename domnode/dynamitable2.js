var products = [
  {
    id: 101,
    name: "iphone 16",
    price: 1000,
    qty: 10,
  },
  {
    id: 102,
    name: "ipad mini",
    price: 800,
    qty: 8,
  },
  {
    id: 103,
    name: "key",
    price: 100,
    qty: 1,
  },
];

window.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < products.length; i++) {
    createRow(products[i]); //3
  }
});

const createRow = (product) => {
  const tbody = document.getElementById("tbody");
  const tr = document.createElement("tr"); //<tr>

  const idTd = document.createElement("td");
  idTd.innerHTML = product.id;

  const nameTd = document.createElement("td");
  nameTd.innerHTML = product.name;

  const priceTd = document.createElement("td");
  priceTd.innerHTML = product.price;

  const qtyTd = document.createElement("td");
  qtyTd.innerHTML = product.qty;

  if (product.price >= 500) {
    priceTd.style.color = "green";
  }

  tr.appendChild(idTd);
  tr.appendChild(nameTd);
  tr.appendChild(priceTd);
  tr.appendChild(qtyTd);
  tbody.appendChild(tr);
};
