import axios from "axios";
//the AREAURL is the endpoint url for marine traffic's PS05 predefined area search
const AREAURL = "https://my-json-server.typicode.com/audijej/demo";
const photoURL = "https://services.marinetraffic.com/api/exportvesselphoto";


export default {
    searchShips: function() {
        return axios.get( AREAURL);
    },

    getTraffic: function() {
        return axios.get("/api/ships");
      },

      getTrips: function() {
        return axios.get("/api/trips");
      },

      getPlannedTrips: function(id) {
        return axios.get("/api/trips/" + id);
      },

      saveTrip: function(tripData) {
        return axios.post("/api/trips", tripData);
      },

      deleteTrip: function(id) {
        return axios.delete("/api/trips/" + id);
      },
      
      saveUser: function(userInfo) {
        console.log("Saving user in API.js")
        return axios.post("/api/users", userInfo);
      },

      // getUser: function(userLogin) {
      //   console.log("User logging in API.js")
      //   return axios.get("/api/users", userLogin);
      // }
};