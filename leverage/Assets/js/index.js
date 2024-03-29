window.onscroll = function () {
  navbar();
};

function navbar() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("nav").style.backgroundColor = "#111111";
    document.getElementById("nav").style.transition = "0.5s ease-in-out";

    document.getElementById("navbar").style.position = "fixed";
    document.getElementById("navbar").style.zIndex = "9999";
    document.getElementById("navbar").style.width = "100%";
    document.getElementById("navbar").style.backgroundColor = "#111111";
    document.getElementById("navbar").style.transition = "0.5s ease-in-out";
  } else if (document.body.scrollTop == 0) {
    document.getElementById("nav").style.backgroundColor = "transparent";
    document.getElementById("nav").style.transition = "0.5s ease-in-out";

    document.getElementById("navbar").style.position = "absolute";
    document.getElementById("navbar").style.width = "100%";
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("navbar").style.zIndex = "0";
    document.getElementById("navbar").style.transition = "0.5s ease-in-out";
    document.getElementById("nav").style.display = "block";
  }

  const pos = document.getElementById("stop-div").offsetTop;
  const docHeight =
    document.scrollHeight - document.scrollTop - document.scrollHeight;
  if (
    document.body.scrollTop > pos ||
    document.documentElement.scrollTop > pos
  ) {
    document.getElementById("nav").style.display = "none";
  } else if (
    document.body.scrollTop > pos ||
    document.documentElement.scrollTop > pos
  ) {
    document.getElementById("nav").style.display = "block";
  }
}

function playIconZoom() {
  document.getElementById("play-icon").style.transform = "scale(1.2)";
  document.getElementById("play-icon").style.transition = "0.5s";
}
function playIconZoomOut() {
  document.getElementById("play-icon").style.transform = "scale(1)";
}
