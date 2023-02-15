window.onscroll = function () {
  navbar();
};

function navbar() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav").style.position = "fixed";
    document.getElementById("nav").style.top = "0";
    document.getElementById("nav").style.zIndex = "9999";
    document.getElementById("nav").style.marginLeft = "-6rem";
    document.getElementById("nav").style.backgroundColor = "white";
  } else {
    document.getElementById("nav").style.marginLeft = "-6rem";
    document.getElementById("nav").style.position = "relative";
    document.getElementById("nav").style.width = "100%";
    document.getElementById("nav").style.backgroundColor = "white";
  }
}
