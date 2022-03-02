const player1 = document.querySelector('.player-1')
const player2 = document.querySelector('.player-2')
const select = document.querySelector('#select-level')
const btnPlayer1 = document.querySelector('.btn-player1')
const btnPlayer2 = document.querySelector('.btn-player2')
const btnReset = document.querySelector('.reset')

let firstPlayer = 0;
let secondPlayer = 0;
let gameLevel = 3;
let gameOver = false;

btnPlayer1.addEventListener( 'click', () => {
    if( !gameOver ){
        firstPlayer++;
        if( firstPlayer >= gameLevel ){
            gameOver = true;
            player1.style.color = 'blue'
            player2.style.color = 'red'
        }
    }
    player1.textContent = firstPlayer;
} )

btnPlayer2.addEventListener( 'click', () => {
    if( !gameOver ){
        secondPlayer++;
        if( secondPlayer >= gameLevel ){
            gameOver = true;
            player1.style.color = 'red'
            player2.style.color = 'blue'
        }
    }
    player2.textContent = secondPlayer;
} )

select.addEventListener('change', () => {
    gameLevel = +select.value
    reset()
})


btnReset.addEventListener('click', reset)

function reset() {
    firstPlayer = 0
    secondPlayer = 0
    gameOver = false
    player1.textContent = '0';
    player2.textContent = '0';
    player1.style.color = 'black';
    player2.style.color = 'black';
}