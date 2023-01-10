class TicTacToe {
    board: (string | null | any)[][];
    player: "X" | "O"
    constructor() {
        this.board = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.player = 'X';
    }

    play(row: number, col: number) {
        if (this.board[row][col] === null) {
            this.board[row][col] = this.player;
            this.player = this.player === 'X' ? 'O' : 'X';
        }
    }

    checkWin(): "X" | "O" | "DRAW" | null {
        // Check rows
        for (let i = 0; i < 3; i++) {
            if (this.board[i][0] === this.board[i][1] && this.board[i][1] === this.board[i][2] && this.board[i][0] !== null) {
                return this.board[i][0];
            }
        }

        // Check columns
        for (let i = 0; i < 3; i++) {
            if (this.board[0][i] === this.board[1][i] && this.board[1][i] === this.board[2][i] && this.board[0][i] !== null) {
                return this.board[0][i];
            }
        }

        // Check diagonals
        if (this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2] && this.board[0][0] !== null) {
            return this.board[0][0];
        }
        if (this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0] && this.board[0][2] !== null) {
            return this.board[0][2];
        }

        // Check for draw
        let isDraw = true;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.board[i][j] === null) {
                    isDraw = false;
                }
            }
        }
        if (isDraw) {
            return 'DRAW';
        }

        // Game is not over yet
        return null;
    }
}
