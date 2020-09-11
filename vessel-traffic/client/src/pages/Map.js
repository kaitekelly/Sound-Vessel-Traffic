import React from "react";
import Navbar from '../components/Navbar/Navbar';
import MarineTrafficMap from "../components/MarineTrafficMap/MarineTrafficMap"
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { Link } from "react-router-dom";
import '../App.css';

function mapPage(props) {
    return (
        <div style={{ textAlign: "center" }}>
            <Navbar />
            <Row>
                <Col>
                    <MarineTrafficMap />
                </Col>
                <Col>
                    <h1>Plan your trip here</h1>
                    <Button><Link
                        to="/plantrip"
                        className={window.location.pathname === "/plantrip" ? "nav-link active" : "nav-link"}
                    >
                        <h1 style={{ color: "white" }}>Plan your voyage</h1>
                    </Link></Button>
                </Col>
            </Row>
        </div>
    )
}

export default mapPage;