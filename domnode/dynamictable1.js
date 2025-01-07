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

  const tbody = document.getElementById("tbody"); 

  for (let i = 0; i < products.length; i++) {
    const tr = document.createElement("tr"); //<tr>

    //product[0].id
    //product[1].id
    //product[2].id
    const idTd = document.createElement("td");
    idTd.innerHTML = products[i].id;

    const nameTd = document.createElement("td");
    nameTd.innerHTML = products[i].name;

    const priceTd = document.createElement("td");
    priceTd.innerHTML = products[i].price;

    const qtyTd = document.createElement("td");
    qtyTd.innerHTML = products[i].qty;

    if (products[i].price >= 500) {
      priceTd.style.color = "green";
    }

    tr.appendChild(idTd);
    tr.appendChild(nameTd);
    tr.appendChild(priceTd);
    tr.appendChild(qtyTd);
    tbody.appendChild(tr);
  }
});

