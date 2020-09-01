import React from "react";
import Navbar from '../components/Navbar/Navbar';
// import Card from 'react-bootstrap/Card';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import { Link } from "react-router-dom";
// import SeattleBoatMap from "../components/Images/Seattle-Boat-Map.jpg";
import VesselList from "../components/VesselList/VesselList"
// import VesselDummyData from "../utils/VesselDummyData";
import MarineTrafficMap from "../components/MarineTrafficMap/MarineTrafficMap"
import SampleMap from '../components/SampleMap/SampleMap';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import '../App.css';







function mapPage(props) {


    return (

        <div style={{textAlign:"center"}}>



            <Navbar />
            <h1>See Boat Maps Here</h1>
            {/* <div style={{
            backgroundImage: `url(${SeattleBoatMap})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: "100%",
            height: "760px",

            }}>

        </div> */}

<h1>Plan your trip here</h1>

<Button><Link
    to="/plantrip"
    className={window.location.pathname === "/plantrip" ? "nav-link active" : "nav-link"}
            >
    <h1 style={{color:"white"}}>Plan your voyage</h1>
    </Link></Button>

<div id="marineTrafficMap">
<MarineTrafficMap />
</div>


            {/* <p>
                <VesselList />
            </p> */}

        </div>
    )
}

export default mapPage;