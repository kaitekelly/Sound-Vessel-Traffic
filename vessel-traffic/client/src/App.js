import React from 'react';
import './App.css';
import LandingPage from "./pages/LandingPage"
// import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserLoginPage from './pages/UserLogin';
import SignUpPage from './pages/SignUp';
import mapPage from './pages/Map';
import PrivateRoute from './PrivateRoute';
import Admin from './pages/Admin';
import { AuthContext } from './context/auth';


function App() {
  return (
    <div>
    <AuthContext.Provider value={false}>
      <Router>
        <div>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/userlogin" component={UserLoginPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/map" component={mapPage} />
          <PrivateRoute path="/admin" component={Admin} />
        </div>
      </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
