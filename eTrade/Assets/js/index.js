

let products = [
  {
    id: 0,
    imgurl: "./Images/product-02.png",
    pname: "Level 20 RGB Cherry",
    price: 60,
    offerprice: 80,
    quantity: 1,
  },
  {
    id: 1,
    imgurl: "./Images/product-19.png",
    pname: "Sky Blue T-shirt",
    price: 40,
    offerprice: 40,
    quantity: 1,
  },
  {
    id: 2,
    imgurl: "./Images/product-6.png",
    pname: "Women's Stylish Hat",
    price: 24,
    offerprice: 30,
    quantity: 1,
  },
  {
    id: 3,
    imgurl: "./Images/product-4.png",
    pname: "Dimaond Ring",
    price: 40,
    offerprice: 50,
    quantity: 1,
  },
];

function add(item) {
  console.log(item);
  let cart = JSON.parse(localStorage.getItem("cart"));

  let singleProduct = cart;
  singleProduct.map((element) => {
    if (products[item].id == element.id) {
      element.quantity = element.quantity + 1;
    }
  });

  singleProduct.splice(products[item].id, products[item]);
  localStorage.setItem("cart", JSON.stringify(singleProduct));

  window.location.reload();
}
function sub(item) {
  console.log(item);
  let cart = JSON.parse(localStorage.getItem("cart"));

  let singleProduct = cart;
  singleProduct.map((element) => {
    if (products[item].id == element.id) {
      if (element.quantity > 1) {
        element.quantity = element.quantity - 1;
      } else {
        element.quantity = 1;
      }
    }
  });

  singleProduct.splice(products[item].id, products[item]);
  localStorage.setItem("cart", JSON.stringify(singleProduct));

  window.location.reload();
}

function remove(target) {
  target.parentElement.parentElement.remove();
}

function setCookie() {
  let cname = document.getElementById("username").value;
  let item = {
    Name: "Darshit",
  };
  const d = new Date();
  d.setTime(d.getTime() + 10000);
  document.cookie = "username=" + cname + ";expries=" + d.toUTCString();
  +";path = /";
  localStorage.setItem(cname, JSON.stringify(item));
}

localStorage.setItem("products", JSON.stringify(products));
