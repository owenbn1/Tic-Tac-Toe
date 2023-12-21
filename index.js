//declaring variables
let restartBtn = document.getElementById('restart');
let gameAlert = document.getElementById('gameStatus');
let cells = document.querySelectorAll('.cell');
let currentPlayerTurn = document.getElementById('statusTurnText');

//winning conditions or different type of ways to win
const winConditions = [
 [0,1,2],
 [3,4,5],
 [6,7,8],
 [0,3,6],
 [1,4,7],
 [2,5,8],
 [0,4,8],
 [2,4,6]
];


//declaring variables for player and setting turn to 0
let player = 'X';
let turns = 0;


//made a function that checks the clicked cell event
function cellClick(event) {
    const clickedCell = event.target;
        //checks if the cell is empty and implement the current players into that cell
        if (clickedCell.innerHTML === '') {
        clickedCell.innerHTML = player;
        turns++;
    
        //if statement if won it alerts the winner 
        if (checkWinner()) {
        gameAlert.textContent= `Player ${player} won!`;
        currentPlayerTurn.innerText = '';    
        // else if it continues to 9 turns it will say its a tie
        }else if (turns === 9){
        gameAlert.textContent ='its a tie'
        currentPlayerTurn.innerText = '';
        //this basically switches the X and O
        //shows the current player turn
        } else {
        player = player === 'X' ? 'O' : 'X' ;
        currentPlayerTurn.innerText = `Player ${player}'s turn`;
        }
    }
}


// this functions checks the win condition and see if the player triggered any of it
function checkWinner(){
    for(const condition of winConditions){
        const [a,b,c] = condition;
        if(
        cells[a].innerHTML === player &&
        cells[b].innerHTML === player &&
        cells[c].innerHTML === player

        ) {
            return true;
        }
    }
       return false;   
}


//made an event listener for each cell
cells.forEach(cell => {
    cell.addEventListener('click',cellClick)
})

//restart button with an event listener that once clicked it resets the whole game and any stored values
restartBtn.addEventListener('click', function(){
    cells.forEach((cell) =>{
    cell.innerHTML= '';
    cell.addEventListener('click' ,cellClick)
    })
    player = 'X';
    turns = 0;
    currentPlayerTurn.innerText = `Player ${player}'s turn`;
    gameAlert.innerText = '';
})