import React, { Component } from 'react';
import './Board.css'

class Board extends Component {

    createTable = () => {
        let table = []

        // Outer loop to create parent
        for (let i = 0; i < this.props.rows; i++) {
            let children = []
            //Inner loop to create children
            for (let j = 0; j < this.props.cols; j++) {
                children.push(<td></td>)
            }
            //Create the parent and add the children
            table.push(<tr>{children}</tr>)
        }
        return table
    }

    render() {
        return (
            <table className="xoTable">
                {this.createTable()}
            </table>
        );
    }
}

export default Board;