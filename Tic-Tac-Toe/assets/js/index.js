function _$(string) {
  return document.getElementById(string);
}

function _$class(string) {
  return document.getElementsByClassName(string);
}

function _$tag(string) {
  return document.getElementsByTagName(string);
}

function multiPlayer() {
  _$("choose_game").style.visibility = "hidden";
}

function singlePlayer() {
  _$("choose_game").style.visibility = "hidden";

}

var arr = [
  [],
  [],
  []
];

const win_comb = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8]
];

var p1 = [];
var p2 = [];



let id = 0;

for (let index = 0; index < arr.length; index++) {
  _$(
    "tiles"
  ).innerHTML += `<tr class=border-4 border-[#01eabb]" id="row${index}">
    `;
  for (let i = 0; i < arr.length; i++) {
    _$(`row${index}`).innerHTML += `
        <td class="border-4 border-[#01eabb] border-transperent bg-[#00d4bd] h-24 lg:h-24 md:h-24 sm:h-10  w-24 lg:w-24 md:w-24 sm:w-10 text-center text-6xl font-black text-[#fffcc9] tile" id="${id}" onclick="move(this)"></td>`;
    id++;
  }
  _$("tiles").innerHTML += `
    </tr>`;
}

var player1 = null;
var player2 = null;

function selectSign(e) {
  if (player1 == null) {
    player1 = e.value;
    _$("player1-text").innerText += ` = ${player1}`;
  } else if (player2 == null && player1 != e.value) {
    player2 = e.value;
    _$("player2-text").innerText += ` = ${player2}`;
  }
}



_$("toast-interactive").style.visibility = "hidden";

var turn = 0;

function move(e) {
  if (player1 == null && player2 == null || player1 == null && player2 != null) {
    _$("toast-warning").style.visibility = "visible";
    _$("selectSign").innerText = "Click a sign button for the select sign for the player 1";
    setTimeout(() => {
      _$("toast-warning").style.visibility = "hidden";
    }, 2000);
  }
  else if (player1 != null && player2 == null) {
    _$("toast-warning").style.visibility = "visible";
    _$("selectSign").innerText = "Click a sign button for the select sign for the player 2";
    setTimeout(() => {
      _$("toast-warning").style.visibility = "hidden";
    }, 2000);
  }
  else if (player1 != null && player2 != null) {
    if (turn % 2 == 0 && turn != 9) {
      e.innerHTML = player1
      chooseWinner(e);
      turn++;
      _$(e.id).style.pointerEvents = "none";
    }
    else if (turn % 2 != 0 && turn != 9) {
      e.innerHTML = player2
      chooseWinner(e);
      turn++;
      _$(e.id).style.pointerEvents = "none";
    }

  }
}

function isSubset(array1, array2) {
  let incCount = 0;

  for (let ele of array2) {

    if (array1.indexOf(ele) !== -1) {
      incCount++;
    }
  }
  return incCount >= 3 ? true : false;
}

let Winner = null;

function chooseWinner(e) {
  if (turn % 2 == 0 && e.innerHTML != null) {
    p1.push(parseInt(e.id));
  }
  else if (turn % 2 != 0 && e.innerHTML != null) {
    p2.push(parseInt(e.id));
  }

  for (let index = 0; index < win_comb.length; index++) {
    if (turn % 2 == 0) {
      if (isSubset(p1, win_comb[index]) == true) {
        Winner = player1;
        _$("toast-interactive").style.visibility = "visible";
        _$("winner_name").innerHTML = `Congratulations! <p class="text-blue-500 text-xl">Player 1 ${player1}</p> you win this match.....`;
      }
      else if (turn == 8 && Winner == null) {
        console.log(isSubset(p1, win_comb[index]));
        _$("toast-interactive").style.visibility = "visible";
        _$("winner_name").innerHTML = `Sorry! This match is <p class="text-blue-500 text-xl">Drawed</p> better luck for next game ..... `;
      }
    }
    else if (turn % 2 != 0) {
      if (isSubset(p2, win_comb[index]) == true) {
        Winner = player2;
        _$("toast-interactive").style.visibility = "visible";
        _$("winner_name").innerHTML = `Congratulations! <p class="text-blue-500 text-xl">Player 2 ${player2}</p> you win this match.....`;
      }
    }
  }
}

function resetGame() {
  window.location.reload();
}