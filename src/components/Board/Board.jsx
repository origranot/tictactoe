import React, { Component } from 'react';
import './Board.css'
import Square from '../Square/Square'

class Board extends Component {

    state = {
        squareArray: new Array(this.props.size).fill(null).map(() => new Array(this.props.size).fill(null))
    }

    handleSquareClick = (row, col) => {
        if (!this.props.gameStarted || this.state.squareArray[row][col] != null || this.props.winner != null) {
            return;
        }

        let newSquareArray = [...this.state.squareArray];
        newSquareArray[row][col] = this.props.isFirstPlayerTurn ? 'xSign' : 'oSign';
        this.setState({ squareArray: newSquareArray });

        if (this.checkWinner()) {
            this.props.gameEnded('win');
        } else if (this.checkTie()) {
            this.props.gameEnded('tie');
        }

        this.props.handleClick(row, col);
    }

    initBoard = () => {
        this.setState({
            squareArray: new Array(this.props.size).fill(null).map(() => new Array(this.props.size).fill(null))
        });
    }

    checkTie = () => {
        for (let arr of this.state.squareArray) {
            if (arr.indexOf(null) !== -1) {
                return false;
            }
        }

        return true;
    }

    checkWinner = () => {
        let board = this.state.squareArray;

        // Rows
        for (let row = 0; row < this.props.size; row++) {
            let firstValue = board[row][0];
            for (let col = 1; col < this.props.size; col++) {
                if (firstValue == null || board[row][col] !== firstValue) {
                    break;
                }
                if (col === this.props.size - 1) {
                    return true;
                }
            }
        }

        // Cols
        for (let col = 0; col < this.props.size; col++) {
            let firstValue = board[0][col];
            for (let row = 1; row < this.props.size; row++) {
                if (firstValue == null || board[row][col] !== firstValue) {
                    break;
                }
                if (row === this.props.size - 1) {
                    return true;
                }
            }
        }

        // First slant
        let firstValue = board[0][0];
        for (let index = 0; index < this.props.size; index++) {
            if (firstValue == null || board[index][index] !== firstValue) {
                break;
            }
            if (index === this.props.size - 1) {
                return true;
            }
        }

        // Second slant
        firstValue = board[0][this.props.size - 1];
        for (let index = this.props.size - 1; index >= 0; index--) {
            if (firstValue == null || board[this.props.size - 1 - index][index] !== firstValue) {
                break;
            }
            if (index === 0) {
                return true;
            }
        }

        return false;
    }

    createTable = () => {
        let table = []

        // Outer loop to create parent
        for (let i = 0; i < this.props.size; i++) {
            let children = []
            //Inner loop to create children
            for (let j = 0; j < this.props.size; j++) {
                let currentPlace = j + (i * this.props.size);
                children.push(<Square key={currentPlace} place={currentPlace} value={this.state.squareArray[i][j]} handleClick={this.handleSquareClick} />)
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