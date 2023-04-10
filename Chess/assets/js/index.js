var arr = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
];

const icon = ["./images/rook.png", "./images/horse.png", "./images/camel.png", "./images/queen.png", "./images/king.png", "./images/camel.png", "./images/horse.png", "./images/rook.png"];
const white_icon = ["./images/White_rook.png", "./images/White_horse.png", "./images/White_camel.png", "./images/White_queen.png", "./images/White_king.png", "./images/White_camel.png", "./images/White_horse.png", "./images/White_rook.png"];

let selection = null;

let possibleMoves = [];

let turn = "Black";

let id = 0;

function _$(string) {
    return document.getElementById(string);
}

function _$class(string) {
    return document.getElementsByClassName(string);
}

function _$tag(string) {
    return document.getElementsByTagName(string);
}


for (let index = 0; index < arr.length; index++) {
    _$(
        "tiles"
    ).innerHTML += `<tr class="border-0 border-[#01eabb]" id="row${index}">
        `;

    if (index == 0) {
        for (let j = 0; j < icon.length; j++) {
            if (j % 2 == 0) {
                document.getElementById(`row${index}`).innerHTML += `<td class="border-0 border-transperent bg-[#3b6749] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" onclick="move(this)" ><img class="h-8 w-20 md:h-12 md:w-20 lg:h-12 lg:w-20 xl:h-12 xl:w-20" src="${icon[j]}"/></td>`;
                id++;

            }
            else if (j % 2 != 0) {
                document.getElementById(`row${index}`).innerHTML += `<td class="border-0 border-transperent bg-[#979740] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" onclick="move(this)" ><img class="h-8 w-20 md:h-12 md:w-20 lg:h-12 lg:w-20 xl:h-12 xl:w-20" src="${icon[j]}"/></td>`;
                id++;

            }
        }
    }
    if (index == 1) {
        for (let j = 0; j < 8; j++) {
            if (j % 2 == 0) {
                document.getElementById(`row${index}`).innerHTML += `<td class="border-0 border-transperent bg-[#979740] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" onclick="move(this)" ><img class="h-8 w-20 md:h-12 md:w-20 lg:h-12 lg:w-20 xl:h-12 xl:w-20" src="./images/soldier.png"/></td>`;
                id++;
            }
            else if (j % 2 != 0) {
                document.getElementById(`row${index}`).innerHTML += `<td class="border-0 border-transperent bg-[#3b6749] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" onclick="move(this)" ><img class="h-8 w-20 md:h-12 md:w-20 lg:h-12 lg:w-20 xl:h-12 xl:w-20" src="./images/soldier.png"/></td>`;
                id++;
            }
        }
    }

    if (index == 6) {
        for (let j = 0; j < icon.length; j++) {
            if (j % 2 == 0) {
                document.getElementById(`row${index}`).innerHTML += `<td class="border-0 border-transperent bg-[#3b6749] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" onclick="move(this)" ><img class="h-8 w-20 md:h-12 md:w-20 lg:h-12 lg:w-20 xl:h-12 xl:w-20" src="./images/White_soldier.png"/></td>`;
                id++;
            }
            else if (j % 2 != 0) {
                document.getElementById(`row${index}`).innerHTML += `<td class="border-0 border-transperent bg-[#979740] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" onclick="move(this)" ><img class="h-8 w-20 md:h-12 md:w-20 lg:h-12 lg:w-20 xl:h-12 xl:w-20" src="./images/White_soldier.png"/></td>`;
                id++;
            }
        }
    }
    if (index == 7) {
        for (let j = 0; j < 8; j++) {
            if (j % 2 == 0) {
                document.getElementById(`row${index}`).innerHTML += `<td class="border-0 border-transperent bg-[#979740] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" onclick="move(this)" ><img class="h-8 w-20 md:h-12 md:w-20 lg:h-12 lg:w-20 xl:h-12 xl:w-20" src="${white_icon[j]}"/></td>`;
                id++;
            }
            else if (j % 2 != 0) {
                document.getElementById(`row${index}`).innerHTML += `<td class="border-0 border-transperent bg-[#3b6749] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" onclick="move(this)" ><img class="h-8 w-20 md:h-12 md:w-20 lg:h-12 lg:w-20 xl:h-12 xl:w-20" src="${white_icon[j]}"/></td>`;
                id++;
            }
        }
    }
    for (let i = 0; i < arr.length; i++) {

        if (index % 2 == 0 && index >= 2 && index < 6) {
            if (id % 2 == 0) {
                _$(`row${index}`).innerHTML += `
                <td class="border-0 border-transperent bg-[#3b6749] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" onclick="move(this)"></td>`;
                id++;
            }
            else {
                _$(`row${index}`).innerHTML += `
                <td class="border-0 border-transperent bg-[#979740] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" onclick="move(this)"></td>`;
                id++;
            }
        }
        else if (index % 2 != 0 && index >= 2 && index < 6) {
            if (id % 2 == 0) {
                _$(`row${index}`).innerHTML += `
                <td class="border-0 border-transperent bg-[#979740] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" onclick="move(this)"></td>`;
                id++;
            }
            else {
                _$(`row${index}`).innerHTML += `
                <td class="border-0 border-transperent bg-[#3b6749] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" onclick="move(this)"></td>`;
                id++;
            }
        }
    }
    _$("tiles").innerHTML += `
      </tr>`;
}


function move(e) {
    if (selection == null) {
        for (i = 0; i < 64; i++) {
            rowIndex = parseInt(_$class("tile")[i].parentElement.id.replace("row", ""));
            if (rowIndex % 2 == 0) {
                if (i % 2 == 0) {
                    _$class("tile")[i].style.backgroundColor = "#3b6749";
                    _$class("tile")[i].style.border = "none";
                    _$class("tile")[i].style.borderRadius = "0px";
                }
                else {
                    _$class("tile")[i].style.backgroundColor = "#979740";
                    _$class("tile")[i].style.border = "none";
                    _$class("tile")[i].style.borderRadius = "0px";
                }
            }
            else if (rowIndex % 2 != 0) {
                if (i % 2 == 0) {
                    _$class("tile")[i].style.backgroundColor = "#979740";
                    _$class("tile")[i].style.border = "none";
                    _$class("tile")[i].style.borderRadius = "0px";
                }
                else {
                    _$class("tile")[i].style.backgroundColor = "#3b6749";
                    _$class("tile")[i].style.border = "none";
                    _$class("tile")[i].style.borderRadius = "0px";
                }
            }
        }
        let piece = _$(e.id).children[0].getAttribute("src").replace("./images/","").replace(".png","");
        if (piece == "soldier" || piece == "White_soldier") {
            if (piece == "soldier" && turn == "Black") {
                id = parseInt(e.id);
                _$(id + 8).style.backgroundColor = "#90EE90";
                _$(id + 8).style.border = "1px solid #013220";
                _$(id + 8).style.borderRadius = "5px";
                _$(id + 8 + 8).style.backgroundColor = "#90EE90";
                _$(id + 8 + 8).style.border = "1px solid #013220";
                _$(id + 8 + 8).style.borderRadius = "5px";
                selection = e.id;
                possibleMoves.push(id + 8);
                possibleMoves.push(id + 8 + 8);
            }
            else if (piece == "White_soldier" && turn == "White") {
                id = parseInt(e.id);
                _$(id - 8).style.backgroundColor = "#90EE90";
                _$(id - 8).style.border = "1px solid #013220";
                _$(id - 8).style.borderRadius = "5px";
                _$(id - 8 - 8).style.backgroundColor = "#90EE90";
                _$(id - 8 - 8).style.border = "1px solid #013220";
                _$(id - 8 - 8).style.borderRadius = "5px";
                selection = e.id;
                possibleMoves.push(id - 8);
                possibleMoves.push(id - 8 - 8);
            }
        }

        else if (piece == "rook" || piece == "White_rook") {
            if (piece == "rook" && turn == "Black") {
                id = parseInt(e.id);
                _$(id + 8).style.backgroundColor = "#90EE90";
                _$(id + 8).style.border = "1px solid #013220";
                _$(id + 8).style.borderRadius = "5px";
                _$(id + 8 + 8).style.backgroundColor = "#90EE90";
                _$(id + 8 + 8).style.border = "1px solid #013220";
                _$(id + 8 + 8).style.borderRadius = "5px";
                _$(id + 8 + 8 + 8).style.backgroundColor = "#90EE90";
                _$(id + 8 + 8 + 8).style.border = "1px solid #013220";
                _$(id + 8 + 8 + 8).style.borderRadius = "5px";
                selection = e.id;
                possibleMoves.push(id + 8);
                possibleMoves.push(id + 8 + 8);
                possibleMoves.push(id + 8 + 8 + 8);
            }
            // else if (e.id == 7 && turn == "Black") {
            //     id = parseInt(e.id);
            //     _$(id + 8).style.backgroundColor = "#90EE90";
            //     _$(id + 8).style.border = "1px solid #013220";
            //     _$(id + 8).style.borderRadius = "5px";
            //     _$(id + 8 + 8).style.backgroundColor = "#90EE90";
            //     _$(id + 8 + 8).style.border = "1px solid #013220";
            //     _$(id + 8 + 8).style.borderRadius = "5px";
            //     _$(id + 8 + 8 + 8).style.backgroundColor = "#90EE90";
            //     _$(id + 8 + 8 + 8).style.border = "1px solid #013220";
            //     _$(id + 8 + 8 + 8).style.borderRadius = "5px";
            //     selection = e.id;
            //     possibleMoves.push(id + 8);
            //     possibleMoves.push(id + 8 + 8);
            //     possibleMoves.push(id + 8 + 8 + 8);
            // }
            else if (piece == "White_rook" && turn == "White") {
                id = parseInt(e.id);
                _$(id - 8).style.backgroundColor = "#90EE90";
                _$(id - 8).style.border = "1px solid #013220";
                _$(id - 8).style.borderRadius = "5px";
                _$(id - 8 - 8).style.backgroundColor = "#90EE90";
                _$(id - 8 - 8).style.border = "1px solid #013220";
                _$(id - 8 - 8).style.borderRadius = "5px";
                _$(id - 8 - 8 - 8).style.backgroundColor = "#90EE90";
                _$(id - 8 - 8 - 8).style.border = "1px solid #013220";
                _$(id - 8 - 8 - 8).style.borderRadius = "5px";
                selection = e.id;
                possibleMoves.push(id - 8);
                possibleMoves.push(id - 8 - 8);
                possibleMoves.push(id - 8 - 8 - 8);
                console.log("piece :",id);
                
            }
            // else if (e.id == 63 && turn == "White") {
            //     id = parseInt(e.id);
            //     _$(id - 8).style.backgroundColor = "#90EE90";
            //     _$(id - 8).style.border = "1px solid #013220";
            //     _$(id - 8).style.borderRadius = "5px";
            //     _$(id - 8 - 8).style.backgroundColor = "#90EE90";
            //     _$(id - 8 - 8).style.border = "1px solid #013220";
            //     _$(id - 8 - 8).style.borderRadius = "5px";
            //     _$(id - 8 - 8 - 8).style.backgroundColor = "#90EE90";
            //     _$(id - 8 - 8 - 8).style.border = "1px solid #013220";
            //     _$(id - 8 - 8 - 8).style.borderRadius = "5px";
            //     selection = e.id;
            //     possibleMoves.push(id + 8);
            //     possibleMoves.push(id + 8 + 8);
            //     possibleMoves.push(id + 8 + 8 + 8);
            // }
        }
        else {
            _$("toast-warning").style.visibility = "visible";
            _$("warningText").innerHTML = `Sorry ! It's <p class="text-green-500 text-xl">${turn} Team's</p> Turn..`
            setTimeout(() => {
                _$("toast-warning").style.visibility = "hidden";
            }, 2000);
        }
    }
    else {
        let image = _$(selection).children[0].getAttribute("src");
        console.log(e.id);
        if (possibleMoves.indexOf(parseInt(e.id)) !== -1) {
            _$(selection).innerHTML = "";
            _$(e.id).innerHTML = `<img class="h-8 w-20 md:h-12 md:w-20 lg:h-12 lg:w-20 xl:h-12 xl:w-20" src="${image}"/>`;
            if (selection >= 8 && selection <= 15) {
                turn = "White";
            }
            else if (selection >= 48 && selection <= 55) {
                turn = "Black";
            }
            else if (selection == 0 || selection == 7) {
                turn = "White";
            }
            else if (selection == 56 || selection == 63) {
                turn = "Black";
            }
            selection = null;
            possibleMoves = [];
        }
        else {
            _$("toast-warning").style.visibility = "visible";
            _$("warningText").innerHTML = `Please select the possible moves...`
            setTimeout(() => {
                _$("toast-warning").style.visibility = "hidden";
            }, 2000);
            selection = null;
            possibleMoves = [];
        }
        for (i = 0; i < 64; i++) {
            rowIndex = parseInt(_$class("tile")[i].parentElement.id.replace("row", ""));
            if (rowIndex % 2 == 0) {
                if (i % 2 == 0) {
                    _$class("tile")[i].style.backgroundColor = "#3b6749";
                    _$class("tile")[i].style.border = "none";
                    _$class("tile")[i].style.borderRadius = "0px";
                }
                else {
                    _$class("tile")[i].style.backgroundColor = "#979740";
                    _$class("tile")[i].style.border = "none";
                    _$class("tile")[i].style.borderRadius = "0px";
                }
            }
            else if (rowIndex % 2 != 0) {
                if (i % 2 == 0) {
                    _$class("tile")[i].style.backgroundColor = "#979740";
                    _$class("tile")[i].style.border = "none";
                    _$class("tile")[i].style.borderRadius = "0px";
                }
                else {
                    _$class("tile")[i].style.backgroundColor = "#3b6749";
                    _$class("tile")[i].style.border = "none";
                    _$class("tile")[i].style.borderRadius = "0px";
                }
            }
        }
    }
}

