import React, { Component } from 'react';

import './StartForm.css';

import { Form, Row, Col, Button } from 'react-bootstrap';

class StartForm extends Component {

    handleClick = (event) => {
        event.preventDefault();

        let players = {
            firstPlayer: this.refs.firstPlayer.value,
            secondPlayer: this.refs.secondPlayer.value
        }

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
            </Form>
        );
    }
}

export default StartForm;