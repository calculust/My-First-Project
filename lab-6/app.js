let cells = document.querySelectorAll('.row > div');
let moveIndex = 0;
let isActive = true;

for (i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

function cellClicked(event) {
    if (isActive) {
        // Paint
        if (event.target.textContent == '') {
            if (moveIndex % 2 == 0) {
                event.target.textContent = 'X';
                moveIndex++;
            } else {
                event.target.textContent = 'O';
                moveIndex++;
            }
        }

        // Logic Check
        if ((cells[0].textContent === 'X' && cells[1].textContent === 'X' && cells[2].textContent == 'X') || ((cells[0].textContent == 'O' && cells[1].textContent == 'O' && cells[2].textContent == 'O'))) {
            announceWinner(1);
        } else if ((cells[3].textContent == 'X' && cells[4].textContent == 'X' && cells[5].textContent == 'X') || ((cells[3].textContent == 'O' && cells[4].textContent == 'O' && cells[5].textContent == 'O'))) {
            announceWinner(1);
        } else if ((cells[6].textContent == 'X' && cells[7].textContent == 'X' && cells[8].textContent == 'X') || ((cells[6].textContent == 'O' && cells[7].textContent == 'O' && cells[8].textContent == 'O'))) {
            announceWinner(1);
        } else if ((cells[0].textContent == 'X' && cells[3].textContent == 'X' && cells[6].textContent == 'X') || ((cells[0].textContent == 'O' && cells[3].textContent == 'O' && cells[6].textContent == 'O'))) {
            announceWinner(1);
        } else if ((cells[1].textContent == 'X' && cells[4].textContent == 'X' && cells[7].textContent == 'X') || ((cells[1].textContent == 'O' && cells[4].textContent == 'O' && cells[7].textContent == 'O'))) {
            announceWinner(1);
        } else if ((cells[2].textContent == 'X' && cells[5].textContent == 'X' && cells[8].textContent == 'X') || ((cells[2].textContent == 'O' && cells[5].textContent == 'O' && cells[8].textContent == 'O'))) {
            announceWinner(1);
        } else if ((cells[0].textContent == 'X' && cells[4].textContent == 'X' && cells[8].textContent == 'X') || ((cells[0].textContent == 'O' && cells[4].textContent == 'O' && cells[8].textContent == 'O'))) {
            announceWinner(1);
        } else if ((cells[2].textContent == 'X' && cells[4].textContent == 'X' && cells[6].textContent == 'X') || ((cells[2].textContent == 'O' && cells[4].textContent == 'O' && cells[6].textContent == 'O'))) {
            announceWinner(1);
        } else if (moveIndex == 9) {
            announceWinner(0);
        }
    }
}

function announceWinner(win) {
    isActive = false;
    if (win) {
        if (moveIndex % 2 == 1) {
            document.getElementById('message').textContent = 'X Wins!';
        } else {
            document.getElementById('message').textContent = 'O Wins!';
        }
    } else {
        document.getElementById('message').textContent = 'Nobody wins.';
    }
    document.getElementById('announcement').style.display = 'block';
}

function playAgain() {
    moveIndex = 0;
    for (i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
    }
    document.getElementById('announcement').style.display = 'none';
    isActive = true;
}