import React, { Component } from 'react';
import './Board.css'

import Square from '../Square/Square'

class Board extends Component {

    state = {
        squareArray: Array(this.props.size ^ 2).fill(null)
    }

    handleSquareClick = (squarePlace) => {
        if (!this.props.gameStarted || this.state.squareArray[squarePlace] != null) {
            return;
        }

        let newSquareArray = [...this.state.squareArray];
        newSquareArray[squarePlace] = this.props.isFirstPlayerTurn ? 'xSign' : 'oSign';
        this.setState({ squareArray: newSquareArray });

        if (this.checkWinner()) {

        }

        this.props.handleClick(squarePlace);
    }

    checkWinner = () => {

        let hasWinner = false;

        for (let i = 0; i < this.props.size; i++) {
            for (let j = 0; j < this.props.size; j++) {
                
            }
        }
    }

    createTable = () => {
        let table = []

        // Outer loop to create parent
        for (let i = 0; i < this.props.size; i++) {
            let children = []
            //Inner loop to create children
            for (let j = 0; j < this.props.size; j++) {
                let currentPlace = j + (i * this.props.size);
                children.push(<Square key={currentPlace} place={currentPlace} value={this.state.squareArray[currentPlace]} handleClick={this.handleSquareClick} />)
            }
            //Create the parent and add the children
            table.push(<tr key={i}>{children}</tr>)
        }
        return table
    }

    render() {
        return (
            <table className="squaresTable">
                <tbody>
                    {this.createTable()}
                </tbody>
            </table>
        );
    }
}

export default Board;