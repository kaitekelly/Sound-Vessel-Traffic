import axios from "axios";
//the AREAURL is the endpoint url for marine traffic's PS05 predefined area search
const AREAURL = "https://my-json-server.typicode.com/audijej/demo";

//Marine Traffic API url and key


// const passenger = "/shiptype:6"
// const cargo = "/shiptype:7"
// const tanker = "/shiptype:8"

//how can i combine this search to search ships 6-8 with one call?

export default {
    searchShips: function() {
        return axios.get( AREAURL);
    },

    // searchCargoShips: function() {
    //     return axios.get(BASEURL + APIKEY + cargo);
    // },

    // searchTankers: function() {
    //     return axios.get(BASEURL + APIKEY + tanker);
    // }
};