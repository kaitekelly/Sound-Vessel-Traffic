import axios from "axios";
//the AREAURL is the endpoint url for marine traffic's PS05 predefined area search
const AREAURL = "https://my-json-server.typicode.com/audijej/demo";
const APIKEY = "";



export default {
    searchShips: function(query) {
        return axios.get(AREAURL );
    }
}