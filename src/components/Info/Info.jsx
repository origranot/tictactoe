import React, { Component } from 'react';

import './Info.css';

class Info extends Component {
    render() {
        return (
            <div className="info">It's <b>{this.props.players[this.props.isFirstPlayerTurn ? 0 : 1]}</b> Turn!</div>
        );
    }
}

export default Info;