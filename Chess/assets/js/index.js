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

const icon = ["./images/Black_rook.png", "./images/Black_horse.png", "./images/Black_camel.png", "./images/Black_queen.png", "./images/Black_king.png", "./images/Black_camel.png", "./images/Black_horse.png", "./images/Black_rook.png"];
const white_icon = ["./images/White_rook.png", "./images/White_horse.png", "./images/White_camel.png", "./images/White_queen.png", "./images/White_king.png", "./images/White_camel.png", "./images/White_horse.png", "./images/White_rook.png"];

let selection = null;

let possibleMoves = [];

let firstMoveofBlackSoldier = false;

let firstMoveofWhiteSoldier = false;

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
                document.getElementById(`row${index}`).innerHTML += `<td class="border-0 border-transperent bg-[#979740] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" onclick="move(this)" ><img class="h-8 w-20 md:h-12 md:w-20 lg:h-12 lg:w-20 xl:h-12 xl:w-20" src="./images/Black_soldier.png"/></td>`;
                id++;
            }
            else if (j % 2 != 0) {
                document.getElementById(`row${index}`).innerHTML += `<td class="border-0 border-transperent bg-[#3b6749] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" onclick="move(this)" ><img class="h-8 w-20 md:h-12 md:w-20 lg:h-12 lg:w-20 xl:h-12 xl:w-20" src="./images/Black_soldier.png"/></td>`;
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

function compare(pathOfPiece) {
    white_icon.forEach(element => {
        if (pathOfPiece == element || pathOfPiece == "./images/White_soldier.png") {
            return "White";
        }
    });
    icon.forEach(element => {
        if (pathOfPiece == element || pathOfPiece == "./images/soldier.png") {
            return "Black";
        }
    });
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


        let piece = _$(e.id).children[0] ? _$(e.id).children[0].getAttribute("src").replace("./images/", "").replace(".png", "") : null;
        let piecePath = _$(e.id).children[0] ? _$(e.id).children[0].getAttribute("src") : null;
        let pieceVrient = piece ? piece.replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : turn;

        if (piece == "Black_soldier" || piece == "White_soldier") {
            if (piece == "Black_soldier" && turn == "Black") {
                id = parseInt(e.id);
                _$(id + 8).style.backgroundColor = "#90EE90";
                _$(id + 8).style.border = "1px solid #013220";
                _$(id + 8).style.borderRadius = "5px";
                if(firstMoveofBlackSoldier != true){
                    _$(id + 16).style.backgroundColor = "#90EE90";
                    _$(id + 16).style.border = "1px solid #013220";
                    _$(id + 16).style.borderRadius = "5px";
                    firstMoveofBlackSoldier = true;
                }
                selection = e.id;
                possibleMoves.push(id + 8);
                possibleMoves.push(id + 16);
            }
            else if (piece == "White_soldier" && turn == "White") {
                id = parseInt(e.id);
                _$(id - 8).style.backgroundColor = "#90EE90";
                _$(id - 8).style.border = "1px solid #013220";
                _$(id - 8).style.borderRadius = "5px";
                if(firstMoveofWhiteSoldier != true){
                    _$(id - 16).style.backgroundColor = "#90EE90";
                    _$(id - 16).style.border = "1px solid #013220";
                    _$(id - 16).style.borderRadius = "5px";
                    firstMoveofWhiteSoldier = true;
                }
                selection = e.id;
                possibleMoves.push(id - 8);
                possibleMoves.push(id - 16);

            }
        }

        if (piece == "Black_rook" || piece == "White_rook") {
            if (piece == "Black_rook" && turn == "Black") {
                id = parseInt(e.id);
                if (_$(id + 8).innerHTML == "") {
                    if (_$(id + 8).innerHTML == "") {
                        _$(id + 8).style.backgroundColor = "#90EE90";
                        _$(id + 8).style.border = "1px solid #013220";
                        _$(id + 8).style.borderRadius = "5px";
                        possibleMoves.push(id + 8);
                    }
                    if (_$(id + 16).innerHTML == "") {
                        _$(id + 16).style.backgroundColor = "#90EE90";
                        _$(id + 16).style.border = "1px solid #013220";
                        _$(id + 16).style.borderRadius = "5px";
                        possibleMoves.push(id + 16);
                    }
                    if (_$(id + 24).innerHTML == "") {
                        _$(id + 24).style.backgroundColor = "#90EE90";
                        _$(id + 24).style.border = "1px solid #013220";
                        _$(id + 24).style.borderRadius = "5px";
                        possibleMoves.push(id + 24);
                    }
                    selection = e.id;
                }
            }

            else if (piece == "White_rook" && turn == "White") {
                id = parseInt(e.id);
                if (_$(id - 8).innerHTML == "") {
                    if (_$(id - 8).innerHTML == "") {
                        _$(id - 8).style.backgroundColor = "#90EE90";
                        _$(id - 8).style.border = "1px solid #013220";
                        _$(id - 8).style.borderRadius = "5px";
                        possibleMoves.push(id - 8);
                    }
                    if (_$(id - 16).innerHTML == "") {
                        _$(id - 16).style.backgroundColor = "#90EE90";
                        _$(id - 16).style.border = "1px solid #013220";
                        _$(id - 16).style.borderRadius = "5px";
                        possibleMoves.push(id - 16);
                    }
                    if (_$(id - 24).innerHTML == "") {
                        _$(id - 24).style.backgroundColor = "#90EE90";
                        _$(id - 24).style.border = "1px solid #013220";
                        _$(id - 24).style.borderRadius = "5px";
                        possibleMoves.push(id - 24);
                    }
                    selection = e.id;
                }
            }

        }

        if (piece == "Black_horse" || piece == "White_horse") {
            if (piece == "Black_horse" && turn == "Black") {
                id = parseInt(e.id);

                if ((id + 15 >= 0 && id + 15 <= 7) ||
                    (id + 15 >= 8 && id + 15 <= 15) ||
                    (id + 15 >= 16 && id + 15 <= 23) ||
                    (id + 15 >= 24 && id + 15 <= 31) ||
                    (id + 15 >= 32 && id + 15 <= 39) ||
                    (id + 15 >= 40 && id + 15 <= 47) ||
                    (id + 15 >= 48 && id + 15 <= 55) ||
                    (id + 15 >= 54 && id + 15 <= 63) && _$(id + 15).innerHTML == "") {
                    _$(id + 15).style.background = "#90EE90";
                    _$(id + 15).style.border = "1px solid #013220";
                    _$(id + 15).style.borderRadius = "5px";
                    possibleMoves.push(id + 15);
                }

                if (id + 17 >= 0 && id + 17 <= 7 ||
                    id + 17 >= 8 && id + 17 <= 15 ||
                    (id + 17 >= 16 && id + 17 <= 23) ||
                    (id + 17 >= 24 && id + 17 <= 31) ||
                    (id + 17 >= 32 && id + 17 <= 39) ||
                    (id + 17 >= 40 && id + 17 <= 47) ||
                    (id + 17 >= 48 && id + 17 <= 55) ||
                    (id + 17 >= 54 && id + 17 <= 63) && _$(id + 17).innerHTML == "") {
                    _$(id + 17).style.background = "#90EE90";
                    _$(id + 17).style.border = "1px solid #013220";
                    _$(id + 17).style.borderRadius = "5px";
                    possibleMoves.push(id + 17);
                }

                selection = e.id;

            }

            else if (piece == "White_horse" && turn == "White") {
                id = parseInt(e.id);

                if ((id - 15 >= 0 && id - 15 <= 7) ||
                    (id - 15 >= 8 && id - 15 <= 15) ||
                    (id - 15 >= 16 && id - 15 <= 23) ||
                    (id - 15 >= 24 && id - 15 <= 31) ||
                    (id - 15 >= 32 && id - 15 <= 39) ||
                    (id - 15 >= 40 && id - 15 <= 47) ||
                    (id - 15 >= 48 && id - 15 <= 55) ||
                    (id - 15 >= 54 && id - 15 <= 63) && _$(id - 15).innerHTML == "") {
                    _$(id - 15).style.background = "#90EE90";
                    _$(id - 15).style.border = "1px solid #013220";
                    _$(id - 15).style.borderRadius = "5px";
                    possibleMoves.push(id - 15);
                }

                if ((id - 17 >= 0 && id - 17 <= 7) ||
                    (id - 17 >= 8 && id - 17 <= 15) ||
                    (id - 17 >= 16 && id - 17 <= 23) ||
                    (id - 17 >= 24 && id - 17 <= 31) ||
                    (id - 17 >= 32 && id - 17 <= 39) ||
                    (id - 17 >= 40 && id - 17 <= 47) ||
                    (id - 17 >= 48 && id - 17 <= 55) ||
                    (id - 17 >= 54 && id - 17 <= 63) && _$(id - 17).innerHTML == "") {
                    _$(id - 17).style.background = "#90EE90";
                    _$(id - 17).style.border = "1px solid #013220";
                    _$(id - 17).style.borderRadius = "5px";
                    possibleMoves.push(id - 17);
                }

                selection = e.id;
            }

        }

        if (pieceVrient != turn) {
            _$("toast-warning").style.visibility = "visible";
            _$("warningText").innerHTML = `Sorry ! It's <p class="text-green-500 text-xl">${turn} Team's</p> Turn..`
            setTimeout(() => {
                _$("toast-warning").style.visibility = "hidden";
            }, 2000);
        }
    }
    else {
        let image = _$(selection).children[0].getAttribute("src");
        if (possibleMoves.indexOf(parseInt(e.id)) !== -1) {
            _$(selection).innerHTML = "";
            _$(e.id).innerHTML = `<img class="h-8 w-20 md:h-12 md:w-20 lg:h-12 lg:w-20 xl:h-12 xl:w-20" src="${image}"/>`;
            let pieceType = _$(e.id).children[0].getAttribute("src").replace("./images/", "").replace(".png", "");
            if (
                pieceType == "Black_rook" ||
                pieceType == "Black_horse" ||
                pieceType == "Black_camel" ||
                pieceType == "Black_queen" ||
                pieceType == "Black_king" ||
                pieceType == "Black_soldier"
            ) {
                turn = "White";
            }
            else if (
                pieceType == "White_rook" ||
                pieceType == "White_horse" ||
                pieceType == "White_camel" ||
                pieceType == "White_queen" ||
                pieceType == "White_king" ||
                pieceType == "White_soldier"
            ) {
                turn = "Black";
            }
            selection = null;
            possibleMoves = [];
            console.log(turn);
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