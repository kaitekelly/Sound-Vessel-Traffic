import React from 'react';
import './App.css';
import LandingPage from "./pages/LandingPage"
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserLoginPage from './pages/UserLogin';


function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/userlogin" component={UserLoginPage} />

        </div>
      </Router>
    </div>
  );
}

export default App;
