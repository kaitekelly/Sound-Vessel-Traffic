import React from "react";
import Navbar from '../components/Navbar/Navbar';
import FormCheck from 'react-bootstrap/FormCheck';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Calendar from 'react-calendar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


function PlanTrip() {
    return (

        <div>
            <Navbar />

            <h1>Plan your trip here</h1>

            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Start</Form.Label>
                    <Form.Control type="email" placeholder="Start location" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>End</Form.Label>
                    <Form.Control type="password" placeholder="End location" />
                </Form.Group>

                <Container>
                    <Row>
                        <Col>
                            <Calendar />
                        </Col>
                        <Col>
                            <Calendar />
                        </Col>
                    </Row>
                </Container>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Save Trip" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )

}

export default PlanTrip;