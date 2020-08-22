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





function mapPage(props) {


    return (

        <div>



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

            <MarineTrafficMap />


            <p>
                <VesselList />
            </p>

        </div>
    )
}

export default mapPage;