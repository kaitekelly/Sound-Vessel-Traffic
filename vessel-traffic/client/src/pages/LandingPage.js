import React from "react";
import ImageBackground from "../components/Images/Seattle-Boats.jpg";
import '../App.css';
import { Link } from "react-router-dom";



function LandingPage() {
    return (
        
        <div style={{
            backgroundImage: `url(${ImageBackground})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: "100%",
            height: "1000px",
        }}>

                <div className="container" style={{ color: "white", textAlign: "center", paddingTop: "150px" }}>
                    <h1 style={{ fontFamily: 'Kaushan Script' }}>Hello Boats</h1>
                    <h2 style={{ fontFamily: 'Kaushan Script' }}>Sail the world</h2>

                    <Link
                    to="/userlogin"
                    className={
                    window.location.pathname === "/userlogin" || window.location.pathname === "/userlogin"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    ><button type="button" className="btn btn-outline-primary">Log In</button></Link>
                    <Link
                    to="/signup"
                    className={
                        window.location.pathname === "/signup" || window.location.pathname === "/signup"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    ><button type="button" className="btn btn-outline-primary"> Sign Up</button></Link>
            </div>
        </div >
    )
}

export default LandingPage;