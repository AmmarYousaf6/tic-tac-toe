# tic-tac-toe
Tic-tac-toe, also known as noughts and crosses or Xs and Os, is a simple game that can be implemented in JavaScript.

#How it works
TicTacToe class implements a basic Tic-tac-toe game, using a 2D array to represent the game board. The play method allows players to make a move by placing their symbol (either 'X' or 'O') on the board. The checkWin method is used to check if either player has won the game, or if the game has ended in a draw. It check the rows, columns and diagonals, if any of them are same return the winner symbol. In case all the cells are filled and none of the above condiiton met, it returns 'D.

To run the Tic-tac-toe program, you can create an instance of the TicTacToe class and then use the play method to make moves and the checkWin method to check if the game is over.

You can run this program by using any javascript runtime environment such as Node.js or even using javascript console of browser's developer tools.

Alternatively if you are developing a web application you can use event listeners to handle the clicks on the cells and update the UI as well as the game state.

Please note that the above example uses the prompt function to get input from the user, which might not be the best way to handle user input in a real-world program. In a web-based program, you would typically use form inputs and event listeners to handle user input.
