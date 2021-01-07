import React, { Component } from 'react'
import Board from './Board';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            xIsNext: true,
            stepNumber: 0,
            ties: 0,
            playerx: 0,
            playero: 0,
            history: [
                { squares: Array(9).fill(null) }
            ],
        };
    }
    jumpTo(step){
        this.setState({
            stepNumber: step,
            xIsNext: (step%2) === 0
        })
    }
    /*handleWinner = (winner) => {
        if(winner === "X")
             this.setState({
                 playerx: this.state.playerx+1}
                 );
        else if(winner === "O")
             this.setState({playero: this.state.playero+1});
        else if(winner === 1)
             this.setState({
                 ties: this.state.ties+1
                })
    };*/
    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const winner = calculateWinner(squares);
        
        if(winner === "X")
             this.setState({
                 playerx: this.state.playerx + 1,
                });
        else if(winner === "O")
             this.setState({
                 playero: this.state.playero + 1,
                });
        else if(winner === 1)
             this.setState({
                 ties: this.state.ties + 1,
                })
        
        if (winner || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat({
                squares: squares
            }),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length,
        });

    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        const moves = history.map((step, move) => {
            const desc = move ? 'Mergi la #' + move : 'Incepe jocul!';
            return (
                <li key={move}>
                    <button onClick={() => { this.jumpTo(move) }}>
                        {desc}
                    </button>
                </li>
            )
        });
        let status;
        if (winner && winner !== 1) {
            status = 'Castigatorul este ' + winner + '!';
        } else if(!winner){
            status = 'Urmatorul jucator este ' + (this.state.xIsNext ? 'X' : 'O');
        }
        else {
            status = 'Egal!';
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board onClick={(i) => this.handleClick(i)}
                        squares={current.squares} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ul>{moves}</ul>
                </div>

            </div>
        )
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            return squares[a];
        }
    }
    let tie = 0;
    for(let i = 0; i < lines.length; i++){
        const [a, b, c] = lines[i];
        if(squares[a] && squares[b] && squares[c])
            tie = tie + 1;
    }
    if(tie === 8)
        return 1;
    else return null;
}

export default Game;