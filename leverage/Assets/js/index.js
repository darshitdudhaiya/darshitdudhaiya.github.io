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


