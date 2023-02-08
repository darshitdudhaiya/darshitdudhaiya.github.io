// window.onscroll = function () {
//   navbar();
// };

// function navbar() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("nav").style.position = "fixed";
//     document.getElementById("nav").style.top = "0";
//     document.getElementById("nav").style.zIndex = "9999";
//     document.getElementById("nav").style.marginLeft = "-6rem";
//     document.getElementById("nav").style.backgroundColor = "white";
//   } else {
//     document.getElementById("nav").style.marginLeft = "-6rem";
//     document.getElementById("nav").style.position = "relative";
//     document.getElementById("nav").style.width = "100%";
//     document.getElementById("nav").style.backgroundColor = "white";
//   }
// }
  
function add(id) {
  let no = parseInt(document.getElementById(id).value);
  document.getElementById(id).value = no + 1;

}
function sub(id) {
  let no = parseInt(document.getElementById(id).value);
  if (no > 1) {
    document.getElementById(id).value = no - 1;
  }
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

let products = [
  {
    "id":1,
    "imgurl": "./Images/product-02.png",
    "pname": "Level 20 RGB Cherry",
    "price": "$60",
    "offerprice": "$80"
  },
  {
    "id":2,
    "imgurl": "./Images/product-19.png",
    "pname": "Sky Blue T-shirt",
    "price": "$40",
    "offerprice": "$40"
  },
  {
    "id":3,
    "imgurl": "./Images/product-6.png",
    "pname": "Women's Stylish Hat",
    "price": "$24",
    "offerprice": "$30"
  },
  {
    "id":4,
    "imgurl": "./Images/product-4.png",
    "pname": "Dimaond Ring",
    "price": "$40",
    "offerprice": "$50"
  }
];  

localStorage.setItem("products" ,JSON.stringify(products));

