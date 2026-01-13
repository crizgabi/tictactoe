document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach(square => {
        square.addEventListener('click', handleClick);
    });

    document.getElementById("reset").addEventListener("click", resetGame);

     let status = document.getElementById("status");
    if (status) {
        status.textContent = "Vez do jogador " + symbolEmoji[symbols[playerTime]];
        status.className = "status";
    }
});

const symbolEmoji = {
    o: "\u{1FA77}",
    x: "\u{2B50}\uFE0F"
};

function handleClick(event) {

    let square = event.currentTarget;
    let position = square.id;
    let status = document.getElementById("status");

    if (board[position] !== '') {
        return;
    }

    let gameOver = handleMove(position);
    updateSquare(position);

    if (status) {

        if (gameOver === true) {
            status.textContent = "O jogo acabou — vencedor: " + symbolEmoji[board[position]];
            status.className = "status win";
            return;
        }

        let isDraw = board.every(item => item !== '');
        if (isDraw) {
            status.textContent = "Empate";
            status.className = "status draw";
            return;
        }

        status.textContent = "Vez do jogador " + symbolEmoji[symbols[playerTime]];;
        status.className = "status";
    }
}

function updateSquare(position) {
    let square = document.getElementById(position);
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`;
}

function resetGame() {

    board = ['', '', '', '', '', '', '', '', ''];
    playerTime = 0;
    gameOver = false;

    let squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.innerHTML = '';
    });

    let status = document.getElementById("status");
    if (status) {
        status.textContent = "Vez do jogador " + symbolEmoji[symbols[playerTime]];
        status.className = "status";
    }
}