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
            if (j < 3) {
                if (j % 2 == 0) {
                    document.getElementById(`row${index}`).innerHTML += `<td class="border-0 border-transperent bg-[#3b6749] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" data-column="firstThree" onclick="move(this)" ><img class="h-8 w-20 md:h-12 md:w-20 lg:h-12 lg:w-20 xl:h-12 xl:w-20" src="${icon[j]}"/></td>`;
                    id++;

                }
                else if (j % 2 != 0) {
                    document.getElementById(`row${index}`).innerHTML += `<td class="border-0 border-transperent bg-[#979740] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" data-column="firstThree" onclick="move(this)" ><img class="h-8 w-20 md:h-12 md:w-20 lg:h-12 lg:w-20 xl:h-12 xl:w-20" src="${icon[j]}"/></td>`;
                    id++;

                }
            }
            else if (j > 4) {
                if (j % 2 == 0) {
                    document.getElementById(`row${index}`).innerHTML += `<td class="border-0 border-transperent bg-[#3b6749] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" data-column="lastThree" onclick="move(this)" ><img class="h-8 w-20 md:h-12 md:w-20 lg:h-12 lg:w-20 xl:h-12 xl:w-20" src="${icon[j]}"/></td>`;
                    id++;

                }
                else if (j % 2 != 0) {
                    document.getElementById(`row${index}`).innerHTML += `<td class="border-0 border-transperent bg-[#979740] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" data-column="lastThree" onclick="move(this)" ><img class="h-8 w-20 md:h-12 md:w-20 lg:h-12 lg:w-20 xl:h-12 xl:w-20" src="${icon[j]}"/></td>`;
                    id++;

                }
            }
            else {
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
    }
    if (index == 1) {
        for (let j = 0; j < 8; j++) {
            if (j < 3) {
                if (j % 2 == 0) {
                    document.getElementById(`row${index}`).innerHTML += `<td class="border-0 border-transperent bg-[#979740] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" data-column="firstThree" onclick="move(this)" ><img class="h-8 w-20 md:h-12 md:w-20 lg:h-12 lg:w-20 xl:h-12 xl:w-20" src="./images/Black_soldier.png"/></td>`;
                    id++;
                }
                else if (j % 2 != 0) {
                    document.getElementById(`row${index}`).innerHTML += `<td class="border-0 border-transperent bg-[#3b6749] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" data-column="firstThree" onclick="move(this)" ><img class="h-8 w-20 md:h-12 md:w-20 lg:h-12 lg:w-20 xl:h-12 xl:w-20" src="./images/Black_soldier.png"/></td>`;
                    id++;
                }
            }
            else if (j > 4) {
                if (j % 2 == 0) {
                    document.getElementById(`row${index}`).innerHTML += `<td class="border-0 border-transperent bg-[#979740] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" data-column="lastThree" onclick="move(this)" ><img class="h-8 w-20 md:h-12 md:w-20 lg:h-12 lg:w-20 xl:h-12 xl:w-20" src="./images/Black_soldier.png"/></td>`;
                    id++;
                }
                else if (j % 2 != 0) {
                    document.getElementById(`row${index}`).innerHTML += `<td class="border-0 border-transperent bg-[#3b6749] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" data-column="lastThree" onclick="move(this)" ><img class="h-8 w-20 md:h-12 md:w-20 lg:h-12 lg:w-20 xl:h-12 xl:w-20" src="./images/Black_soldier.png"/></td>`;
                    id++;
                }
            }
            else {
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
    }

    if (index == 6) {
        for (let j = 0; j < icon.length; j++) {
            if (j < 3) {
                if (j % 2 == 0) {
                    document.getElementById(`row${index}`).innerHTML += `<td class="border-0 border-transperent bg-[#3b6749] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" data-column="firstThree" onclick="move(this)" ><img class="h-8 w-20 md:h-12 md:w-20 lg:h-12 lg:w-20 xl:h-12 xl:w-20" src="./images/White_soldier.png"/></td>`;
                    id++;
                }
                else if (j % 2 != 0) {
                    document.getElementById(`row${index}`).innerHTML += `<td class="border-0 border-transperent bg-[#979740] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" data-column="firstThree" onclick="move(this)" ><img class="h-8 w-20 md:h-12 md:w-20 lg:h-12 lg:w-20 xl:h-12 xl:w-20" src="./images/White_soldier.png"/></td>`;
                    id++;
                }
            }
            else if (j > 4) {
                if (j % 2 == 0) {
                    document.getElementById(`row${index}`).innerHTML += `<td class="border-0 border-transperent bg-[#3b6749] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" data-column="lastThree" onclick="move(this)" ><img class="h-8 w-20 md:h-12 md:w-20 lg:h-12 lg:w-20 xl:h-12 xl:w-20" src="./images/White_soldier.png"/></td>`;
                    id++;
                }
                else if (j % 2 != 0) {
                    document.getElementById(`row${index}`).innerHTML += `<td class="border-0 border-transperent bg-[#979740] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" data-column="lastThree" onclick="move(this)" ><img class="h-8 w-20 md:h-12 md:w-20 lg:h-12 lg:w-20 xl:h-12 xl:w-20" src="./images/White_soldier.png"/></td>`;
                    id++;
                }
            }
            else {
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
    }
    if (index == 7) {
        for (let j = 0; j < 8; j++) {
            if (j < 3) {
                if (j % 2 == 0) {
                    document.getElementById(`row${index}`).innerHTML += `<td class="border-0 border-transperent bg-[#979740] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" onclick="move(this)" ><img class="h-8 w-20 md:h-12 md:w-20 lg:h-12 lg:w-20 xl:h-12 xl:w-20" src="${white_icon[j]}"/></td>`;
                    id++;
                }
                else if (j % 2 != 0) {
                    document.getElementById(`row${index}`).innerHTML += `<td class="border-0 border-transperent bg-[#3b6749] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" onclick="move(this)" ><img class="h-8 w-20 md:h-12 md:w-20 lg:h-12 lg:w-20 xl:h-12 xl:w-20" src="${white_icon[j]}"/></td>`;
                    id++;
                }
            }
            else if (j > 4) {
                if (j % 2 == 0) {
                    document.getElementById(`row${index}`).innerHTML += `<td class="border-0 border-transperent bg-[#979740] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" onclick="move(this)" ><img class="h-8 w-20 md:h-12 md:w-20 lg:h-12 lg:w-20 xl:h-12 xl:w-20" src="${white_icon[j]}"/></td>`;
                    id++;
                }
                else if (j % 2 != 0) {
                    document.getElementById(`row${index}`).innerHTML += `<td class="border-0 border-transperent bg-[#3b6749] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" onclick="move(this)" ><img class="h-8 w-20 md:h-12 md:w-20 lg:h-12 lg:w-20 xl:h-12 xl:w-20" src="${white_icon[j]}"/></td>`;
                    id++;
                }
            }
            else {
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
    }
    for (let i = 0; i < arr.length; i++) {

        if (i < 3) {
            if (index % 2 == 0 && index >= 2 && index < 6) {
                if (id % 2 == 0) {
                    _$(`row${index}`).innerHTML += `
                    <td class="border-0 border-transperent bg-[#3b6749] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" data-column="firstThree" onclick="move(this)"></td>`;
                    id++;
                }
                else {
                    _$(`row${index}`).innerHTML += `
                    <td class="border-0 border-transperent bg-[#979740] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" data-column="firstThree" onclick="move(this)"></td>`;
                    id++;
                }
            }
            else if (index % 2 != 0 && index >= 2 && index < 6) {
                if (id % 2 == 0) {
                    _$(`row${index}`).innerHTML += `
                    <td class="border-0 border-transperent bg-[#979740] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" data-column="firstThree" onclick="move(this)"></td>`;
                    id++;
                }
                else {
                    _$(`row${index}`).innerHTML += `
                    <td class="border-0 border-transperent bg-[#3b6749] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" data-column="firstThree" onclick="move(this)"></td>`;
                    id++;
                }
            }
        }
        else if (i > 4) {
            if (index % 2 == 0 && index >= 2 && index < 6) {
                if (id % 2 == 0) {
                    _$(`row${index}`).innerHTML += `
                    <td class="border-0 border-transperent bg-[#3b6749] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" data-column="lastThree    " onclick="move(this)"></td>`;
                    id++;
                }
                else {
                    _$(`row${index}`).innerHTML += `
                    <td class="border-0 border-transperent bg-[#979740] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" data-column="lastThree    " onclick="move(this)"></td>`;
                    id++;
                }
            }
            else if (index % 2 != 0 && index >= 2 && index < 6) {
                if (id % 2 == 0) {
                    _$(`row${index}`).innerHTML += `
                    <td class="border-0 border-transperent bg-[#979740] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" data-column="lastThree    " onclick="move(this)"></td>`;
                    id++;
                }
                else {
                    _$(`row${index}`).innerHTML += `
                    <td class="border-0 border-transperent bg-[#3b6749] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" data-column="lastThree    " onclick="move(this)"></td>`;
                    id++;
                }
            }
        }
        else {
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
    console.clear();

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

                let firstPossibleDeath = _$(id + 7).children[0]?_$(id + 7).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : "";
                let secondPossibleDeath = _$(id + 9).children[0]?_$(id + 9).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : "";
                
                _$(id + 8).style.backgroundColor = "#90EE90";
                _$(id + 8).style.border = "1px solid #013220";
                _$(id + 8).style.borderRadius = "5px";
                if (id >= 8 && id <= 15) {
                    _$(id + 16).style.backgroundColor = "#90EE90";
                    _$(id + 16).style.border = "1px solid #013220";
                    _$(id + 16).style.borderRadius = "5px";
                    possibleMoves.push(id + 16);
                }
                if (firstPossibleDeath == "White") {
                    _$(id + 7).style.backgroundColor = "#90EE90";
                    _$(id + 7).style.border = "1px solid #013220";
                    _$(id + 7).style.borderRadius = "5px";
                    possibleMoves.push(id + 7);
                }
                if (secondPossibleDeath == "White") {
                    _$(id + 9).style.backgroundColor = "#90EE90";
                    _$(id + 9).style.border = "1px solid #013220";
                    _$(id + 9).style.borderRadius = "5px";
                    possibleMoves.push(id + 9);
                }
                selection = e.id;
                possibleMoves.push(id + 8);
            }
            else if (piece == "White_soldier" && turn == "White") {

                id = parseInt(e.id);

                let firstPossibleDeath = _$(id - 7).children[0]?_$(id - 7).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : "";
                let secondPossibleDeath = _$(id - 9).children[0]?_$(id - 9).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : "";
                
                _$(id - 8).style.backgroundColor = "#90EE90";
                _$(id - 8).style.border = "1px solid #013220";
                _$(id - 8).style.borderRadius = "5px";
                if (id >= 48 && id <= 55) {
                    _$(id - 16).style.backgroundColor = "#90EE90";
                    _$(id - 16).style.border = "1px solid #013220";
                    _$(id - 16).style.borderRadius = "5px";
                    possibleMoves.push(id - 16);
                }
                if (firstPossibleDeath == "Black") {
                    _$(id - 7).style.backgroundColor = "#90EE90";
                    _$(id - 7).style.border = "1px solid #013220";
                    _$(id - 7).style.borderRadius = "5px";
                    possibleMoves.push(id - 7);
                }
                if (secondPossibleDeath == "Black") {
                    _$(id - 9).style.backgroundColor = "#90EE90";
                    _$(id - 9).style.border = "1px solid #013220";
                    _$(id - 9).style.borderRadius = "5px";
                    possibleMoves.push(id - 9);
                }
                selection = e.id;
                possibleMoves.push(id - 8);

            }
        }

        if (piece == "Black_rook" || piece == "White_rook") {
            if (piece == "Black_rook" && turn == "Black") {
                id = parseInt(e.id);
                let lastPossibleMove = 8;
                let sibilingPossibleMove = 1;
                let firstPossibleMove = _$(id + 8).children[0] ? _$(id + 8).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : "";

                if (firstPossibleMove == "" || firstPossibleMove == "White") {

                    for (i = 0; i <= 7; i++) {
                        let possibleMoveByLoop = _$(id + lastPossibleMove).children[0] ? _$(id + lastPossibleMove).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : "";

                        if (_$(id + lastPossibleMove).innerHTML == "" || possibleMoveByLoop == "White") {
                            _$(id + lastPossibleMove).style.backgroundColor = "#90EE90";
                            _$(id + lastPossibleMove).style.border = "1px solid #013220";
                            _$(id + lastPossibleMove).style.borderRadius = "5px";
                            possibleMoves.push(id + lastPossibleMove);
                            lastPossibleMove += 8;
                        }
                        if (possibleMoveByLoop != "" && possibleMoveByLoop == "Black") {
                            break;
                        }
                        if (possibleMoveByLoop != "" && possibleMoveByLoop == "White") {
                            break;
                        }
                    }

                    for (i = 0; i <= 7; i++) {
                        let possibleMoveByLoop = _$(id + sibilingPossibleMove).children[0] ? _$(id + sibilingPossibleMove).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : "";

                        if (_$(id + sibilingPossibleMove).innerHTML == "" || possibleMoveByLoop == "White") {
                            _$(id + sibilingPossibleMove).style.backgroundColor = "#90EE90";
                            _$(id + sibilingPossibleMove).style.border = "1px solid #013220";
                            _$(id + sibilingPossibleMove).style.borderRadius = "5px";
                            possibleMoves.push(id + sibilingPossibleMove);
                            sibilingPossibleMove++;
                        }
                        if (possibleMoveByLoop != "" && possibleMoveByLoop == "Black") {
                            break;
                        }
                        if (possibleMoveByLoop != "" && possibleMoveByLoop == "White") {
                            break;
                        }
                    }

                    selection = e.id;
                }
            }

            else if (piece == "White_rook" && turn == "White") {
                id = parseInt(e.id);
                let lastPossibleMove = 8;
                let sibilingPossibleMove = 1;
                let firstPossibleMove = _$(id - 8).children[0] ? _$(id - 8).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : "";
                if (firstPossibleMove == "" || firstPossibleMove == "Black") {

                    for (i = 0; i <= 7; i++) {
                        let possibleMoveByLoop = _$(id - lastPossibleMove).children[0] ? _$(id - lastPossibleMove).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : "";

                        if (_$(id - lastPossibleMove).innerHTML == "" || possibleMoveByLoop == "Black") {
                            _$(id - lastPossibleMove).style.backgroundColor = "#90EE90";
                            _$(id - lastPossibleMove).style.border = "1px solid #013220";
                            _$(id - lastPossibleMove).style.borderRadius = "5px";
                            possibleMoves.push(id - lastPossibleMove);
                            lastPossibleMove += 8;
                        }
                        if (possibleMoveByLoop != "" && possibleMoveByLoop == "White") {
                            break;
                        }
                        if (possibleMoveByLoop != "" && possibleMoveByLoop == "Black") {
                            break;
                        }
                    }

                    for (i = 0; i <= 7; i++) {
                        let possibleMoveByLoop = _$(id - sibilingPossibleMove).children[0] ? _$(id - sibilingPossibleMove).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : "";

                        if (_$(id - sibilingPossibleMove).innerHTML == "" || possibleMoveByLoop == "Black") {
                            _$(id - sibilingPossibleMove).style.backgroundColor = "#90EE90";
                            _$(id - sibilingPossibleMove).style.border = "1px solid #013220";
                            _$(id - sibilingPossibleMove).style.borderRadius = "5px";
                            possibleMoves.push(id - sibilingPossibleMove);
                            sibilingPossibleMove++;
                        }
                        if (possibleMoveByLoop != "" && possibleMoveByLoop == "White") {
                            break;
                        }
                        if (possibleMoveByLoop != "" && possibleMoveByLoop == "Black") {
                            break;
                        }
                    }
                    selection = e.id;
                }
            }

        }

        if (piece == "Black_horse" || piece == "White_horse") {

            let coloumnType = _$(e.id).getAttribute("data-column");

            if (piece == "Black_horse" && turn == "Black") {
                id = parseInt(e.id);
                if (id + 17 >= 0 && id + 17 <= 63) {
                    if (_$(id + 17).innerHTML == "" || _$(id + 15).innerHTML == "White") {
                        if (_$(id + 17).parentElement.id == _$(id + 15).parentElement.id) {
                            _$(id + 17).style.backgroundColor = "#90EE90";
                            _$(id + 17).style.border = "1px solid #013220";
                            _$(id + 17).style.borderRadius = "5px";

                            _$(id + 15).style.backgroundColor = "#90EE90";
                            _$(id + 15).style.border = "1px solid #013220";
                            _$(id + 15).style.borderRadius = "5px";
                            possibleMoves.push(id + 17);
                            possibleMoves.push(id + 15);
                        }
                        else if (coloumnType == "firstThree" && _$(id + 17).parentElement.id != _$(id + 15).parentElement.id && (_$(id + 17).innerHTML == "" || _$(id + 17).innerHTML == "White")) {
                            _$(id + 17).style.backgroundColor = "#90EE90";
                            _$(id + 17).style.border = "1px solid #013220";
                            _$(id + 17).style.borderRadius = "5px";
                            possibleMoves.push(id + 17);

                        }
                        else if (coloumnType == "lastThree" && _$(id + 17).parentElement.id != _$(id + 15).parentElement.id && (_$(id + 15).innerHTML == "" || _$(id + 15).innerHTML == "White")) {
                            _$(id + 15).style.backgroundColor = "#90EE90";
                            _$(id + 15).style.border = "1px solid #013220";
                            _$(id + 15).style.borderRadius = "5px";
                            possibleMoves.push(id + 15);
                        }
                        else if ((coloumnType == "lastThree" || coloumnType == "firstThree") && _$(id + 17).parentElement.id == _$(id + 15).parentElement.id && (_$(id + 15).innerHTML == "" || _$(id + 15).innerHTML == "White") && (_$(id + 17).innerHTML == "" || _$(id + 17).innerHTML == "White")) {
                            _$(id + 17).style.backgroundColor = "#90EE90";
                            _$(id + 17).style.border = "1px solid #013220";
                            _$(id + 17).style.borderRadius = "5px";
                            possibleMoves.push(id + 17);

                            _$(id + 15).style.backgroundColor = "#90EE90";
                            _$(id + 15).style.border = "1px solid #013220";
                            _$(id + 15).style.borderRadius = "5px";
                            possibleMoves.push(id + 15);
                        }
                        console.log("BlackFirst", possibleMoves);
                    }
                }
                if (id + 10 >= 0 && id + 10 <= 63) {
                    if (_$(id + 10).innerHTML == "" || _$(id + 6).innerHTML == "White") {
                        if (_$(id + 10).parentElement.id == _$(id + 6).parentElement.id) {
                            _$(id + 10).style.backgroundColor = "#90EE90";
                            _$(id + 10).style.border = "1px solid #013220";
                            _$(id + 10).style.borderRadius = "5px";

                            _$(id + 6).style.backgroundColor = "#90EE90";
                            _$(id + 6).style.border = "1px solid #013220";
                            _$(id + 6).style.borderRadius = "5px";
                            possibleMoves.push(id + 10);
                            possibleMoves.push(id + 6);
                        }
                        else if (coloumnType == "firstThree" && _$(id + 10).parentElement.id != _$(id + 6).parentElement.id && (_$(id + 10).innerHTML == "" || _$(id + 10).innerHTML == "White")) {
                            _$(id + 10).style.backgroundColor = "#90EE90";
                            _$(id + 10).style.border = "1px solid #013220";
                            _$(id + 10).style.borderRadius = "5px";
                            possibleMoves.push(id + 10);

                        }
                        else if (coloumnType == "lastThree" && _$(id + 10).parentElement.id != _$(id + 6).parentElement.id && (_$(id + 6).innerHTML == "" || _$(id + 6).innerHTML == "White")) {
                            _$(id + 6).style.backgroundColor = "#90EE90";
                            _$(id + 6).style.border = "1px solid #013220";
                            _$(id + 6).style.borderRadius = "5px";
                            possibleMoves.push(id + 6);
                        }
                        else if ((coloumnType == "lastThree" || coloumnType == "firstThree") && _$(id + 17).parentElement.id == _$(id + 15).parentElement.id && (_$(id + 6).innerHTML == "" || _$(id + 6).innerHTML == "White") && (_$(id + 10).innerHTML == "" || _$(id + 10).innerHTML == "White")) {
                            _$(id + 6).style.backgroundColor = "#90EE90";
                            _$(id + 6).style.border = "1px solid #013220";
                            _$(id + 6).style.borderRadius = "5px";
                            possibleMoves.push(id + 6);
                        }
                        console.log("BlackSecond", possibleMoves);
                    }
                }
                if (id - 17 >= 0 && id - 17 <= 63) {
                    if (_$(id - 17).innerHTML == "" || _$(id - 15).innerHTML == "White") {
                        if (_$(id - 17).parentElement.id == _$(id - 15).parentElement.id) {
                            _$(id - 17).style.backgroundColor = "#90EE90";
                            _$(id - 17).style.border = "1px solid #013220";
                            _$(id - 17).style.borderRadius = "5px";

                            _$(id - 15).style.backgroundColor = "#90EE90";
                            _$(id - 15).style.border = "1px solid #013220";
                            _$(id - 15).style.borderRadius = "5px";
                            possibleMoves.push(id - 17);
                            possibleMoves.push(id - 15);
                        }
                        else if (coloumnType == "firstThree" && _$(id - 17).parentElement.id != _$(id - 15).parentElement.id && (_$(id - 15).innerHTML == "" || _$(id - 15).innerHTML == "White")) {
                            _$(id - 15).style.backgroundColor = "#90EE90";
                            _$(id - 15).style.border = "1px solid #013220";
                            _$(id - 15).style.borderRadius = "5px";
                            possibleMoves.push(id - 15);

                        }
                        else if (coloumnType == "lastThree" && _$(id - 17).parentElement.id != _$(id - 15).parentElement.id && (_$(id - 17).innerHTML == "" || _$(id - 17).innerHTML == "White")) {
                            _$(id - 17).style.backgroundColor = "#90EE90";
                            _$(id - 17).style.border = "1px solid #013220";
                            _$(id - 17).style.borderRadius = "5px";
                            possibleMoves.push(id - 17);
                        }
                        else if ((coloumnType == "lastThree" || coloumnType == "firstThree") && _$(id + 17).parentElement.id == _$(id + 15).parentElement.id && (_$(id - 17).innerHTML == "" || _$(id - 17).innerHTML == "White") && (_$(id - 15).innerHTML == "" || _$(id - 15).innerHTML == "White")) {
                            _$(id - 15).style.backgroundColor = "#90EE90";
                            _$(id - 15).style.border = "1px solid #013220";
                            _$(id - 15).style.borderRadius = "5px";
                            possibleMoves.push(id - 15);

                            _$(id - 17).style.backgroundColor = "#90EE90";
                            _$(id - 17).style.border = "1px solid #013220";
                            _$(id - 17).style.borderRadius = "5px";
                            possibleMoves.push(id - 15);
                        }
                        console.log("BlackThird", possibleMoves);
                    }
                }
                if (id - 10 >= 0 && id - 10 <= 63) {
                    if (_$(id - 10).innerHTML == "" || _$(id - 6).innerHTML == "White") {
                        if (_$(id - 10).parentElement.id == _$(id - 6).parentElement.id) {
                            _$(id - 10).style.backgroundColor = "#90EE90";
                            _$(id - 10).style.border = "1px solid #013220";
                            _$(id - 10).style.borderRadius = "5px";

                            _$(id - 6).style.backgroundColor = "#90EE90";
                            _$(id - 6).style.border = "1px solid #013220";
                            _$(id - 6).style.borderRadius = "5px";
                            possibleMoves.push(id - 10);
                            possibleMoves.push(id - 6);
                        }
                        else if (coloumnType == "firstThree" && _$(id - 10).parentElement.id != _$(id - 6).parentElement.id && (_$(id - 6).innerHTML == "" || _$(id - 6).innerHTML == "White")) {
                            _$(id - 6).style.backgroundColor = "#90EE90";
                            _$(id - 6).style.border = "1px solid #013220";
                            _$(id - 6).style.borderRadius = "5px";
                            possibleMoves.push(id - 6);

                        }
                        else if (coloumnType == "lastThree" && _$(id - 10).parentElement.id != _$(id - 6).parentElement.id && (_$(id - 10).innerHTML == "" || _$(id - 10).innerHTML == "White")) {
                            _$(id - 10).style.backgroundColor = "#90EE90";
                            _$(id - 10).style.border = "1px solid #013220";
                            _$(id - 10).style.borderRadius = "5px";
                            possibleMoves.push(id - 10);
                        }
                        else if ((coloumnType == "lastThree" || coloumnType == "firstThree") && _$(id + 17).parentElement.id == _$(id + 15).parentElement.id && (_$(id - 10).innerHTML == "" || _$(id - 10).innerHTML == "White") && (_$(id - 10).innerHTML == "" || _$(id - 10).innerHTML == "White")) {
                            _$(id - 6).style.backgroundColor = "#90EE90";
                            _$(id - 6).style.border = "1px solid #013220";
                            _$(id - 6).style.borderRadius = "5px";
                            possibleMoves.push(id - 6);

                            _$(id - 10).style.backgroundColor = "#90EE90";
                            _$(id - 10).style.border = "1px solid #013220";
                            _$(id - 10).style.borderRadius = "5px";
                            possibleMoves.push(id - 10);
                        }
                        console.log("BlackFourth", possibleMoves);
                    }
                }
                selection = e.id;

            }

            else if (piece == "White_horse" && turn == "White") {
                id = parseInt(e.id);
                if (id + 17 >= 0 && id + 17 <= 63) {
                    if (_$(id + 17).innerHTML == "" || _$(id + 15).innerHTML == "Black") {
                        if (_$(id + 17).parentElement.id == _$(id + 15).parentElement.id) {
                            _$(id + 17).style.backgroundColor = "#90EE90";
                            _$(id + 17).style.border = "1px solid #013220";
                            _$(id + 17).style.borderRadius = "5px";

                            _$(id + 15).style.backgroundColor = "#90EE90";
                            _$(id + 15).style.border = "1px solid #013220";
                            _$(id + 15).style.borderRadius = "5px";
                            possibleMoves.push(id + 17);
                            possibleMoves.push(id + 15);
                        }
                        else if (coloumnType == "firstThree" && _$(id + 17).parentElement.id != _$(id + 15).parentElement.id && (_$(id + 17).innerHTML == "" || _$(id + 17).innerHTML == "Black")) {
                            _$(id + 17).style.backgroundColor = "#90EE90";
                            _$(id + 17).style.border = "1px solid #013220";
                            _$(id + 17).style.borderRadius = "5px";
                            possibleMoves.push(id + 17);

                        }
                        else if (coloumnType == "lastThree" && _$(id + 17).parentElement.id != _$(id + 15).parentElement.id && (_$(id + 15).innerHTML == "" || _$(id + 15).innerHTML == "Black")) {
                            _$(id + 15).style.backgroundColor = "#90EE90";
                            _$(id + 15).style.border = "1px solid #013220";
                            _$(id + 15).style.borderRadius = "5px";
                            possibleMoves.push(id + 15);
                        }

                        else if ((coloumnType == "lastThree" || coloumnType == "firstThree") && _$(id + 17).parentElement.id == _$(id + 15).parentElement.id && (_$(id + 15).innerHTML == "" || _$(id + 15).innerHTML == "Black") && (_$(id + 17).innerHTML == "" || _$(id + 17).innerHTML == "Black")) {
                            _$(id + 17).style.backgroundColor = "#90EE90";
                            _$(id + 17).style.border = "1px solid #013220";
                            _$(id + 17).style.borderRadius = "5px";
                            possibleMoves.push(id + 17);

                            _$(id + 15).style.backgroundColor = "#90EE90";
                            _$(id + 15).style.border = "1px solid #013220";
                            _$(id + 15).style.borderRadius = "5px";
                            possibleMoves.push(id + 15);
                        }
                        console.log("WhiteFirst", possibleMoves);
                    }
                }
                if (id + 10 >= 0 && id + 10 <= 63) {
                    if (_$(id + 10).innerHTML == "" || _$(id + 6).innerHTML == "Black") {
                        if (_$(id + 10).parentElement.id == _$(id + 6).parentElement.id) {
                            _$(id + 10).style.backgroundColor = "#90EE90";
                            _$(id + 10).style.border = "1px solid #013220";
                            _$(id + 10).style.borderRadius = "5px";

                            _$(id + 6).style.backgroundColor = "#90EE90";
                            _$(id + 6).style.border = "1px solid #013220";
                            _$(id + 6).style.borderRadius = "5px";
                            possibleMoves.push(id + 10);
                            possibleMoves.push(id + 6);
                        }
                        else if (coloumnType == "firstThree" && _$(id + 10).parentElement.id != _$(id + 6).parentElement.id && (_$(id + 10).innerHTML == "" || _$(id + 10).innerHTML == "Black")) {
                            _$(id + 10).style.backgroundColor = "#90EE90";
                            _$(id + 10).style.border = "1px solid #013220";
                            _$(id + 10).style.borderRadius = "5px";
                            possibleMoves.push(id + 10);

                        }
                        else if (coloumnType == "lastThree" && _$(id + 10).parentElement.id != _$(id + 6).parentElement.id && (_$(id + 6).innerHTML == "" || _$(id + 6).innerHTML == "Black")) {
                            _$(id + 6).style.backgroundColor = "#90EE90";
                            _$(id + 6).style.border = "1px solid #013220";
                            _$(id + 6).style.borderRadius = "5px";
                            possibleMoves.push(id + 6);
                        }
                        else if ((coloumnType == "lastThree" || coloumnType == "firstThree") && _$(id + 17).parentElement.id == _$(id + 15).parentElement.idd && (_$(id + 6).innerHTML == "" || _$(id + 6).innerHTML == "Black") || (_$(id + 10).innerHTML == "" || _$(id + 10).innerHTML == "Black")) {
                            _$(id + 10).style.backgroundColor = "#90EE90";
                            _$(id + 10).style.border = "1px solid #013220";
                            _$(id + 10).style.borderRadius = "5px";
                            possibleMoves.push(id + 10);

                            _$(id + 6).style.backgroundColor = "#90EE90";
                            _$(id + 6).style.border = "1px solid #013220";
                            _$(id + 6).style.borderRadius = "5px";
                            possibleMoves.push(id + 6);
                        }
                        console.log("WhiteSecond", possibleMoves);
                    }
                }
                if (id - 17 >= 0 && id - 17 <= 63) {
                    if (_$(id - 17).innerHTML == "" || _$(id - 15).innerHTML == "Black") {
                        if (_$(id - 17).parentElement.id == _$(id - 15).parentElement.id) {
                            _$(id - 17).style.backgroundColor = "#90EE90";
                            _$(id - 17).style.border = "1px solid #013220";
                            _$(id - 17).style.borderRadius = "5px";

                            _$(id - 15).style.backgroundColor = "#90EE90";
                            _$(id - 15).style.border = "1px solid #013220";
                            _$(id - 15).style.borderRadius = "5px";
                            possibleMoves.push(id - 17);
                            possibleMoves.push(id - 15);
                        }
                        else if (coloumnType == "firstThree" && _$(id - 17).parentElement.id != _$(id - 15).parentElement.id && (_$(id - 15).innerHTML == "" || _$(id - 15).innerHTML == "Black")) {
                            _$(id - 15).style.backgroundColor = "#90EE90";
                            _$(id - 15).style.border = "1px solid #013220";
                            _$(id - 15).style.borderRadius = "5px";
                            possibleMoves.push(id - 15);

                        }
                        else if (coloumnType == "lastThree" && _$(id - 17).parentElement.id != _$(id - 15).parentElement.id && (_$(id - 17).innerHTML == "" || _$(id - 17).innerHTML == "Black")) {
                            _$(id - 17).style.backgroundColor = "#90EE90";
                            _$(id - 17).style.border = "1px solid #013220";
                            _$(id - 17).style.borderRadius = "5px";
                            possibleMoves.push(id - 17);
                        }
                        else if ((coloumnType == "lastThree" || coloumnType == "firstThree") && _$(id + 17).parentElement.id == _$(id + 15).parentElement.id && (_$(id - 17).innerHTML == "" || _$(id - 17).innerHTML == "Black") && (_$(id - 15).innerHTML == "" || _$(id - 15).innerHTML == "Black")) {
                            _$(id - 15).style.backgroundColor = "#90EE90";
                            _$(id - 15).style.border = "1px solid #013220";
                            _$(id - 15).style.borderRadius = "5px";
                            possibleMoves.push(id - 15);

                            _$(id - 17).style.backgroundColor = "#90EE90";
                            _$(id - 17).style.border = "1px solid #013220";
                            _$(id - 17).style.borderRadius = "5px";
                            possibleMoves.push(id - 17);
                        }
                        console.log("WhiteThird", possibleMoves);
                    }
                }
                if (id - 10 >= 0 && id - 10 <= 63) {
                    if (_$(id - 10).innerHTML == "" || _$(id - 6).innerHTML == "Black") {
                        if (_$(id - 10).parentElement.id == _$(id - 6).parentElement.id) {
                            _$(id - 10).style.backgroundColor = "#90EE90";
                            _$(id - 10).style.border = "1px solid #013220";
                            _$(id - 10).style.borderRadius = "5px";

                            _$(id - 6).style.backgroundColor = "#90EE90";
                            _$(id - 6).style.border = "1px solid #013220";
                            _$(id - 6).style.borderRadius = "5px";
                            possibleMoves.push(id - 10);
                            possibleMoves.push(id - 6);
                        }
                        else if (coloumnType == "firstThree" && _$(id - 10).parentElement.id != _$(id - 6).parentElement.id && (_$(id - 6).innerHTML == "" || _$(id - 6).innerHTML == "Black")) {
                            _$(id - 6).style.backgroundColor = "#90EE90";
                            _$(id - 6).style.border = "1px solid #013220";
                            _$(id - 6).style.borderRadius = "5px";
                            possibleMoves.push(id - 6);

                        }
                        else if (coloumnType == "lastThree" && _$(id - 10).parentElement.id != _$(id - 6).parentElement.id && (_$(id - 10).innerHTML == "" || _$(id - 10).innerHTML == "Black")) {
                            _$(id - 10).style.backgroundColor = "#90EE90";
                            _$(id - 10).style.border = "1px solid #013220";
                            _$(id - 10).style.borderRadius = "5px";
                            possibleMoves.push(id - 10);
                        }
                        else if ((coloumnType == "lastThree" || coloumnType == "firstThree") && _$(id + 17).parentElement.id == _$(id + 15).parentElement.id && (_$(id - 10).innerHTML == "" || _$(id - 10).innerHTML == "Black") && (_$(id - 6).innerHTML == "" || _$(id - 6).innerHTML == "Black")) {
                            _$(id - 6).style.backgroundColor = "#90EE90";
                            _$(id - 6).style.border = "1px solid #013220";
                            _$(id - 6).style.borderRadius = "5px";
                            possibleMoves.push(id - 6);

                            _$(id - 10).style.backgroundColor = "#90EE90";
                            _$(id - 10).style.border = "1px solid #013220";
                            _$(id - 10).style.borderRadius = "5px";
                            possibleMoves.push(id - 10);
                        }
                        console.log("WhiteFourth", possibleMoves);
                    }
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

        if (piece == null) {
            _$("toast-warning").style.visibility = "visible";
            _$("warningText").innerHTML = `Please ! Select <p class="text-green-500 text-xl">${turn} Team's</p> Piece..`
            setTimeout(() => {
                _$("toast-warning").style.visibility = "hidden";
            }, 2000);
        }
    }
    else {
        let image = _$(selection).children[0].getAttribute("src");
        let pieceType = _$(e.id).children[0] ? _$(e.id).children[0].getAttribute("src").replace("./images/", "").replace(".png", "") : null;
        if (possibleMoves.indexOf(parseInt(e.id)) !== -1) {
            _$(selection).innerHTML = "";
            _$(e.id).innerHTML = `<img class="h-8 w-20 md:h-12 md:w-20 lg:h-12 lg:w-20 xl:h-12 xl:w-20" src="${image}"/>`;
            let pieceType = _$(e.id).children[0] ? _$(e.id).children[0].getAttribute("src").replace("./images/", "").replace(".png", "") : null;

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
        }

        else if (pieceType == null) {
            _$("toast-warning").style.visibility = "visible";
            _$("warningText").innerHTML = `Please select the possible moves...`
            setTimeout(() => {
                _$("toast-warning").style.visibility = "hidden";
            }, 2000);
            selection = null;
            possibleMoves = [];
        }

        else {
            selection = null;
            possibleMoves = [];
            document.move(e);
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
