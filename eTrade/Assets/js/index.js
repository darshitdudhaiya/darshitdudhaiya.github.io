window.onscroll = function () {
  navbar();
};

function navbar() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    document.getElementById("nav").style.position = "fixed";
    document.getElementById("nav").style.top = "0";
    document.getElementById("nav").style.zIndex = "9999";
        document.getElementById("nav").style.backgroundColor = "white"
  } else {
    document.getElementById("nav").style.position = "relative";
    document.getElementById("nav").style.width = "100%";
        document.getElementById("nav").style.backgroundColor = "white"
  }
}


function add(id){
    let no = parseInt(document.getElementById(id).value);
    document.getElementById(id).value = no + 1;
}
function sub(id){
    let no = parseInt(document.getElementById(id).value);
    if(no>1){
        document.getElementById(id).value = no - 1;
    }
}