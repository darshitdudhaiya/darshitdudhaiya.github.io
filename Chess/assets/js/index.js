var board = [
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null]
];

const icon = ["./images/Black_rook.png", "./images/Black_horse.png", "./images/Black_camel.png", "./images/Black_queen.png", "./images/Black_king.png", "./images/Black_camel.png", "./images/Black_horse.png", "./images/Black_rook.png"];
const white_icon = ["./images/White_rook.png", "./images/White_horse.png", "./images/White_camel.png", "./images/White_queen.png", "./images/White_king.png", "./images/White_camel.png", "./images/White_horse.png", "./images/White_rook.png"];

let id = 0;
let idForInitializePiece = 0;

let possibleMoves = [];

let selection = null;

let turn = null;

let player1 = null;

let player2 = null;

function _$(string) {
    return document.getElementById(string);
}

function _$class(string) {
    return document.getElementsByClassName(string);
}

function _$tag(string) {
    return document.getElementsByTagName(string);
}

function choosePlayer(e) {
    if (e.value == "Black") {
        player1 = e.value;
        player2 = "White";
        turn = player1;
        _$("choosePlayer").style.visibility = "hidden";
    }
    else if (e.value == "White") {
        player1 = e.value;
        player2 = "Black";
        turn = player1;
        _$("choosePlayer").style.visibility = "hidden";
    }
}

for (let index = 0; index < board.length; index++) {
    _$(
        "tiles"
    ).innerHTML += `<tr class="border-0 border-[#01eabb]" id="row${index}">
        `;

    if (index == 0) {
        for (let j = 0; j < icon.length; j++) {
            if (id % 2 == 0) {
                _$(`row${index}`).innerHTML += `
                <td class="border-0 border-transperent bg-[#3b6749] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" data-block="dark"  onclick="move(this)"><img class="h-8 w-20 md:h-12 md:w-20 lg:h-12 lg:w-20 xl:h-12 xl:w-20" src="${icon[j]}"/></td>`;
                id++;
            }
            else {
                _$(`row${index}`).innerHTML += `
                <td class="border-0 border-transperent bg-[#979740] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" data-block="light"  onclick="move(this)"><img class="h-8 w-20 md:h-12 md:w-20 lg:h-12 lg:w-20 xl:h-12 xl:w-20" src="${icon[j]}"/></td>`;
                id++;
            }
        }
    }
    else if (index == 1) {
        for (let j = 0; j < icon.length; j++) {
            if (id % 2 != 0) {
                _$(`row${index}`).innerHTML += `
                <td class="border-0 border-transperent bg-[#3b6749] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" data-block="dark"  onclick="move(this)"><img class="h-8 w-20 md:h-12 md:w-20 lg:h-12 lg:w-20 xl:h-12 xl:w-20" src="./images/Black_soldier.png"/></td>`;
                id++;
            }
            else {
                _$(`row${index}`).innerHTML += `
                <td class="border-0 border-transperent bg-[#979740] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" data-block="light"  onclick="move(this)"><img class="h-8 w-20 md:h-12 md:w-20 lg:h-12 lg:w-20 xl:h-12 xl:w-20" src="./images/Black_soldier.png"/></td>`;
                id++;
            }
        }
    }
    else if (index == 6) {
        for (let j = 0; j < icon.length; j++) {
            if (id % 2 == 0) {
                _$(`row${index}`).innerHTML += `
                <td class="border-0 border-transperent bg-[#3b6749] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" data-block="dark"  onclick="move(this)"><img class="h-8 w-20 md:h-12 md:w-20 lg:h-12 lg:w-20 xl:h-12 xl:w-20" src="./images/White_soldier.png"/></td>`;
                id++;
            }
            else {
                _$(`row${index}`).innerHTML += `
                <td class="border-0 border-transperent bg-[#979740] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" data-block="light"  onclick="move(this)"><img class="h-8 w-20 md:h-12 md:w-20 lg:h-12 lg:w-20 xl:h-12 xl:w-20" src="./images/White_soldier.png"/></td>`;
                id++;
            }
        }
    }
    else if (index == 7) {
        for (let j = 0; j < icon.length; j++) {
            if (id % 2 != 0) {
                _$(`row${index}`).innerHTML += `
                <td class="border-0 border-transperent bg-[#3b6749] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" data-block="dark"  onclick="move(this)"><img class="h-8 w-20 md:h-12 md:w-20 lg:h-12 lg:w-20 xl:h-12 xl:w-20" src="${white_icon[j]}"/></td>`;
                id++;
            }
            else {
                _$(`row${index}`).innerHTML += `
                <td class="border-0 border-transperent bg-[#979740] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" data-block="light"  onclick="move(this)"><img class="h-8 w-20 md:h-12 md:w-20 lg:h-12 lg:w-20 xl:h-12 xl:w-20" src="${white_icon[j]}"/></td>`;
                id++;
            }
        }
    }
    else {
        for (let i = 0; i < board[index].length; i++) {
            if (index % 2 == 0) {
                if (id % 2 == 0) {
                    _$(`row${index}`).innerHTML += `
                    <td class="border-0 border-transperent bg-[#3b6749] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" data-block="dark" onclick="move(this)"></td>`;
                    id++;
                }
                else {
                    _$(`row${index}`).innerHTML += `
                    <td class="border-0 border-transperent bg-[#979740] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" data-block="light" onclick="move(this)"></td>`;
                    id++;
                }
            }
            else if (index % 2 != 0) {
                if (id % 2 == 0) {
                    _$(`row${index}`).innerHTML += `
                    <td class="border-0 border-transperent bg-[#979740] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" data-block="light" onclick="move(this)"></td>`;
                    id++;
                }
                else {
                    _$(`row${index}`).innerHTML += `
                    <td class="border-0 border-transperent bg-[#3b6749] xl:h-16 lg:h-16 md:h-16 h-12  xl:w-16 lg:w-16 md:w-16 w-12 text-center text-6xl font-black text-[#fffcc9] cursor-pointer tile" id="${id}" data-block="dark" onclick="move(this)"></td>`;
                    id++;
                }
            }
        }
    }
    _$("tiles").innerHTML += `
      </tr>`;
}

for (let index = 0; index < board.length; index++) {
    for (let j = 0; j < board[index].length; j++) {
        let piece = _$(idForInitializePiece).children[0] ? _$(idForInitializePiece).children[0].getAttribute("src").replace("./images/", "").replace(".png", "") : null
        board[index][j] = idForInitializePiece;
        idForInitializePiece++;
    }
}

for (let index = 0; index < board.length; index++) {
    for (let j = 0; j < board[index].length; j++) {
        if (_$(board[index][j]).children[0])
            _$(board[index][j]).setAttribute("onclick", "selectPossibleMoves(this)");
        else
            _$(board[index][j]).setAttribute("onclick", "place(this)");
    }
}

function declareWinner(pieceType) {

    let type1;
    let type2;

    if (pieceType.includes("Black") == true) {
        type1 = "Black";
        type2 = "White";
    }

    else if (pieceType.includes("White") == true) {
        type1 = "White";
        type2 = "Black";
    }


    isWinner = false;

    loop1:
    for (let index = 0; index < board.length; index++) {
        for (let j = 0; j < board[index].length; j++) {
            let block = board[index] ? board[index][j] ? _$(board[index][j]).children[0] ? _$(board[index][j]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";

            if (block == type1 || block == null) {
                isWinner = true;
            }
            if (block == type2) {
                isWinner = false;
                break loop1;
            }

        }
    }

    if (isWinner == true) {
        _$("toast-interactive").style.visibility = "visible";
        _$("winner_name").innerHTML = `Congratulations! <p class="text-blue-500 text-xl">${player1} Team</p> you win this match.....`;
    }
}

function possibleMovesForSoldiers(e) {
    let pieceType = _$(e.id).children[0].getAttribute("src").replace("./images/", "").replace(".png", "");

    let id = parseInt(e.id);

    loop1:
    for (let index = 0; index < board.length; index++) {
        loop2:
        for (let i = 0; i < board[index].length; i++) {
            if (board[index][i] == id) {
                if (pieceType == "Black_soldier" && turn == "Black") {
                    let firstPossibleDeath = _$(board[index + 1][i - 1]) ? _$(board[index + 1][i - 1]).children[0] ? _$(board[index + 1][i - 1]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : "" : "";
                    let secondPossibleDeath = _$(board[index + 1][i + 1]) ? _$(board[index + 1][i + 1]).children[0] ? _$(board[index + 1][i + 1]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : "" : "";

                    if (_$(board[index + 1][i]).innerHTML == "" && ((firstPossibleDeath == "" && secondPossibleDeath == "") || (firstPossibleDeath == "Black" && secondPossibleDeath == "Black") || (firstPossibleDeath == "" && secondPossibleDeath == "Black") || (firstPossibleDeath == "Black" && secondPossibleDeath == ""))) {
                        _$(board[index + 1][i]).style.backgroundColor = "#90EE90";
                        _$(board[index + 1][i]).style.border = "1px solid #013220";
                        _$(board[index + 1][i]).style.borderRadius = "5px";
                        possibleMoves.push(board[index + 1][i]);
                    }
                    if (id >= 8 && id <= 15) {
                        _$(board[index + 2][i]).style.backgroundColor = "#90EE90";
                        _$(board[index + 2][i]).style.border = "1px solid #013220";
                        _$(board[index + 2][i]).style.borderRadius = "5px";
                        possibleMoves.push(board[index + 2][i]);
                    }
                    if (firstPossibleDeath == "White") {
                        _$(board[index + 1][i - 1]).style.backgroundColor = "#90EE90";
                        _$(board[index + 1][i - 1]).style.border = "1px solid #013220";
                        _$(board[index + 1][i - 1]).style.borderRadius = "5px";
                        possibleMoves.push(board[index + 1][i - 1]);
                    }
                    if (secondPossibleDeath == "White") {
                        _$(board[index + 1][i + 1]).style.backgroundColor = "#90EE90";
                        _$(board[index + 1][i + 1]).style.border = "1px solid #013220";
                        _$(board[index + 1][i + 1]).style.borderRadius = "5px";
                        possibleMoves.push(board[index + 1][i + 1]);
                    }
                    break loop1;
                }
                else if (pieceType == "White_soldier" && turn == "White") {
                    let firstPossibleDeath = _$(board[index - 1][i - 1]) ? _$(board[index - 1][i - 1]).children[0] ? _$(board[index - 1][i - 1]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : "" : "";
                    let secondPossibleDeath = _$(board[index - 1][i + 1]) ? _$(board[index - 1][i + 1]).children[0] ? _$(board[index - 1][i + 1]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : "" : "";

                    if (_$(board[index - 1][i]).innerHTML == "" && ((firstPossibleDeath == "" && secondPossibleDeath == "") || (firstPossibleDeath == "White" && secondPossibleDeath == "White") || (firstPossibleDeath == "" && secondPossibleDeath == "White") || (firstPossibleDeath == "White" && secondPossibleDeath == ""))) {
                        _$(board[index - 1][i]).style.backgroundColor = "#90EE90";
                        _$(board[index - 1][i]).style.border = "1px solid #013220";
                        _$(board[index - 1][i]).style.borderRadius = "5px";
                        possibleMoves.push(board[index - 1][i]);
                    }
                    if (id >= 48 && id <= 55) {
                        _$(board[index - 2][i]).style.backgroundColor = "#90EE90";
                        _$(board[index - 2][i]).style.border = "1px solid #013220";
                        _$(board[index - 2][i]).style.borderRadius = "5px";
                        possibleMoves.push(board[index - 2][i]);
                    }
                    if (firstPossibleDeath == "Black") {
                        _$(board[index - 1][i - 1]).style.backgroundColor = "#90EE90";
                        _$(board[index - 1][i - 1]).style.border = "1px solid #013220";
                        _$(board[index - 1][i - 1]).style.borderRadius = "5px";
                        possibleMoves.push(board[index - 1][i - 1]);
                    }
                    if (secondPossibleDeath == "Black") {
                        _$(board[index - 1][i + 1]).style.backgroundColor = "#90EE90";
                        _$(board[index - 1][i + 1]).style.border = "1px solid #013220";
                        _$(board[index - 1][i + 1]).style.borderRadius = "5px";
                        possibleMoves.push(board[index - 1][i + 1]);
                    }
                    break loop1;
                }
            }
        }
    }
}

function possibleMovesForRooks(e) {
    let pieceType = _$(e.id).children[0].getAttribute("src").replace("./images/", "").replace(".png", "");

    let id = parseInt(e.id);

    loop1:
    for (let index = 0; index < board.length; index++) {
        loop2:
        for (let i = 0; i < board[index].length; i++) {
            if (board[index][i] == id) {
                if (pieceType == "Black_rook" && turn == "Black") {
                    loop3:
                    for (let j = 1, k = 1, m = 1, n = 1; ((j < board[index].length) || (k < board[index].length) || (m < board[index].length) || (n < board[index].length));) {
                        let leftSidePossibleMove = board[index] ? board[index][i - j] ? _$(board[index][i - j]).children[0] ? _$(board[index][i - j]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let rightSidePossibleMove = board[index] ? board[index][i + k] ? _$(board[index][i + k]).children[0] ? _$(board[index][i + k]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let downSidePossibleMove = board[index + m] ? board[index + m][i] ? _$(board[index + m][i]).children[0] ? _$(board[index + m][i]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let upSidePossibleMove = board[index - n] ? board[index - n][i] ? _$(board[index - n][i]).children[0] ? _$(board[index - n][i]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";


                        if (leftSidePossibleMove != "") {
                            if (leftSidePossibleMove == "Black") {
                                j = board[index].length;
                            }
                            if (leftSidePossibleMove == null) {
                                _$(board[index][i - j]).style.backgroundColor = "#90EE90";
                                _$(board[index][i - j]).style.border = "1px solid #013220";
                                _$(board[index][i - j]).style.borderRadius = "5px";
                                possibleMoves.push(board[index][i - j]);
                            }
                            if (leftSidePossibleMove == "White") {
                                _$(board[index][i - j]).style.backgroundColor = "#90EE90";
                                _$(board[index][i - j]).style.border = "1px solid #013220";
                                _$(board[index][i - j]).style.borderRadius = "5px";
                                possibleMoves.push(board[index][i - j]);
                                j = board[index].length;
                            }
                            j < board[index].length ? j++ : j;
                        }

                        if (leftSidePossibleMove == "") {
                            j = board[index].length;
                        }

                        if (rightSidePossibleMove != "") {
                            if (rightSidePossibleMove == "Black") {
                                k = board[index].length;
                            }
                            if (rightSidePossibleMove == null) {
                                _$(board[index][i + k]).style.backgroundColor = "#90EE90";
                                _$(board[index][i + k]).style.border = "1px solid #013220";
                                _$(board[index][i + k]).style.borderRadius = "5px";
                                possibleMoves.push(board[index][i + k]);
                            }
                            if (rightSidePossibleMove == "White") {
                                _$(board[index][i + k]).style.backgroundColor = "#90EE90";
                                _$(board[index][i + k]).style.border = "1px solid #013220";
                                _$(board[index][i + k]).style.borderRadius = "5px";
                                possibleMoves.push(board[index][i + k]);
                                k = board[index].length;

                            }
                            k < board[index].length ? k++ : k;
                        }

                        if (rightSidePossibleMove == "") {
                            k = board[index].length;
                        }

                        if (downSidePossibleMove != "") {
                            if (downSidePossibleMove == "Black") {
                                m = board[index].length;
                            }
                            if (downSidePossibleMove == null) {
                                _$(board[index + m][i]).style.backgroundColor = "#90EE90";
                                _$(board[index + m][i]).style.border = "1px solid #013220";
                                _$(board[index + m][i]).style.borderRadius = "5px";
                                possibleMoves.push(board[index + m][i]);
                            }
                            if (downSidePossibleMove == "White") {
                                _$(board[index + m][i]).style.backgroundColor = "#90EE90";
                                _$(board[index + m][i]).style.border = "1px solid #013220";
                                _$(board[index + m][i]).style.borderRadius = "5px";
                                possibleMoves.push(board[index + m][i]);
                                m = board[index].length;
                            }
                            m < board[index].length ? m++ : m;
                        }

                        if (downSidePossibleMove == "") {
                            m = board[index].length;
                        }

                        if (upSidePossibleMove != "") {
                            if (upSidePossibleMove == "Black") {
                                n = board[index].length;
                            }
                            if (upSidePossibleMove == null) {
                                _$(board[index - n][i]).style.backgroundColor = "#90EE90";
                                _$(board[index - n][i]).style.border = "1px solid #013220";
                                _$(board[index - n][i]).style.borderRadius = "5px";
                                possibleMoves.push(board[index - n][i]);
                            }
                            if (upSidePossibleMove == "White") {
                                _$(board[index - n][i]).style.backgroundColor = "#90EE90";
                                _$(board[index - n][i]).style.border = "1px solid #013220";
                                _$(board[index - n][i]).style.borderRadius = "5px";
                                possibleMoves.push(board[index - n][i]);
                                n = board[index].length;
                            }
                            n < board[index].length ? n++ : n;
                        }

                        if (upSidePossibleMove == "") {
                            n = board[index].length;
                        }
                    }
                }
                else if (pieceType == "White_rook" && turn == "White") {
                    loop3:
                    for (let j = 1, k = 1, m = 1, n = 1; ((j < board[index].length) || (k < board[index].length) || (m < board[index].length) || (n < board[index].length));) {
                        let leftSidePossibleMove = board[index] ? board[index][i - j] ? _$(board[index][i - j]).children[0] ? _$(board[index][i - j]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let rightSidePossibleMove = board[index] ? board[index][i + k] ? _$(board[index][i + k]).children[0] ? _$(board[index][i + k]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let downSidePossibleMove = board[index + m] ? board[index + m][i] ? _$(board[index + m][i]).children[0] ? _$(board[index + m][i]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let upSidePossibleMove = board[index - n] ? board[index - n][i] ? _$(board[index - n][i]).children[0] ? _$(board[index - n][i]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";


                        if (leftSidePossibleMove != "") {
                            if (leftSidePossibleMove == "White") {
                                j = board[index].length;
                            }
                            if (leftSidePossibleMove == null) {
                                _$(board[index][i - j]).style.backgroundColor = "#90EE90";
                                _$(board[index][i - j]).style.border = "1px solid #013220";
                                _$(board[index][i - j]).style.borderRadius = "5px";
                                possibleMoves.push(board[index][i - j]);
                            }
                            if (leftSidePossibleMove == "Black") {
                                _$(board[index][i - j]).style.backgroundColor = "#90EE90";
                                _$(board[index][i - j]).style.border = "1px solid #013220";
                                _$(board[index][i - j]).style.borderRadius = "5px";
                                possibleMoves.push(board[index][i - j]);
                                j = board[index].length;
                            }
                            j < board[index].length ? j++ : j;
                        }

                        if (leftSidePossibleMove == "") {
                            j = board[index].length;
                        }

                        if (rightSidePossibleMove != "") {
                            if (rightSidePossibleMove == "White") {
                                k = board[index].length;
                            }
                            if (rightSidePossibleMove == null) {
                                _$(board[index][i + k]).style.backgroundColor = "#90EE90";
                                _$(board[index][i + k]).style.border = "1px solid #013220";
                                _$(board[index][i + k]).style.borderRadius = "5px";
                                possibleMoves.push(board[index][i + k]);
                            }
                            if (rightSidePossibleMove == "Black") {
                                _$(board[index][i + k]).style.backgroundColor = "#90EE90";
                                _$(board[index][i + k]).style.border = "1px solid #013220";
                                _$(board[index][i + k]).style.borderRadius = "5px";
                                possibleMoves.push(board[index][i + k]);
                                k = board[index].length;

                            }
                            k < board[index].length ? k++ : k;
                        }

                        if (rightSidePossibleMove == "") {
                            k = board[index].length;
                        }

                        if (downSidePossibleMove != "") {
                            if (downSidePossibleMove == "White") {
                                m = board[index].length;
                            }
                            if (downSidePossibleMove == null) {
                                _$(board[index + m][i]).style.backgroundColor = "#90EE90";
                                _$(board[index + m][i]).style.border = "1px solid #013220";
                                _$(board[index + m][i]).style.borderRadius = "5px";
                                possibleMoves.push(board[index + m][i]);
                            }
                            if (downSidePossibleMove == "Black") {
                                _$(board[index + m][i]).style.backgroundColor = "#90EE90";
                                _$(board[index + m][i]).style.border = "1px solid #013220";
                                _$(board[index + m][i]).style.borderRadius = "5px";
                                possibleMoves.push(board[index + m][i]);
                                m = board[index].length;
                            }
                            m < board[index].length ? m++ : m;
                        }

                        if (downSidePossibleMove == "") {
                            m = board[index].length;
                        }

                        if (upSidePossibleMove != "") {
                            if (upSidePossibleMove == "White") {
                                n = board[index].length;
                            }
                            if (upSidePossibleMove == null) {
                                _$(board[index - n][i]).style.backgroundColor = "#90EE90";
                                _$(board[index - n][i]).style.border = "1px solid #013220";
                                _$(board[index - n][i]).style.borderRadius = "5px";
                                possibleMoves.push(board[index - n][i]);
                            }
                            if (upSidePossibleMove == "Black") {
                                _$(board[index - n][i]).style.backgroundColor = "#90EE90";
                                _$(board[index - n][i]).style.border = "1px solid #013220";
                                _$(board[index - n][i]).style.borderRadius = "5px";
                                possibleMoves.push(board[index - n][i]);
                                n = board[index].length;
                            }
                            n < board[index].length ? n++ : n;
                        }

                        if (upSidePossibleMove == "") {
                            n = board[index].length;
                        }
                    }
                }
            }
        }
    }
}

function possibleMovesForHorses(e) {
    let pieceType = _$(e.id).children[0].getAttribute("src").replace("./images/", "").replace(".png", "");

    let id = parseInt(e.id);

    loop1:
    for (let index = 0; index < board.length; index++) {
        loop2:
        for (let i = 0; i < board[index].length; i++) {
            if (board[index][i] == id) {
                let firstPossiblemove = board[index + 2] ? board[index + 2][i + 1] ? _$(board[index + 2][i + 1]).children[0] ? _$(board[index + 2][i + 1]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let secondPossiblemove = board[index + 2] ? board[index + 2][i - 1] ? _$(board[index + 2][i - 1]).children[0] ? _$(board[index + 2][i - 1]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let thirdPossiblemove = board[index + 1] ? board[index + 1][i + 2] ? _$(board[index + 1][i + 2]).children[0] ? _$(board[index + 1][i + 2]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let fourthPossiblemove = board[index + 1] ? board[index + 1][i - 2] ? _$(board[index + 1][i - 2]).children[0] ? _$(board[index + 1][i - 2]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let fifthPossiblemove = board[index - 2] ? board[index - 2][i + 1] ? _$(board[index - 2][i + 1]).children[0] ? _$(board[index - 2][i + 1]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let sixthPossiblemove = board[index - 2] ? board[index - 2][i - 1] ? _$(board[index - 2][i - 1]).children[0] ? _$(board[index - 2][i - 1]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let seventhPossiblemove = board[index - 1] ? board[index - 1][i + 2] ? _$(board[index - 1][i + 2]).children[0] ? _$(board[index - 1][i + 2]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let eighthPossiblemove = board[index - 1] ? board[index - 1][i - 2] ? _$(board[index - 1][i - 2]).children[0] ? _$(board[index - 1][i - 2]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                if (pieceType == "Black_horse" && turn == "Black") {
                    if (firstPossiblemove == null || firstPossiblemove == "White") {
                        _$(board[index + 2][i + 1]).style.backgroundColor = "#90EE90";
                        _$(board[index + 2][i + 1]).style.border = "1px solid #013220";
                        _$(board[index + 2][i + 1]).style.borderRadius = "5px";
                        possibleMoves.push(board[index + 2][i + 1]);
                    }
                    if (secondPossiblemove == null || secondPossiblemove == "White") {
                        _$(board[index + 2][i - 1]).style.backgroundColor = "#90EE90";
                        _$(board[index + 2][i - 1]).style.border = "1px solid #013220";
                        _$(board[index + 2][i - 1]).style.borderRadius = "5px";
                        possibleMoves.push(board[index + 2][i - 1]);
                    }
                    if (thirdPossiblemove == null || thirdPossiblemove == "White") {
                        _$(board[index + 1][i + 2]).style.backgroundColor = "#90EE90";
                        _$(board[index + 1][i + 2]).style.border = "1px solid #013220";
                        _$(board[index + 1][i + 2]).style.borderRadius = "5px";
                        possibleMoves.push(board[index + 1][i + 2]);
                    }
                    if (fourthPossiblemove == null || fourthPossiblemove == "White") {
                        _$(board[index + 1][i - 2]).style.backgroundColor = "#90EE90";
                        _$(board[index + 1][i - 2]).style.border = "1px solid #013220";
                        _$(board[index + 1][i - 2]).style.borderRadius = "5px";
                        possibleMoves.push(board[index + 1][i - 2]);
                    }
                    if (fifthPossiblemove == null || fifthPossiblemove == "White") {
                        _$(board[index - 2][i + 1]).style.backgroundColor = "#90EE90";
                        _$(board[index - 2][i + 1]).style.border = "1px solid #013220";
                        _$(board[index - 2][i + 1]).style.borderRadius = "5px";
                        possibleMoves.push(board[index - 2][i + 1]);
                    }
                    if (sixthPossiblemove == null || sixthPossiblemove == "White") {
                        _$(board[index - 2][i - 1]).style.backgroundColor = "#90EE90";
                        _$(board[index - 2][i - 1]).style.border = "1px solid #013220";
                        _$(board[index - 2][i - 1]).style.borderRadius = "5px";
                        possibleMoves.push(board[index - 2][i - 1]);
                    }
                    if (seventhPossiblemove == null || seventhPossiblemove == "White") {
                        _$(board[index - 1][i + 2]).style.backgroundColor = "#90EE90";
                        _$(board[index - 1][i + 2]).style.border = "1px solid #013220";
                        _$(board[index - 1][i + 2]).style.borderRadius = "5px";
                        possibleMoves.push(board[index - 1][i + 2]);
                    }
                    if (eighthPossiblemove == null || eighthPossiblemove == "White") {
                        _$(board[index - 1][i - 2]).style.backgroundColor = "#90EE90";
                        _$(board[index - 1][i - 2]).style.border = "1px solid #013220";
                        _$(board[index - 1][i - 2]).style.borderRadius = "5px";
                        possibleMoves.push(board[index - 1][i - 2]);
                    }
                    break loop1;
                }
                else if (pieceType == "White_horse" && turn == "White") {
                    if (firstPossiblemove == null || firstPossiblemove == "Black") {
                        _$(board[index + 2][i + 1]).style.backgroundColor = "#90EE90";
                        _$(board[index + 2][i + 1]).style.border = "1px solid #013220";
                        _$(board[index + 2][i + 1]).style.borderRadius = "5px";
                        possibleMoves.push(board[index + 2][i + 1]);
                    }
                    if (secondPossiblemove == null || secondPossiblemove == "Black") {
                        _$(board[index + 2][i - 1]).style.backgroundColor = "#90EE90";
                        _$(board[index + 2][i - 1]).style.border = "1px solid #013220";
                        _$(board[index + 2][i - 1]).style.borderRadius = "5px";
                        possibleMoves.push(board[index + 2][i - 1]);
                    }
                    if (thirdPossiblemove == null || thirdPossiblemove == "Black") {
                        _$(board[index + 1][i + 2]).style.backgroundColor = "#90EE90";
                        _$(board[index + 1][i + 2]).style.border = "1px solid #013220";
                        _$(board[index + 1][i + 2]).style.borderRadius = "5px";
                        possibleMoves.push(board[index + 1][i + 2]);
                    }
                    if (fourthPossiblemove == null || fourthPossiblemove == "Black") {
                        _$(board[index + 1][i - 2]).style.backgroundColor = "#90EE90";
                        _$(board[index + 1][i - 2]).style.border = "1px solid #013220";
                        _$(board[index + 1][i - 2]).style.borderRadius = "5px";
                        possibleMoves.push(board[index + 1][i - 2]);
                    }
                    if (fifthPossiblemove == null || fifthPossiblemove == "Black") {
                        _$(board[index - 2][i + 1]).style.backgroundColor = "#90EE90";
                        _$(board[index - 2][i + 1]).style.border = "1px solid #013220";
                        _$(board[index - 2][i + 1]).style.borderRadius = "5px";
                        possibleMoves.push(board[index - 2][i + 1]);
                    }
                    if (sixthPossiblemove == null || sixthPossiblemove == "Black") {
                        _$(board[index - 2][i - 1]).style.backgroundColor = "#90EE90";
                        _$(board[index - 2][i - 1]).style.border = "1px solid #013220";
                        _$(board[index - 2][i - 1]).style.borderRadius = "5px";
                        possibleMoves.push(board[index - 2][i - 1]);
                    }
                    if (seventhPossiblemove == null || seventhPossiblemove == "Black") {
                        _$(board[index - 1][i + 2]).style.backgroundColor = "#90EE90";
                        _$(board[index - 1][i + 2]).style.border = "1px solid #013220";
                        _$(board[index - 1][i + 2]).style.borderRadius = "5px";
                        possibleMoves.push(board[index - 1][i + 2]);
                    }
                    if (eighthPossiblemove == null || eighthPossiblemove == "Black") {
                        _$(board[index - 1][i - 2]).style.backgroundColor = "#90EE90";
                        _$(board[index - 1][i - 2]).style.border = "1px solid #013220";
                        _$(board[index - 1][i - 2]).style.borderRadius = "5px";
                        possibleMoves.push(board[index - 1][i - 2]);
                    }
                    break loop1;
                }
            }
        }
    }
}

function possibleMovesForCamels(e) {
    let pieceType = _$(e.id).children[0].getAttribute("src").replace("./images/", "").replace(".png", "");

    let id = parseInt(e.id);
    let num = 1;

    loop1:
    for (let index = 0; index < board.length; index++) {
        loop2:
        for (let i = 0; i < board[index].length; i++) {
            if (board[index][i] == id) {
                if (pieceType == "Black_camel" && turn == "Black") {
                    loop3:
                    for (let j = 1, k = 1, m = 1, n = 1; ((j < board[index].length) || (k < board[index].length) || (m < board[index].length) || (n < board[index].length));) {
                        let downLeftSidePossibleMove = board[index + j] ? board[index + j][j + i] ? _$(board[index + j][j + i]).children[0] ? _$(board[index + j][j + i]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let downRightSidePossibleMove = board[index + k] ? board[index + k][i - k] ? _$(board[index + k][i - k]).children[0] ? _$(board[index + k][i - k]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let upLeftSidePossibleMove = board[index - m] ? board[index - m][m + i] ? _$(board[index - m][m + i]).children[0] ? _$(board[index - m][m + i]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let upRightSidePossibleMove = board[index - n] ? board[index - n][i - n] ? _$(board[index - n][i - n]).children[0] ? _$(board[index - n][i - n]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";


                        if (downLeftSidePossibleMove != "") {
                            if (downLeftSidePossibleMove == "Black") {
                                j = board[index].length;
                            }
                            if (downLeftSidePossibleMove == null) {
                                _$(board[index + j][j + i]).style.backgroundColor = "#90EE90";
                                _$(board[index + j][j + i]).style.border = "1px solid #013220";
                                _$(board[index + j][j + i]).style.borderRadius = "5px";
                                possibleMoves.push(board[index + j][j + i]);
                            }
                            if (downLeftSidePossibleMove == "White") {
                                _$(board[index + j][j + i]).style.backgroundColor = "#90EE90";
                                _$(board[index + j][j + i]).style.border = "1px solid #013220";
                                _$(board[index + j][j + i]).style.borderRadius = "5px";
                                possibleMoves.push(board[index + j][j + i]);
                                j = board[index].length;
                            }
                            j < board[index].length ? j++ : j;
                        }

                        if (downLeftSidePossibleMove == "") {
                            j = board[index].length;
                        }

                        if (downRightSidePossibleMove != "") {
                            if (downRightSidePossibleMove == "Black") {
                                k = board[index].length;
                            }
                            if (downRightSidePossibleMove == null) {
                                _$(board[index + k][i - k]).style.backgroundColor = "#90EE90";
                                _$(board[index + k][i - k]).style.border = "1px solid #013220";
                                _$(board[index + k][i - k]).style.borderRadius = "5px";
                                possibleMoves.push(board[index + k][i - k]);
                            }
                            if (downRightSidePossibleMove == "White") {
                                _$(board[index + k][i - k]).style.backgroundColor = "#90EE90";
                                _$(board[index + k][i - k]).style.border = "1px solid #013220";
                                _$(board[index + k][i - k]).style.borderRadius = "5px";
                                possibleMoves.push(board[index + k][i - k]);
                                k = board[index].length;
                            }
                            k < board[index].length ? k++ : k;
                        }

                        if (downRightSidePossibleMove == "") {
                            k = board[index].length;
                        }

                        if (upLeftSidePossibleMove != "") {
                            if (upLeftSidePossibleMove == "Black") {
                                m = board[index].length;
                            }
                            if (upLeftSidePossibleMove == null) {
                                _$(board[index - m][m + i]).style.backgroundColor = "#90EE90";
                                _$(board[index - m][m + i]).style.border = "1px solid #013220";
                                _$(board[index - m][m + i]).style.borderRadius = "5px";
                                possibleMoves.push(board[index - m][m + i]);
                            }
                            if (upLeftSidePossibleMove == "White") {
                                _$(board[index - m][m + i]).style.backgroundColor = "#90EE90";
                                _$(board[index - m][m + i]).style.border = "1px solid #013220";
                                _$(board[index - m][m + i]).style.borderRadius = "5px";
                                possibleMoves.push(board[index - m][m + i]);
                                m = board[index].length;
                            }
                            m < board[index].length ? m++ : m;
                        }

                        if (upLeftSidePossibleMove == "") {
                            m = board[index].length;
                        }

                        if (upRightSidePossibleMove != "") {
                            if (upRightSidePossibleMove == "Black") {
                                n = board[index].length;
                            }
                            if (upRightSidePossibleMove == null) {
                                _$(board[index - n][i - n]).style.backgroundColor = "#90EE90";
                                _$(board[index - n][i - n]).style.border = "1px solid #013220";
                                _$(board[index - n][i - n]).style.borderRadius = "5px";
                                possibleMoves.push(board[index - n][i - n]);
                            }
                            if (upRightSidePossibleMove == "White") {
                                n = board[index].length;
                            }
                            n < board[index].length ? n++ : n;
                        }

                        if (upRightSidePossibleMove == "") {
                            n = board[index].length;
                        }
                    }
                }
                else if (pieceType == "White_camel" && turn == "White") {
                    loop3:
                    for (let j = 1, k = 1, m = 1, n = 1; ((j < board[index].length) || (k < board[index].length) || (m < board[index].length) || (n < board[index].length));) {
                        let downLeftSidePossibleMove = board[index + j] ? board[index + j][j + i] ? _$(board[index + j][j + i]).children[0] ? _$(board[index + j][j + i]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let downRightSidePossibleMove = board[index + k] ? board[index + k][i - k] ? _$(board[index + k][i - k]).children[0] ? _$(board[index + k][i - k]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let upLeftSidePossibleMove = board[index - m] ? board[index - m][m + i] ? _$(board[index - m][m + i]).children[0] ? _$(board[index - m][m + i]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let upRightSidePossibleMove = board[index - n] ? board[index - n][i - n] ? _$(board[index - n][i - n]).children[0] ? _$(board[index - n][i - n]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";


                        if (downLeftSidePossibleMove != "") {
                            if (downLeftSidePossibleMove == "White") {
                                j = board[index].length;
                            }
                            if (downLeftSidePossibleMove == null) {
                                _$(board[index + j][j + i]).style.backgroundColor = "#90EE90";
                                _$(board[index + j][j + i]).style.border = "1px solid #013220";
                                _$(board[index + j][j + i]).style.borderRadius = "5px";
                                possibleMoves.push(board[index + j][j + i]);
                            }
                            if (downLeftSidePossibleMove == "Black") {
                                _$(board[index + j][j + i]).style.backgroundColor = "#90EE90";
                                _$(board[index + j][j + i]).style.border = "1px solid #013220";
                                _$(board[index + j][j + i]).style.borderRadius = "5px";
                                possibleMoves.push(board[index + j][j + i]);
                                j = board[index].length;
                            }
                            j < board[index].length ? j++ : j;
                        }

                        if (downLeftSidePossibleMove == "") {
                            j = board[index].length;
                        }

                        if (downRightSidePossibleMove != "") {
                            if (downRightSidePossibleMove == "White") {
                                k = board[index].length;
                            }
                            if (downRightSidePossibleMove == null) {
                                _$(board[index + k][i - k]).style.backgroundColor = "#90EE90";
                                _$(board[index + k][i - k]).style.border = "1px solid #013220";
                                _$(board[index + k][i - k]).style.borderRadius = "5px";
                                possibleMoves.push(board[index + k][i - k]);
                            }
                            if (downRightSidePossibleMove == "Black") {
                                _$(board[index + k][i - k]).style.backgroundColor = "#90EE90";
                                _$(board[index + k][i - k]).style.border = "1px solid #013220";
                                _$(board[index + k][i - k]).style.borderRadius = "5px";
                                possibleMoves.push(board[index + k][i - k]);
                                k = board[index].length;
                            }
                            k < board[index].length ? k++ : k;
                        }

                        if (downRightSidePossibleMove == "") {
                            k = board[index].length;
                        }

                        if (upLeftSidePossibleMove != "") {
                            if (upLeftSidePossibleMove == "White") {
                                m = board[index].length;
                            }
                            if (upLeftSidePossibleMove == null) {
                                _$(board[index - m][m + i]).style.backgroundColor = "#90EE90";
                                _$(board[index - m][m + i]).style.border = "1px solid #013220";
                                _$(board[index - m][m + i]).style.borderRadius = "5px";
                                possibleMoves.push(board[index - m][m + i]);
                            }
                            if (upLeftSidePossibleMove == "Black") {
                                _$(board[index - m][m + i]).style.backgroundColor = "#90EE90";
                                _$(board[index - m][m + i]).style.border = "1px solid #013220";
                                _$(board[index - m][m + i]).style.borderRadius = "5px";
                                possibleMoves.push(board[index - m][m + i]);
                                m = board[index].length;
                            }
                            m < board[index].length ? m++ : m;
                        }

                        if (upLeftSidePossibleMove == "") {
                            m = board[index].length;
                        }

                        if (upRightSidePossibleMove != "") {
                            if (upRightSidePossibleMove == "White") {
                                n = board[index].length;
                            }
                            if (upRightSidePossibleMove == null) {
                                _$(board[index - n][i - n]).style.backgroundColor = "#90EE90";
                                _$(board[index - n][i - n]).style.border = "1px solid #013220";
                                _$(board[index - n][i - n]).style.borderRadius = "5px";
                                possibleMoves.push(board[index - n][i - n]);
                            }
                            if (upRightSidePossibleMove == "Black") {
                                _$(board[index - n][i - n]).style.backgroundColor = "#90EE90";
                                _$(board[index - n][i - n]).style.border = "1px solid #013220";
                                _$(board[index - n][i - n]).style.borderRadius = "5px";
                                possibleMoves.push(board[index - n][i - n]);
                                n = board[index].length;
                            }
                            n < board[index].length ? n++ : n;
                        }

                        if (upRightSidePossibleMove == "") {
                            n = board[index].length;
                        }
                    }
                }
            }
        }
    }
}

function possibleMovesForQueens(e) {
    let pieceType = _$(e.id).children[0].getAttribute("src").replace("./images/", "").replace(".png", "");

    let id = parseInt(e.id);
    let num = 1;

    loop1:
    for (let index = 0; index < board.length; index++) {
        loop2:
        for (let i = 0; i < board[index].length; i++) {
            if (board[index][i] == id) {
                if (pieceType == "Black_queen" && turn == "Black") {
                    loop3:
                    for (let j = 1, k = 1, m = 1, n = 1, l = 1, p = 1, q = 1, r = 1; ((j < board[index].length) || (k < board[index].length) || (m < board[index].length) || (n < board[index].length) || (l < board[index].length) || (p < board[index].length) || (q < board[index].length) || (r < board[index].length));) {
                        let leftSidePossibleMove = board[index] ? board[index][i - j] ? _$(board[index][i - j]).children[0] ? _$(board[index][i - j]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let rightSidePossibleMove = board[index] ? board[index][i + k] ? _$(board[index][i + k]).children[0] ? _$(board[index][i + k]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let downSidePossibleMove = board[index + m] ? board[index + m][i] ? _$(board[index + m][i]).children[0] ? _$(board[index + m][i]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let upSidePossibleMove = board[index - n] ? board[index - n][i] ? _$(board[index - n][i]).children[0] ? _$(board[index - n][i]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let downLeftSidePossibleMove = board[index + l] ? board[index + l][l + i] ? _$(board[index + l][l + i]).children[0] ? _$(board[index + l][l + i]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let downRightSidePossibleMove = board[index + p] ? board[index + p][i - p] ? _$(board[index + p][i - p]).children[0] ? _$(board[index + p][i - p]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let upLeftSidePossibleMove = board[index - q] ? board[index - q][q + i] ? _$(board[index - q][q + i]).children[0] ? _$(board[index - q][q + i]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let upRightSidePossibleMove = board[index - r] ? board[index - r][i - r] ? _$(board[index - r][i - r]).children[0] ? _$(board[index - r][i - r]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";


                        if (leftSidePossibleMove != "") {
                            if (leftSidePossibleMove == "Black") {
                                j = board[index].length;
                            }
                            if (leftSidePossibleMove == null) {
                                _$(board[index][i - j]).style.backgroundColor = "#90EE90";
                                _$(board[index][i - j]).style.border = "1px solid #013220";
                                _$(board[index][i - j]).style.borderRadius = "5px";
                                possibleMoves.push(board[index][i - j]);
                            }
                            if (leftSidePossibleMove == "White") {
                                _$(board[index][i - j]).style.backgroundColor = "#90EE90";
                                _$(board[index][i - j]).style.border = "1px solid #013220";
                                _$(board[index][i - j]).style.borderRadius = "5px";
                                possibleMoves.push(board[index][i - j]);
                                j = board[index].length;
                            }
                            j < board[index].length ? j++ : j;
                        }

                        if (leftSidePossibleMove == "") {
                            j = board[index].length;
                        }

                        if (rightSidePossibleMove != "") {
                            if (rightSidePossibleMove == "Black") {
                                k = board[index].length;
                            }
                            if (rightSidePossibleMove == null) {
                                _$(board[index][i + k]).style.backgroundColor = "#90EE90";
                                _$(board[index][i + k]).style.border = "1px solid #013220";
                                _$(board[index][i + k]).style.borderRadius = "5px";
                                possibleMoves.push(board[index][i + k]);
                            }
                            if (rightSidePossibleMove == "White") {
                                _$(board[index][i + k]).style.backgroundColor = "#90EE90";
                                _$(board[index][i + k]).style.border = "1px solid #013220";
                                _$(board[index][i + k]).style.borderRadius = "5px";
                                possibleMoves.push(board[index][i + k]);
                                k = board[index].length;

                            }
                            k < board[index].length ? k++ : k;
                        }

                        if (rightSidePossibleMove == "") {
                            k = board[index].length;
                        }

                        if (downSidePossibleMove != "") {
                            if (downSidePossibleMove == "Black") {
                                m = board[index].length;
                            }
                            if (downSidePossibleMove == null) {
                                _$(board[index + m][i]).style.backgroundColor = "#90EE90";
                                _$(board[index + m][i]).style.border = "1px solid #013220";
                                _$(board[index + m][i]).style.borderRadius = "5px";
                                possibleMoves.push(board[index + m][i]);
                            }
                            if (downSidePossibleMove == "White") {
                                _$(board[index + m][i]).style.backgroundColor = "#90EE90";
                                _$(board[index + m][i]).style.border = "1px solid #013220";
                                _$(board[index + m][i]).style.borderRadius = "5px";
                                possibleMoves.push(board[index + m][i]);
                                m = board[index].length;
                            }
                            m < board[index].length ? m++ : m;
                        }

                        if (downSidePossibleMove == "") {
                            m = board[index].length;
                        }

                        if (upSidePossibleMove != "") {
                            if (upSidePossibleMove == "Black") {
                                n = board[index].length;
                            }
                            if (upSidePossibleMove == null) {
                                _$(board[index - n][i]).style.backgroundColor = "#90EE90";
                                _$(board[index - n][i]).style.border = "1px solid #013220";
                                _$(board[index - n][i]).style.borderRadius = "5px";
                                possibleMoves.push(board[index - n][i]);
                            }
                            if (upSidePossibleMove == "White") {
                                _$(board[index - n][i]).style.backgroundColor = "#90EE90";
                                _$(board[index - n][i]).style.border = "1px solid #013220";
                                _$(board[index - n][i]).style.borderRadius = "5px";
                                possibleMoves.push(board[index - n][i]);
                                n = board[index].length;
                            }
                            n < board[index].length ? n++ : n;
                        }

                        if (upSidePossibleMove == "") {
                            n = board[index].length;
                        }

                        if (downLeftSidePossibleMove != "") {
                            if (downLeftSidePossibleMove == "Black") {
                                l = board[index].length;
                            }
                            if (downLeftSidePossibleMove == null) {
                                _$(board[index + l][l + i]).style.backgroundColor = "#90EE90";
                                _$(board[index + l][l + i]).style.border = "1px solid #013220";
                                _$(board[index + l][l + i]).style.borderRadius = "5px";
                                possibleMoves.push(board[index + l][l + i]);
                            }
                            if (downLeftSidePossibleMove == "White") {
                                _$(board[index + l][l + i]).style.backgroundColor = "#90EE90";
                                _$(board[index + l][l + i]).style.border = "1px solid #013220";
                                _$(board[index + l][l + i]).style.borderRadius = "5px";
                                possibleMoves.push(board[index + l][l + i]);
                                l = board[index].length;
                            }
                            l < board[index].length ? l++ : l;
                        }

                        if (downLeftSidePossibleMove == "") {
                            l = board[index].length;
                        }

                        if (downRightSidePossibleMove != "") {
                            if (downRightSidePossibleMove == "Black") {
                                p = board[index].length;
                            }
                            if (downRightSidePossibleMove == null) {
                                _$(board[index + p][i - p]).style.backgroundColor = "#90EE90";
                                _$(board[index + p][i - p]).style.border = "1px solid #013220";
                                _$(board[index + p][i - p]).style.borderRadius = "5px";
                                possibleMoves.push(board[index + p][i - p]);
                            }
                            if (downRightSidePossibleMove == "White") {
                                _$(board[index + p][i - p]).style.backgroundColor = "#90EE90";
                                _$(board[index + p][i - p]).style.border = "1px solid #013220";
                                _$(board[index + p][i - p]).style.borderRadius = "5px";
                                possibleMoves.push(board[index + p][i - p]);
                                p = board[index].length;
                            }
                            p < board[index].length ? p++ : p;
                        }

                        if (downRightSidePossibleMove == "") {
                            p = board[index].length;
                        }

                        if (upLeftSidePossibleMove != "") {
                            if (upLeftSidePossibleMove == "Black") {
                                q = board[index].length;
                            }
                            if (upLeftSidePossibleMove == null) {
                                _$(board[index - q][q + i]).style.backgroundColor = "#90EE90";
                                _$(board[index - q][q + i]).style.border = "1px solid #013220";
                                _$(board[index - q][q + i]).style.borderRadius = "5px";
                                possibleMoves.push(board[index - q][q + i]);
                            }
                            if (upLeftSidePossibleMove == "White") {
                                q = board[index].length;
                            }
                            q < board[index].length ? q++ : q;
                        }

                        if (upLeftSidePossibleMove == "") {
                            q = board[index].length;
                        }

                        if (upRightSidePossibleMove != "") {
                            if (upRightSidePossibleMove == "Black") {
                                r = board[index].length;
                            }
                            if (upRightSidePossibleMove == null) {
                                _$(board[index - r][i - r]).style.backgroundColor = "#90EE90";
                                _$(board[index - r][i - r]).style.border = "1px solid #013220";
                                _$(board[index - r][i - r]).style.borderRadius = "5px";
                                possibleMoves.push(board[index - r][i - r]);
                            }
                            if (upRightSidePossibleMove == "White") {
                                r = board[index].length;
                            }
                            r < board[index].length ? r++ : r;
                        }

                        if (upRightSidePossibleMove == "") {
                            r = board[index].length;
                        }
                    }
                }
                else if (pieceType == "White_queen" && turn == "White") {
                    loop3:
                    for (let j = 1, k = 1, m = 1, n = 1, l = 1, p = 1, q = 1, r = 1; ((j < board[index].length) || (k < board[index].length) || (m < board[index].length) || (n < board[index].length) || (l < board[index].length) || (p < board[index].length) || (q < board[index].length) || (r < board[index].length));) {
                        let leftSidePossibleMove = board[index] ? board[index][i - j] ? _$(board[index][i - j]).children[0] ? _$(board[index][i - j]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let rightSidePossibleMove = board[index] ? board[index][i + k] ? _$(board[index][i + k]).children[0] ? _$(board[index][i + k]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let downSidePossibleMove = board[index + m] ? board[index + m][i] ? _$(board[index + m][i]).children[0] ? _$(board[index + m][i]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let upSidePossibleMove = board[index - n] ? board[index - n][i] ? _$(board[index - n][i]).children[0] ? _$(board[index - n][i]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let downLeftSidePossibleMove = board[index + l] ? board[index + l][l + i] ? _$(board[index + l][l + i]).children[0] ? _$(board[index + l][l + i]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let downRightSidePossibleMove = board[index + p] ? board[index + p][i - p] ? _$(board[index + p][i - p]).children[0] ? _$(board[index + p][i - p]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let upLeftSidePossibleMove = board[index - q] ? board[index - q][q + i] ? _$(board[index - q][q + i]).children[0] ? _$(board[index - q][q + i]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                        let upRightSidePossibleMove = board[index - r] ? board[index - r][i - r] ? _$(board[index - r][i - r]).children[0] ? _$(board[index - r][i - r]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";


                        if (leftSidePossibleMove != "") {
                            if (leftSidePossibleMove == "White") {
                                j = board[index].length;
                            }
                            if (leftSidePossibleMove == null) {
                                _$(board[index][i - j]).style.backgroundColor = "#90EE90";
                                _$(board[index][i - j]).style.border = "1px solid #013220";
                                _$(board[index][i - j]).style.borderRadius = "5px";
                                possibleMoves.push(board[index][i - j]);
                            }
                            if (leftSidePossibleMove == "Black") {
                                _$(board[index][i - j]).style.backgroundColor = "#90EE90";
                                _$(board[index][i - j]).style.border = "1px solid #013220";
                                _$(board[index][i - j]).style.borderRadius = "5px";
                                possibleMoves.push(board[index][i - j]);
                                j = board[index].length;
                            }
                            j < board[index].length ? j++ : j;
                        }

                        if (leftSidePossibleMove == "") {
                            j = board[index].length;
                        }

                        if (rightSidePossibleMove != "") {
                            if (rightSidePossibleMove == "White") {
                                k = board[index].length;
                            }
                            if (rightSidePossibleMove == null) {
                                _$(board[index][i + k]).style.backgroundColor = "#90EE90";
                                _$(board[index][i + k]).style.border = "1px solid #013220";
                                _$(board[index][i + k]).style.borderRadius = "5px";
                                possibleMoves.push(board[index][i + k]);
                            }
                            if (rightSidePossibleMove == "Black") {
                                _$(board[index][i + k]).style.backgroundColor = "#90EE90";
                                _$(board[index][i + k]).style.border = "1px solid #013220";
                                _$(board[index][i + k]).style.borderRadius = "5px";
                                possibleMoves.push(board[index][i + k]);
                                k = board[index].length;

                            }
                            k < board[index].length ? k++ : k;
                        }

                        if (rightSidePossibleMove == "") {
                            k = board[index].length;
                        }

                        if (downSidePossibleMove != "") {
                            if (downSidePossibleMove == "White") {
                                m = board[index].length;
                            }
                            if (downSidePossibleMove == null) {
                                _$(board[index + m][i]).style.backgroundColor = "#90EE90";
                                _$(board[index + m][i]).style.border = "1px solid #013220";
                                _$(board[index + m][i]).style.borderRadius = "5px";
                                possibleMoves.push(board[index + m][i]);
                            }
                            if (downSidePossibleMove == "Black") {
                                _$(board[index + m][i]).style.backgroundColor = "#90EE90";
                                _$(board[index + m][i]).style.border = "1px solid #013220";
                                _$(board[index + m][i]).style.borderRadius = "5px";
                                possibleMoves.push(board[index + m][i]);
                                m = board[index].length;
                            }
                            m < board[index].length ? m++ : m;
                        }

                        if (downSidePossibleMove == "") {
                            m = board[index].length;
                        }

                        if (upSidePossibleMove != "") {
                            if (upSidePossibleMove == "White") {
                                n = board[index].length;
                            }
                            if (upSidePossibleMove == null) {
                                _$(board[index - n][i]).style.backgroundColor = "#90EE90";
                                _$(board[index - n][i]).style.border = "1px solid #013220";
                                _$(board[index - n][i]).style.borderRadius = "5px";
                                possibleMoves.push(board[index - n][i]);
                            }
                            if (upSidePossibleMove == "Black") {
                                _$(board[index - n][i]).style.backgroundColor = "#90EE90";
                                _$(board[index - n][i]).style.border = "1px solid #013220";
                                _$(board[index - n][i]).style.borderRadius = "5px";
                                possibleMoves.push(board[index - n][i]);
                                n = board[index].length;
                            }
                            n < board[index].length ? n++ : n;
                        }

                        if (upSidePossibleMove == "") {
                            n = board[index].length;
                        }

                        if (downLeftSidePossibleMove != "") {
                            if (downLeftSidePossibleMove == "White") {
                                l = board[index].length;
                            }
                            if (downLeftSidePossibleMove == null) {
                                _$(board[index + l][l + i]).style.backgroundColor = "#90EE90";
                                _$(board[index + l][l + i]).style.border = "1px solid #013220";
                                _$(board[index + l][l + i]).style.borderRadius = "5px";
                                possibleMoves.push(board[index + l][l + i]);
                            }
                            if (downLeftSidePossibleMove == "Black") {
                                _$(board[index + l][l + i]).style.backgroundColor = "#90EE90";
                                _$(board[index + l][l + i]).style.border = "1px solid #013220";
                                _$(board[index + l][l + i]).style.borderRadius = "5px";
                                possibleMoves.push(board[index + l][l + i]);
                                l = board[index].length;
                            }
                            l < board[index].length ? l++ : l;
                        }

                        if (downLeftSidePossibleMove == "") {
                            l = board[index].length;
                        }

                        if (downRightSidePossibleMove != "") {
                            if (downRightSidePossibleMove == "White") {
                                p = board[index].length;
                            }
                            if (downRightSidePossibleMove == null) {
                                _$(board[index + p][i - p]).style.backgroundColor = "#90EE90";
                                _$(board[index + p][i - p]).style.border = "1px solid #013220";
                                _$(board[index + p][i - p]).style.borderRadius = "5px";
                                possibleMoves.push(board[index + p][i - p]);
                            }
                            if (downRightSidePossibleMove == "Black") {
                                _$(board[index + p][i - p]).style.backgroundColor = "#90EE90";
                                _$(board[index + p][i - p]).style.border = "1px solid #013220";
                                _$(board[index + p][i - p]).style.borderRadius = "5px";
                                possibleMoves.push(board[index + p][i - p]);
                                p = board[index].length;
                            }
                            p < board[index].length ? p++ : p;
                        }

                        if (downRightSidePossibleMove == "") {
                            p = board[index].length;
                        }

                        if (upLeftSidePossibleMove != "") {
                            if (upLeftSidePossibleMove == "White") {
                                q = board[index].length;
                            }
                            if (upLeftSidePossibleMove == null) {
                                _$(board[index - q][q + i]).style.backgroundColor = "#90EE90";
                                _$(board[index - q][q + i]).style.border = "1px solid #013220";
                                _$(board[index - q][q + i]).style.borderRadius = "5px";
                                possibleMoves.push(board[index - q][q + i]);
                            }
                            if (upLeftSidePossibleMove == "Black") {
                                q = board[index].length;
                            }
                            q < board[index].length ? q++ : q;
                        }

                        if (upLeftSidePossibleMove == "") {
                            q = board[index].length;
                        }

                        if (upRightSidePossibleMove != "") {
                            if (upRightSidePossibleMove == "White") {
                                r = board[index].length;
                            }
                            if (upRightSidePossibleMove == null) {
                                _$(board[index - r][i - r]).style.backgroundColor = "#90EE90";
                                _$(board[index - r][i - r]).style.border = "1px solid #013220";
                                _$(board[index - r][i - r]).style.borderRadius = "5px";
                                possibleMoves.push(board[index - r][i - r]);
                            }
                            if (upRightSidePossibleMove == "Black") {
                                r = board[index].length;
                            }
                            r < board[index].length ? r++ : r;
                        }

                        if (upRightSidePossibleMove == "") {
                            r = board[index].length;
                        }
                    }
                }
            }
        }
    }
}

function possibleMovesForKings(e) {
    let pieceType = _$(e.id).children[0].getAttribute("src").replace("./images/", "").replace(".png", "");

    let id = parseInt(e.id);

    loop1:
    for (let index = 0; index < board.length; index++) {
        loop2:
        for (let i = 0; i < board[index].length; i++) {
            if (board[index][i] == id) {
                let firstPossibleDeath = board[index - 1] ? board[index - 1][i - 1] ? _$(board[index - 1][i - 1]).children[0] ? _$(board[index - 1][i - 1]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let secondPossibleDeath = board[index - 1] ? board[index - 1][i] ? _$(board[index - 1][i]).children[0] ? _$(board[index - 1][i]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let thirdPossibleDeath = board[index - 1] ? board[index - 1][i + 1] ? _$(board[index - 1][i + 1]).children[0] ? _$(board[index - 1][i + 1]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let fourthPossibleDeath = board[index] ? board[index][i - 1] ? _$(board[index][i - 1]).children[0] ? _$(board[index][i - 1]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let fifthPossibleDeath = board[index] ? board[index][i + 1] ? _$(board[index][i + 1]).children[0] ? _$(board[index][i + 1]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let sixthPossibleDeath = board[index + 1] ? board[index + 1][i - 1] ? _$(board[index + 1][i - 1]).children[0] ? _$(board[index + 1][i - 1]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let seventhPossibleDeath = board[index + 1] ? board[index + 1][i] ? _$(board[index + 1][i]).children[0] ? _$(board[index + 1][i]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";
                let eighthPossibleDeath = board[index + 1] ? board[index + 1][i + 1] ? _$(board[index + 1][i + 1]).children[0] ? _$(board[index + 1][i + 1]).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : null : "" : "";

                if (pieceType == "Black_king" && turn == "Black") {
                    if (firstPossibleDeath == null || firstPossibleDeath == "White" ) {
                        _$(board[index - 1][i - 1]).style.backgroundColor = "#90EE90";
                        _$(board[index - 1][i - 1]).style.border = "1px solid #013220";
                        _$(board[index - 1][i - 1]).style.borderRadius = "5px";
                        possibleMoves.push(board[index - 1][i - 1]);
                    }
                    if (secondPossibleDeath == null || secondPossibleDeath == "White" ) {
                        _$(board[index - 1][i]).style.backgroundColor = "#90EE90";
                        _$(board[index - 1][i]).style.border = "1px solid #013220";
                        _$(board[index - 1][i]).style.borderRadius = "5px";
                        possibleMoves.push(board[index - 1][i]);
                    }
                    if (thirdPossibleDeath == null || thirdPossibleDeath == "White" ) {
                        _$(board[index - 1][i + 1]).style.backgroundColor = "#90EE90";
                        _$(board[index - 1][i + 1]).style.border = "1px solid #013220";
                        _$(board[index - 1][i + 1]).style.borderRadius = "5px";
                        possibleMoves.push(board[index - 1][i + 1]);
                    }
                    if (fourthPossibleDeath == null || fourthPossibleDeath == "White" ) {
                        _$(board[index][i - 1]).style.backgroundColor = "#90EE90";
                        _$(board[index][i - 1]).style.border = "1px solid #013220";
                        _$(board[index][i - 1]).style.borderRadius = "5px";
                        possibleMoves.push(board[index][i - 1]);
                    }
                    if (fifthPossibleDeath == null || fifthPossibleDeath == "White" ) {
                        _$(board[index][i + 1]).style.backgroundColor = "#90EE90";
                        _$(board[index][i + 1]).style.border = "1px solid #013220";
                        _$(board[index][i + 1]).style.borderRadius = "5px";
                        possibleMoves.push(board[index][i + 1]);
                    }
                    if (sixthPossibleDeath == null || sixthPossibleDeath == "White" ) {
                        _$(board[index + 1][i - 1]).style.backgroundColor = "#90EE90";
                        _$(board[index + 1][i - 1]).style.border = "1px solid #013220";
                        _$(board[index + 1][i - 1]).style.borderRadius = "5px";
                        possibleMoves.push(board[index + 1][i - 1]);
                    }
                    if (seventhPossibleDeath == null || seventhPossibleDeath == "White" ) {
                        _$(board[index + 1][i]).style.backgroundColor = "#90EE90";
                        _$(board[index + 1][i]).style.border = "1px solid #013220";
                        _$(board[index + 1][i]).style.borderRadius = "5px";
                        possibleMoves.push(board[index + 1][i]);
                    }
                    if (eighthPossibleDeath == null || eighthPossibleDeath == "White" ) {
                        _$(board[index + 1][i + 1]).style.backgroundColor = "#90EE90";
                        _$(board[index + 1][i + 1]).style.border = "1px solid #013220";
                        _$(board[index + 1][i + 1]).style.borderRadius = "5px";
                        possibleMoves.push(board[index + 1][i + 1]);
                    }

                    break loop1;
                }
                else if (pieceType == "White_king" && turn == "White") {
                    if (firstPossibleDeath == null || firstPossibleDeath == "Black") {
                        _$(board[index - 1][i - 1]).style.backgroundColor = "#90EE90";
                        _$(board[index - 1][i - 1]).style.border = "1px solid #013220";
                        _$(board[index - 1][i - 1]).style.borderRadius = "5px";
                        possibleMoves.push(board[index - 1][i - 1]);
                    }
                    if (secondPossibleDeath == null || secondPossibleDeath == "Black") {
                        _$(board[index - 1][i]).style.backgroundColor = "#90EE90";
                        _$(board[index - 1][i]).style.border = "1px solid #013220";
                        _$(board[index - 1][i]).style.borderRadius = "5px";
                        possibleMoves.push(board[index - 1][i]);
                    }
                    if (thirdPossibleDeath == null || thirdPossibleDeath == "Black") {
                        _$(board[index - 1][i + 1]).style.backgroundColor = "#90EE90";
                        _$(board[index - 1][i + 1]).style.border = "1px solid #013220";
                        _$(board[index - 1][i + 1]).style.borderRadius = "5px";
                        possibleMoves.push(board[index - 1][i + 1]);
                    }
                    if (fourthPossibleDeath == null || fourthPossibleDeath == "Black") {
                        _$(board[index][i - 1]).style.backgroundColor = "#90EE90";
                        _$(board[index][i - 1]).style.border = "1px solid #013220";
                        _$(board[index][i - 1]).style.borderRadius = "5px";
                        possibleMoves.push(board[index][i - 1]);
                    }
                    if (fifthPossibleDeath == null || fifthPossibleDeath == "Black") {
                        _$(board[index][i + 1]).style.backgroundColor = "#90EE90";
                        _$(board[index][i + 1]).style.border = "1px solid #013220";
                        _$(board[index][i + 1]).style.borderRadius = "5px";
                        possibleMoves.push(board[index][i + 1]);
                    }
                    if (sixthPossibleDeath == null || sixthPossibleDeath == "Black") {
                        _$(board[index + 1][i - 1]).style.backgroundColor = "#90EE90";
                        _$(board[index + 1][i - 1]).style.border = "1px solid #013220";
                        _$(board[index + 1][i - 1]).style.borderRadius = "5px";
                        possibleMoves.push(board[index + 1][i - 1]);
                    }
                    if (seventhPossibleDeath == null || seventhPossibleDeath == "Black") {
                        _$(board[index + 1][i]).style.backgroundColor = "#90EE90";
                        _$(board[index + 1][i]).style.border = "1px solid #013220";
                        _$(board[index + 1][i]).style.borderRadius = "5px";
                        possibleMoves.push(board[index + 1][i]);
                    }
                    if (eighthPossibleDeath == null || eighthPossibleDeath == "Black") {
                        _$(board[index + 1][i + 1]).style.backgroundColor = "#90EE90";
                        _$(board[index + 1][i + 1]).style.border = "1px solid #013220";
                        _$(board[index + 1][i + 1]).style.borderRadius = "5px";
                        possibleMoves.push(board[index + 1][i + 1]);
                    }
                    break loop1;
                }
            }
        }
    }
}

function selectPossibleMoves(e) {
    let pieceVrient = _$(e.id).children[0] ? _$(e.id).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : turn;
    if (selection != null) {
        let selectedPieceVrient = _$(selection).children[0] ? _$(selection).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("_soldier", "").replace("_king", "").replace("_queen", "").replace("_horse", "").replace("_camel", "").replace("_rook", "") : turn;
        if (pieceVrient != selectedPieceVrient) {
            let image = _$(selection).children[0].getAttribute("src");
            let pieceType = _$(e.id).children[0] ? _$(e.id).children[0].getAttribute("src").replace("./images/", "").replace(".png", "") : null;
            let piece = _$(e.id).children[0] ? _$(e.id).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("White_", "").replace("White_", "") : null

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

                declareWinner(pieceType);
            }
        }
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

    let piece = _$(e.id).children[0] ? _$(e.id).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("Black_", "").replace("White_", "") : null

    if (piece == "soldier") {
        selection = e.id;
        possibleMovesForSoldiers(e);
    }

    if (piece == "rook") {
        selection = e.id;
        possibleMovesForRooks(e);
    }

    if (piece == "horse") {
        selection = e.id;
        possibleMovesForHorses(e);
    }

    if (piece == "camel") {
        selection = e.id;
        possibleMovesForCamels(e);
    }

    if (piece == "queen") {
        selection = e.id;
        possibleMovesForQueens(e);
    }

    if (piece == "king") {
        selection = e.id;
        possibleMovesForKings(e);
    }

    if (pieceVrient != turn) {
        _$("toast-warning").style.visibility = "visible";
        _$("warningText").innerHTML = `Sorry ! It's <p class="text-green-500 text-xl">${turn} Team's</p> Turn..`
        setTimeout(() => {
            _$("toast-warning").style.visibility = "hidden";
        }, 2000);
    }
}

function place(e) {

    let image = _$(selection).children[0].getAttribute("src");
    let pieceType = _$(e.id).children[0] ? _$(e.id).children[0].getAttribute("src").replace("./images/", "").replace(".png", "") : null;
    let piece = _$(e.id).children[0] ? _$(e.id).children[0].getAttribute("src").replace("./images/", "").replace(".png", "").replace("Black_", "").replace("White_", "") : null

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

        declareWinner(pieceType);
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
        selectPossibleMoves(e);
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

    for (let index = 0; index < board.length; index++) {
        for (let j = 0; j < board[index].length; j++) {
            if (_$(board[index][j]).children[0])
                _$(board[index][j]).setAttribute("onclick", "selectPossibleMoves(this)");
            else
                _$(board[index][j]).setAttribute("onclick", "place(this)");
        }
    }

}

function resetGame() {
    window.location.reload();
}
