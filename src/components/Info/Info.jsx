import React, { Component } from 'react';
import './Info.css';
import { Button } from 'react-bootstrap';

class Info extends Component {

    render() {
        return (
            <div className="info">
                {this.props.winner !== null ?
                    <>
                        {this.props.winner === undefined ? 
                        <h1> It's a tie ...</h1>
                        :
                        <h1> {this.props.winner} is the Winner!</h1>}
                        <Button variant="info" type="submit" className="play-button" onClick={this.props.playAgain}>Again?</Button>
                    </> :
                    <span>It's <b>{this.props.players[this.props.isFirstPlayerTurn ? 0 : 1]}</b> Turn!</span>
                }

            </div>
        );
    }
}

export default Info;