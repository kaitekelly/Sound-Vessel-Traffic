import React from "react";
import ImageBackground from "../components/Images/Seattle-Boats.jpg";
import '../App.css';


function LandingPage() {
    return (
        <div style={{backgroundImage: `url(${ImageBackground})`, 
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: "100%",
        height: "960px"}}>
            
            <div className="container" style={{color: "white", textAlign: "center"}}>
            <h1 style={{fontFamily: 'Kaushan Script'}}>Hello Boats</h1>
            <h2>Sail the world</h2>

            <button>Sign Up</button><button>Log In</button>
            </div>
        </div>
    )
}

export default LandingPage;