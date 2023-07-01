// Tabuleiro inicial de exemplo
const seaBoard = [
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
];

/*
  Desenvolva seu código logo abaixo
*/
function allocateShips(shipPosicions, initialBoard) {
  for (let i = 0 ; i < shipPosicions.length; i++) {
    const position = shipPosicions[i];
    initialBoard[position[0]][position[1]] = "S"
  }
return initialBoard;
}

function checkGuesses(guesses, mountedSeaBoard){
 for (let i = 0; i < guesses.length; i++){
  const assumptions = guesses[i];
  if(mountedSeaBoard[assumptions[0]][assumptions[1]] === "S"){
mountedSeaBoard[assumptions[0]][assumptions[1]] = "X";
  }
 }
return mountedSeaBoard
}

function checkWinCondition(guessedSeaBoard){
for ( let i = 0; i < guessedSeaBoard.length; i++) {
  for (let j = 0; j < guessedSeaBoard[i].length; j++) {
   if (guessedSeaBoard[i][j] == "S"){
    return false;
   }
  }
}
return true;
}


