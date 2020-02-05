/*----- constants -----*/
const WINNINGCOMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

/*----- app's state (variables) -----*/
let turn = 'X';

let winner;
/*----- cached element references -----*/
const boardEl = document.querySelector('.board');
console.log(boardEl);

const squareEl = document.querySelectorAll('.square');
console.log(squareEl);

const msg = document.createElement("H3")

const msgHolder = document.getElementById('message')

msgHolder.appendChild(msg);

/*----- event listeners -----*/
// boardClick for the table will delegate to each square
boardEl.addEventListener('click', function (e) {
    e.target.innerText = document.turn;
    switchTurn();
})
/*----- functions -----*/
function play() {
    document.turn = 'O';
    nextMove(squareEl);
}

function nextMove(squareEl) {
    squareEl.innerText = document.turn;
    switchTurn();
}

function switchTurn() {
    msg.innerText = "";
    if (document.turn === 'X') {
        document.turn = 'O';
        msg.innerText = "O go now"
    } else {
        document.turn = 'X';
        msg.innerText = "X gon give it to ya";
    }

    function render() {
        if (winner) {
            renderWinnerMessage();
        } else {
            renderTurnMessage();
        }
    }
}



play();