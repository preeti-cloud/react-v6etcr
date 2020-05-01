import React, { Component } from "react";
import { ReactDOM } from "react-dom";
import { Board } from "./Board";

class Game {

    constructor(props) {
        super(props);
        this.state = {
            xIsNext: true,
            stepNumber: 0,
            history: [
                { squares: Array(9).fill(null) }
            ]
        }
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        return (
            <div>
                <div className="game">
                    <div className="game-board">
                        <Board onClick={(i) => this.onClick(i)} squares={current.squares} />
                    </div>
                </div>
            </div>

        );
    }
}

export default Game;