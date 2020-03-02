import React, { Component } from 'react';

import './StartForm.css';

import { Form, Row, Col, Button } from 'react-bootstrap';

class StartForm extends Component {
    render() {
        return (
            <Form>
                <Row>
                    <Col>
                        <Form.Control placeholder="First player" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Second player" />
                    </Col>
                </Row>
                <Row>
                    <Button variant="info" type="submit" className="play-button">Play!</Button>
                </Row>
            </Form>
        );
    }
}

export default StartForm;