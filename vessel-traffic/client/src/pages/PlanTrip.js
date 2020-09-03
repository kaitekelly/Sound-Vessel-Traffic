import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar/Navbar';
import FormCheck from 'react-bootstrap/FormCheck';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Calendar from 'react-calendar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ImageBackground from "../components/Images/Seattle-Boats2.JPG";
import API from "../utils/API";
import { List, ListItem } from "../components/List/List"
import { Link } from "react-router-dom";


function PlanTrip() {

    const [startDate, setStartDate] = useState(Date.now());
    const [endDate, setEndDate] = useState(Date.now());
    const [traffic, setTraffic] = useState([])

    function handleFormSubmit(event) {
        event.preventDefault()
        waveHello()
    }

    function waveHello() {
        console.log('👋');
    }

    useEffect(() => {
        loadTraffic()
    }, [])

    function loadTraffic() {
        API.getTraffic()
            .then(res => 
                {console.log(res)
                setTraffic(res.data)})
            .catch(err => console.log(err));
    };

    return (

        <div id="planTripPageStyle" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${ImageBackground})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: "100%",
            height: "1000px",
        }}>

            <Navbar />


            <Container style={{ backgroundColor: "white", padding: "50px", borderRadius: "25px", marginTop: "100px" }}>

                <h1 style={{ textAlign: "center" }}>Plan your trip here</h1>


                <Form >
                    <Form.Group controlId="formBasicEmail" >
                        <Form.Label>Start</Form.Label>
                        <Form.Control type="email" placeholder="Start location" style={{ borderRadius: "10px" }} />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>End</Form.Label>
                        <Form.Control type="password" placeholder="End location" style={{ borderRadius: "10px" }} />
                    </Form.Group>

                    <Container>
                        <br></br>
                        <Row>
                            <Col>
                                <i className="far fa-calendar-alt"></i>
                                <DatePicker
                                    className="datePicker"
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                    selectsStart
                                    startDate={startDate}
                                    endDate={endDate}
                                />
                            </Col>
                            <Col>
                                <i className="far fa-calendar-alt"></i>
                                <DatePicker
                                    className="datePicker"
                                    selected={endDate}
                                    onChange={date => setEndDate(date)}
                                    selectsEnd
                                    startDate={startDate}
                                    endDate={endDate}
                                    minDate={startDate}
                                />
                            </Col>
                        </Row>
                        <br></br>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Save Trip" />
                        </Form.Group>
                    </Container>


                    <Button onClick={handleFormSubmit} variant="primary" type="submit">
                        Submit
                </Button>
                </Form>

            </Container>

            <Container fluid id="resultsdiv" >
                <h1>Ships encountered</h1>
                {traffic.length ? (
                    <List>
                        {traffic.map(traffics => (
                            <ListItem key={traffics.ship_id}>
                                <Link to={"/plannedtrip/" + traffics.ship_id}>
                                    <strong>
                                        <ul>
                                        Ship Name: {traffics.ship_name}
                                        <br></br>
                                         Ship Type: {traffics.ship_type_name}
                                         <br></br>
                                         Flag: {traffics.flag}
                                         <br></br>
                                         Destination: {traffics.destination}
                                         <br></br>
                                         Eta: {traffics.eta}
                                         </ul>
                                    </strong>
                                </Link>
                                <br></br>
                                {/* <DeleteBtn onClick={() => deleteBook(traffics.ship_id)} /> */}
                            </ListItem>
                        ))}
                    </List>
                ) : (
                        <h3>No Results to Display</h3>
                    )}
            </Container>

        </div>
    )

}

export default PlanTrip;