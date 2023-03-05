window.onscroll = function () {
  navbar();
};

function navbar() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("nav").style.position = "fixed";
    document.getElementById("nav").style.zIndex = "9999";
    document.getElementById("nav").style.width = "100%";
    document.getElementById("nav").style.backgroundColor = "#111111";
    document.getElementById("nav").style.transition = "0.5s ease-in-out";
    document.getElementById("navbar").style.position = "fixed";
    document.getElementById("navbar").style.zIndex = "9999";
    document.getElementById("navbar").style.width = "100%";
    document.getElementById("navbar").style.backgroundColor = "#111111";
    document.getElementById("navbar").style.transition = "0.5s ease-in-out";
  } else if (document.body.scrollTop == 0) {
    document.getElementById("nav").style.position = "absolute";
    document.getElementById("nav").style.width = "100%";
    document.getElementById("nav").style.backgroundColor = "transparent";
    document.getElementById("nav").style.zIndex = "0";
    document.getElementById("nav").style.transition = "0.5s ease-in-out";
    document.getElementById("navbar").style.position = "absolute";
    document.getElementById("navbar").style.width = "100%";
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("navbar").style.zIndex = "0";
    document.getElementById("navbar").style.transition = "0.5s ease-in-out";
  }
}

document.onreadystatechange = () => {
  var no = 0;
  var no2 = 0;
  var no3 = 0;
  var no4 = 0;
  var projects = 342;
  var innovations = 128;
  var coffee = 745;
  var customers = 691;

  setInterval(() => {
    document.getElementById("counter").innerHTML = no;

    if (no != projects) {
      no++;
    }
  }, 5);

  setInterval(() => {
    document.getElementById("counte2").innerHTML = no2;

    if (no2 != innovations) {
      no2++;
    }
  }, 25);

  setInterval(() => {
    document.getElementById("counte3").innerHTML = no3;

    if (no3 != coffee) {
      no3++;
    }
  }, 0.3);

  setInterval(() => {
    document.getElementById("counte4").innerHTML = no4;

    if (no4 != customers) {
      no4++;
    }
  }, 0.1);
};
