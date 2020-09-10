import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar/Navbar';
import FormCheck from 'react-bootstrap/FormCheck';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Calendar from 'react-calendar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ImageBackground from "../components/Images/Seattle-Boats2.JPG";
import API from "../utils/API";
import { List, ListItem } from "../components/List/List"
import { Link, useParams } from "react-router-dom";
import SeattleLakeUnionBoat from '../components/Images/Seattle-Lake-Union.JPG'

function PlannedTrip() {

    const [trip, setTrip] = useState([])
    const [trippy, setTrippy] = useState([{}])
    const [traffic, setTraffic] = useState([]);
    const [trafficMatch, setTrafficMatch] = useState([{}]);
    const { id } = useParams()


    useEffect(() => {
        loadTrips()
    }, [])

    useEffect(() => {
        loadTraffic()
    }, [])

    function loadTrips() {
        API.getPlannedTrips(id)
            .then(res => {
                console.log(res.data)
                setTrip(res.data)
            })
            .catch(err => console.log(err));
    };

    function loadTraffic() {
        API.getTraffic()
            .then(res => {
                console.log(res.data)
                setTraffic(res.data)
                setTrafficMatch(res.data)
                console.log(trafficMatch)
            })
            .catch(err => console.log(err));

        // let matchingDates =[]

        // let matchedDates = trafficMatch.filter(function(event){
        //     if(trafficMatch.eta == trip.start_sail_date) {
        //         return true
        //     } 
        //     // setTrafficMatch(matchedDates)
        //     matchingDates.push(matchedDates)

        // })
        // console.log(matchingDates)
    };


    //     function checkETA() {
    //         let matchingDates =[]

    // let matchedDates = trafficMatch.filter(function(event){
    //     if(trafficMatch.eta == trip.start_sail_date) {
    //         return true
    //     } 
    //     // setTrafficMatch(matchedDates)
    //     matchingDates.push(matchedDates)

    // })
    // console.log(trafficMatch)
    //     }

    // function checkSailingDate(event) {
    //     const matchedDates = traffic.filter(traffics => {
    //     // if this task has the same ID as the edited task
    //       if (event.eta === trip.start_sail_date) {
    //         //
    //         return {...trafficMatch}
    //       }
    //       return traffics;
    //     });
    //     setTrafficMatch(matchedDates);
    //     console.log(matchedDates)

    //   }
    let matchingDates = []

    let matchedDates = trafficMatch.filter(function (event) {
        if (event.eta === trip.start_sail_date) {
            return true
        }

    })
   matchingDates = matchingDates.concat(matchedDates)
    console.log(matchedDates)



    return (

        <div className="bg">

            <Navbar />

            <Jumbotron fluid style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${SeattleLakeUnionBoat})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: "auto",
                height: "650px",

            }} >
                <Container>
                    <h1 style={{ textAlign: "center", color: "white", marginTop: "150px", fontFamily: 'Kaushan Script', fontSize: "75px", textShadow: "4px 4px 4px #000000" }}>Saved Trip</h1>
                </Container>
            </Jumbotron>

            <Container id="singleResultTrip">

                <h1 style={{ textAlign: "center", fontSize: "50px" }}>Saved Trips</h1>
                <br></br>
                <h2>Start Destination: {trip.start_destination}</h2>
                <h2>End Destination: {trip.end_destination}</h2>
                <h2>Start Sail Date: {trip.start_sail_date && trip.start_sail_date.split("T")[0]}</h2>
                <h2> End Sail Date: {trip.end_sail_date && trip.end_sail_date.split("T")[0]}</h2>
                <br></br>
                <h1 style={{ textAlign: "center", fontSize: "50px" }}>Ship Details</h1>


            </Container>

            <Container fluid id="resultsdiv" style={{ color: "black", textAlign: "center" }} >
                <h1 >Ships encountered</h1>
                {matchingDates.length ? (
                    <List>
                        {matchingDates.map((traffics, index) => {
                            console.log(traffics)
                            return (<ListItem key={index}>
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
                                         Eta: {traffics.eta && traffics.eta.split("T")[0]}
                                        </ul>
                                    </strong>
                                </Link>
                                <br></br>
                            </ListItem>
                        )})}
                    </List>
                ) : (
                        <h3>No Results to Display</h3>
                    )}
            </Container>

            {/* <Container fluid id="resultsdiv" style={{ color: "white", textAlign: "center" }} >
                <h1 style={{ color: "black" }} >Trips</h1>
                {trip.length ? (
                    <List>
                        {trippy.map(trips => (
                            <ListItem key={trips.sail_date_id}>
                                <Link to={"/plannedtrip/" + trips.sail_date_id}>
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
                                <DeleteBtn onClick={() => deleteBook(traffics.sail_date_id)} />
                            </ListItem>
                        ))}
                    </List>
                ) : (
                        <h3>No Results to Display</h3>
                    )}
            </Container> */}

        </div>
    )
}

export default PlannedTrip