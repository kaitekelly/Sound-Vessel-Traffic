import React from 'react';
import './App.css';
import LandingPage from "./pages/LandingPage"
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserLoginPage from './pages/UserLogin';
import SignUpPage from './pages/SignUp';
import mapPage from './pages/Map';


function App() {
  return (
    <div>
      <Router>
        <div>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/userlogin" component={UserLoginPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/map" component={mapPage} />

        </div>
      </Router>
    </div>
  );
}

export default App;
