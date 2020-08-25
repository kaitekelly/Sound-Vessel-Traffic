import axios from "axios";
//the AREAURL is the endpoint url for marine traffic's PS05 predefined area search
const AREAURL = "https://my-json-server.typicode.com/audijej/demo";
const photoURL = "https://services.marinetraffic.com/api/exportvesselphoto";



export default {
    searchShips: function() {
        return axios.get( AREAURL);
    },

    
};