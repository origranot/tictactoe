import React, { Component } from 'react';

import './StartForm.css';

import { Form, Row, Col, Button } from 'react-bootstrap';

class StartForm extends Component {

    state = {
        error: null
    }

    handleClick = async (event) => {
        event.preventDefault();

        await this.setState({
            error: null
        })

        let firstPlayer = this.refs.firstPlayer.value;
        let secondPlayer = this.refs.secondPlayer.value;

        if (firstPlayer.trim() === '' || secondPlayer.trim() === '') {
            await this.setState({
                error: 'PUT A NAME YOU SON OF A BITCH!'
            })
        }

        console.log(firstPlayer.length);

        if (this.state.error != null) {
            return;
        }

        let players = [this.refs.firstPlayer.value, this.refs.secondPlayer.value];
        this.props.handleStart(players);
    }

    render() {
        return (
            <Form>
                <Row>
                    <Col>
                        <Form.Control placeholder="First player" ref="firstPlayer" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Second player" ref="secondPlayer" />
                    </Col>
                </Row>
                <Row>
                    <Button variant="info" type="submit" className="play-button" onClick={this.handleClick}>Play!</Button>
                </Row>
                {this.state.error === null ? '' : <div className='err'>{this.state.error}</div>}
            </Form>
        );
    }
}

export default StartForm;