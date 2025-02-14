let turn = 'X'
let winner = null

// Function ends the game by disabling all cell buttons and change winner label accordingly
function gameOver(){
    let winnerLabel = document.getElementById(`winner-text`)
    if (winner != null) {
        winnerLabel.innerText = `${winner} wins`
    }
    else {
        winnerLabel.innerText = 'DRAW'
    }
    // Disable all cell buttons
    for (i = 1; i < 4; i++) {
        for (j = 1; j < 4; j++) {
            cell = document.getElementById(`cell-${j}${i}`)
            cell.disabled = true
            cell.classList.add("disabled")
        }
    }
}

// Function resets the game by emptying every cell and label and resetting global variables
function resetGame() {
    for (i = 1; i < 4; i++) {
        for (j = 1; j < 4; j++){
            let cell = document.getElementById(`cell-${j}${i}`)
            cell.disabled = false
            cell.innerText = ''
            cell.classList.remove("disabled") 
        }
    }
    document.getElementById(`winner-text`).innerText = ''
    turn = 'X'
    winner = null
}

// Function checks if the game is won by either player
function checkWin(buttonId){
    // Variables for clicked row and column
    let clickedCol = buttonId[6]
    let clickedRow = buttonId[5]

    // Returns true if all the columns of the clicked row is filled with the variable turn 
    if (document.getElementById(`cell-${clickedRow}1`).innerText == turn &&
        document.getElementById(`cell-${clickedRow}2`).innerText == turn &&
        document.getElementById(`cell-${clickedRow}3`).innerText == turn) {
        winner = turn
        return true
    }
    // Returns true if all the rows of the clicked column is filled with the variable turn 
    else if (document.getElementById(`cell-1${clickedCol}`).innerText == turn &&
            document.getElementById(`cell-2${clickedCol}`).innerText == turn &&
            document.getElementById(`cell-3${clickedCol}`).innerText == turn) {
                winner = turn
                return true
    }
    // Returns true if all the the cells in diagonals is filled with the variable turn 
    else if (document.getElementById(`cell-11`).innerText == turn &&
        document.getElementById(`cell-22`).innerText == turn &&
        document.getElementById(`cell-33`).innerText == turn) {
            winner = turn
            return true
    }
    else if (document.getElementById(`cell-13`).innerText == turn &&
        document.getElementById(`cell-22`).innerText == turn &&
        document.getElementById(`cell-31`).innerText == turn) {
            winner = turn
            return true
    }
    return false
}

// Function traverses all cells and returns true if every cell is filled returns false otherwise
function checkFullBoard() {
    for (i = 1; i < 4; i++) {
        for (j = 1; j < 4; j++){
            if (document.getElementById(`cell-${j}${i}`).innerText == '') {
                return false
            }
        }
    }
    return true
}

// Function handles switching players back and forth
function changePlayer() {
    if (turn == 'X') {
        turn = 'O' 
    }
    else {
        turn = 'X'
    }
    document.getElementById('player-turn').innerText = `${turn}'s turn`
}

// Function makes a move after player clicks a cell
function makeMove(buttonId){
    let cell = document.getElementById(buttonId)

    // Only executes of the clicked cell is empty
    if (cell.innerText == '') {
        // Places the X or O and then checks if game is won or a draw
        cell.innerText = turn
        if (checkWin(buttonId) || checkFullBoard()) {
            gameOver()
            return
        }
        changePlayer()
    }
}


