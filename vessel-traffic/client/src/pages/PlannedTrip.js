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

function PlannedTrip () {

    const [trip, setTrip] = useState([])

    useEffect(() => {
        loadTrips()
    }, [])

    function loadTrips() {
        API.getTrips()
            .then(res => 
                {console.log(res)
                setTrip(res.data)})
            .catch(err => console.log(err));
    };

    return (

<div>

        <Navbar />

        <h1>Planned Trips</h1>

        <Container fluid id="resultsdiv" style={{color: "white", textAlign: "center"}} >
                <h1 >Trip</h1>
                {trip.length ? (
                    <List>
                        {trip.map(trips => (
                            <ListItem key={trips.ship_id}>
                                <Link to={"/plannedtrip/" + trips.ship_id}>
                                    <strong>
                                        <ul>
                                        Start: {trips.start_destination}
                                        <br></br>
                                         End: {trips.end_destination}
                                         <br></br>
                                         Start Date: {trips.start_sail_date}
                                         <br></br>
                                         End Date: {trips.end_sail_date}
                                         <br></br>
                                         Eta: {trips.eta}
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

export default PlannedTrip