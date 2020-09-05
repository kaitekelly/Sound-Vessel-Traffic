import React from 'react';
import './App.css';
import LandingPage from "./pages/LandingPage"
// import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserLoginPage from './pages/UserLogin';
import SignUpPage from './pages/SignUp';
import mapPage from './pages/Map';
import PlanTrip from './pages/PlanTrip'
import PlannedTrip from './pages/PlannedTrip'

function App() {
  return (
    <div>
      <Router>
        <div>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/userlogin" component={UserLoginPage} />
          {/* <Route exact path="/signup" component={SignUpPage} /> */}
          <Route exact path="/map" component={mapPage} />
          <Route exact path="/plantrip" component={PlanTrip} />
          <Route exact path="/plannedtrip/:id">
          <PlannedTrip />
        </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
