import React, { Component } from 'react';

import './Square.css'

class Square extends Component {

    handleClick = () => {
        this.props.handleClick(this.props.place);
    }

    render() {
        return (
            <td className={this.props.value} onClick={this.handleClick}></td>
        );
    }
}

export default Square;