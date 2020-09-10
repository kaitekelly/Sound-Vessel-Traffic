import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar/Navbar';
import FormCheck from 'react-bootstrap/FormCheck';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Calendar from 'react-calendar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import InputGroup from 'react-bootstrap/InputGroup'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ImageBackground from "../components/Images/Seattle-Boats2.JPG";
import API from "../utils/API";
import { List, ListItem } from "../components/List/List"
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MarineTrafficMap from "../components/MarineTrafficMap/MarineTrafficMap"
import '../App.css';



function PlanTrip() {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [traffic, setTraffic] = useState([]);
    const [trip, setTrip] = useState([])


    const [searchTerm, setSearchTerm] = useState({
        startLocation: "",
        endLocation: "",
        // startingDate: new Date(),
        // endingDate: new Date()
    })

    const [tripDates, setTripDates] = useState({
        startingDate: new Date(),
        endingDate: new Date()
    })

    function handleFormSubmit(index) {
        console.log(index);
        waveHello();
        setTimeout(() => {
            console.log("saved")
        }, 4000);
        API.saveTrip({
            start_destination: searchTerm.startLocation,
            end_destination: searchTerm.endLocation,
            start_sail_date: tripDates.startingDate,
            end_sail_date: tripDates.endingDate
        })
        
        setSearchTerm("")
    }

    function toasty() {
        console.log("cheers to that")
        toast("Your trip has been saved", {
            position: toast.POSITION.TOP_CENTER
        });

    }



    const handleInputChange = (event, date) => {
        event.preventDefault();
        const value = event.target.value
        setSearchTerm({
            ...searchTerm, [event.target.name]: value
        });
        console.log(value)

    }

    const handleStartChangeDate = (date) => {
        setTripDates({
            ...tripDates,
            startingDate: date,
        })
        console.log(date)
    }

    
    const handleEndChangeDate = (date) => {
        setTripDates({
            ...tripDates,
            endingDate: date
        })
        console.log(date)
    }


    const onSubmitHandler = (event) => {
        // Prevent browser refreshing after form submission
        event.preventDefault();
        setSearchTerm('')
    }

    function waveHello() {
        console.log('👋');
    }

    useEffect(() => {
        loadTraffic()
    }, [])

    useEffect(() => {
        loadTrips()
    }, [])

    function loadTrips() {
        API.getTrips()
            .then(res => {
                console.log(res)
                setTrip(res.data)
            })
            .catch(err => console.log(err));
    };

    function loadTraffic() {
        API.getTraffic()
            .then(res => {
                console.log(res)
                setTraffic(res.data)
            })
            .catch(err => console.log(err));
    };


    function deleteTrip(id) {
        API.deleteTrip(id)
            .then(res => loadTrips())
            .catch(err => console.log(err));
    }

    return (

        <div className="bg">

            <Navbar />

            <Jumbotron fluid id="planTripPageStyle" style={{
                backgroundImage: ` url(${ImageBackground})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: "auto",
                height: "650px",
                marginBottom: "0",
                marginRight: "auto",
            }}>
                <Container>
                    <h1 style={{ textAlign: "center", color: "white", marginTop: "150px", fontFamily: 'Kaushan Script', fontSize: "75px", textShadow: "4px 4px 4px #000000" }}>Plan your trip here</h1>

                </Container>
            </Jumbotron>

            <Row >
                <Col id="planTripRow">
                    <MarineTrafficMap />
                </Col>

                <Col id="planTripRow">
                    {/* 
                    <Button><Link
                        to="/plantrip"
                        className={window.location.pathname === "/plantrip" ? "nav-link active" : "nav-link"}
                    >
                        <h1 style={{ color: "white" }}>Plan your voyage</h1>
                    </Link></Button> */}

                    <Container style={{ backgroundColor: "gray", borderRadius: "10px", marginTop: "100px" }}>

                        <h1 style={{ textAlign: "center", color: "white", fontFamily: 'Kaushan Script', textShadow: "4px 4px 4px #000000" }}>Start a trip</h1>

                        <Form >
                            <Form.Group controlId="formBasicEmail" >
                                <Form.Label>Start</Form.Label>
                                <Form.Control type="text" placeholder="Start location" value={searchTerm.startLocation} name="startLocation" onChange={handleInputChange} style={{ borderRadius: "10px" }} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>End</Form.Label>
                                <Form.Control type="text" placeholder="End location" value={searchTerm.endLocation} name="endLocation" onChange={handleInputChange} style={{ borderRadius: "10px" }} />
                            </Form.Group>

                            <Container>
                                <br></br>
                                <Row>
                                    <Col>
                                        <i className="far fa-calendar-alt"></i>
                                        <DatePicker
                                            className="datePicker"
                                            selected={tripDates.startingDate}
                                            onChange={handleStartChangeDate}
                                            // selectsStart
                                            // startDate={startDate}
                                            // endDate={endDate}
                                            showTimeSelect
                                            timeFormat="HH:mm"
                                            timeIntervals={20}
                                            timeCaption="time"
                                            name="startingDate"
                                            dateFormat="MM/dd/yyyy"
                                        />
                                    </Col>
                                    <Col>
                                        <i className="far fa-calendar-alt"></i>
                                        <DatePicker
                                            className="datePicker"
                                            selected={tripDates.endingDate}
                                            onChange={handleEndChangeDate}
                                            // selectsEnd
                                            // startDate={startDate}
                                            // endDate={endDate}
                                            // minDate={startDate}
                                            showTimeSelect
                                            timeFormat="HH:mm"
                                            timeIntervals={20}
                                            timeCaption="time"
                                            name="endingDate"
                                            dateFormat="MM/dd/yyyy"
                                        />
                                    </Col>
                                </Row>
                                <br></br>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Save Trip" />
                                </Form.Group>
                            </Container>


                            <Button onClick={(event) => { handleFormSubmit(event); toasty(); setTimeout() }} variant="primary" type="submit">
                                Submit
</Button>
                            <ToastContainer autoClose={4000} />
                        </Form>

                    </Container>
                </Col>
            </Row>



            {/* <Container fluid id="resultsdiv" style={{ color: "white", textAlign: "center" }} >
                <h1 >Ships encountered</h1>
                {traffic.length ? (
                    <List>
                        {traffic.map(traffics => (
                            <ListItem key={traffics.id}>
                                <Link to={"/plannedtrip/" + traffics.id}>
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
                            </ListItem>
                        ))}
                    </List>
                ) : (
                        <h3>No Results to Display</h3>
                    )}
            </Container> */}


            <Container fluid id="resultsdiv" style={{ color: "white", textAlign: "center" }} >
                <h1 style={{ textAlign: "center", color: "black", fontFamily: 'Kaushan Script', textShadow: "4px 4px 4px #000000" }}>Planned Trips</h1>
                {trip.length ? (
                    <List>
                        {trip.map(trips => (
                            <ListItem key={trips.sail_date_id}>
                                <Link to={"/plannedtrip/" + trips.sail_date_id}>
                                    <strong>
                                        <ul>
                                            {/* ID: {trips.sail_date_id} */}
                                            <br></br>
                                            {/* Start: {trips.start_destination} */}
                                            <br></br>
                                            {/* End: {trips.end_destination} */}
                                            <br></br>
                                 Trip Start Date: {trips.start_sail_date.split("T")[0]}
                                            <br></br>
                                            {/* End Date: {trips.end_sail_date} */}
                                            <br></br>
                                            {/* Eta: {trips.eta} */}
                                        </ul>
                                    </strong>
                                </Link>
                                <br></br>
                                <Button onClick={() => deleteTrip(trips.sail_date_id)}>Delete Trip</Button>
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