/*----- constants -----*/

/*----- app's state (variables) -----*/
let turn = 'X';

let winner;
/*----- cached element references -----*/
const boardEl = document.querySelector('.board');
// console.log(boardEl);

const squareEl = document.querySelectorAll('sq ');
console.log(squareEl);

const msg = document.createElement("H3")

const msgHolder = document.getElementById('message')

msgHolder.appendChild(msg);

/*----- event listeners -----*/
// boardClick for the table will delegate to each square
boardEl.addEventListener('click', function (e) {
    e.target.innerText = turn;
    console.log(squareEl);
    switchTurn();
})
/*----- functions -----*/
function play() {
    turn = turn.innerText;
    nextMove();
}

function nextMove() {
    squareEl.innerText = turn;
    switchTurn();
}

function switchTurn() {
    msg.innerText = "";
    if (turn === 'X') {
        turn = 'O';
        msg.innerText = "O go now"
    } else {
        turn = 'X';
        msg.innerText = "X gon give it to ya";
    }
    getWinner();
}

function getWinner() {
    console.log(document.querySelector('#sq1').innerText);
    if (document.querySelector('#sq1').innerText === 'X' && document.querySelector('#sq2').innerText === 'X' && document.querySelector('#sq3').innerText === 'X') {
        alert(`"X", wins!`);
    } else if (document.querySelector('#sq4').innerText === 'X' && document.querySelector('#sq5').innerText === 'X' && document.querySelector('#sq6').innerText === 'X') {
        alert(`"X", wins!`);
    } else if (document.querySelector('#sq7').innerText === 'X' && document.querySelector('#sq8').innerText === 'X' && document.querySelector('#sq9').innerText === 'X') {
        alert(`"X", wins!`);
    } else if (document.querySelector('#sq1').innerText === 'X' && document.querySelector('#sq5').innerText === 'X' && document.querySelector('#sq9').innerText === 'X') {
        alert(`"X", wins!`);
    } else if (document.querySelector('#sq3').innerText === 'X' && document.querySelector('#sq5').innerText === 'X' && document.querySelector('#sq7').innerText === 'X') {
        alert(`"X", wins!`);
    } else if (document.querySelector('#sq1').innerText === 'X' && document.querySelector('#sq4').innerText === 'X' && document.querySelector('#sq7').innerText === 'X') {
        alert(`"X", wins!`);
    } else if (document.querySelector('#sq2').innerText === 'X' && document.querySelector('#sq5').innerText === 'X' && document.querySelector('#sq8').innerText === 'X') {
        alert(`"X", wins!`);
    } else if (document.querySelector('#sq3').innerText === 'X' && document.querySelector('#sq6').innerText === 'X' && document.querySelector('#sq9').innerText === 'X') {
        alert(`"X", wins!`);
    } else if (document.querySelector('#sq1').innerText === 'O' && document.querySelector('#sq2').innerText === 'O' && document.querySelector('#sq3').innerText === 'O') {
        alert(`"O", wins!`);
    } else if (document.querySelector('#sq4').innerText === 'O' && document.querySelector('#sq5').innerText === 'O' && document.querySelector('#sq6').innerText === 'O') {
        alert(`"O", wins!`);
    } else if (document.querySelector('#sq7').innerText === 'O' && document.querySelector('#sq8').innerText === 'O' && document.querySelector('#sq9').innerText === 'O') {
        alert(`"O", wins!`);
    } else if (document.querySelector('#sq1').innerText === 'O' && document.querySelector('#sq5').innerText === 'O' && document.querySelector('#sq7').innerText === 'O') {
        alert(`"O", wins!`);
    } else if (document.querySelector('#sq3').innerText === 'O' && document.querySelector('#sq5').innerText === 'O' && document.querySelector('#sq7').innerText === '0') {
        alert(`"O", wins!`);
    } else if (document.querySelector('#sq1').innerText === 'O' && document.querySelector('#sq4').innerText === 'O' && document.querySelector('#sq7').innerText === 'O') {
        alert(`"O", wins!`);
    } else if (document.querySelector('#sq2').innerText === 'O' && document.querySelector('#sq5').innerText === 'O' && document.querySelector('#sq8').innerText === 'O') {
        alert(`"O", wins!`);
    } else if (document.querySelector('#sq3').innerText === 'O' && document.querySelector('#sq6').innerText === 'O' && document.querySelector('#sq9').innerText === 'O') {
        alert(`"O", wins!`);
    }
}



play();