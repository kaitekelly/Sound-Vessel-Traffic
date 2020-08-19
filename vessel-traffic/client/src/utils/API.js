import axios from "axios";
//the AREAURL is the endpoint url for marine traffic's PS05 predefined area search
const AREAURL = "https://services.marinetraffic.com/api/exportvessels/v:8";
const APIKEY = "";



export default {
    searchShips: function(query) {
        return axios.get(AREAURL );
    }
}