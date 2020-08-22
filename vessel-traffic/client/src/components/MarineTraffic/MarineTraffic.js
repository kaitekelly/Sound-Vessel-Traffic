import React from "react";
import searchShips from "../../utils/API"
import API from "../../utils/API";


class MarineTraffic extends Component {
    state = {
        search: "",
        ships: []
    };
    //what should i pass into searchShips?
    componentDidMount() {
        this.searchShips(); 
    };

    searchShips = query => {
        API.search(query)
         .then(res => this.setState({ ships: res.data }))
         .catch(err => console.log(err));
    }

    render () {

        const { ships } = this.state;
        console.log(this.state.ships)
    }
}

export default MarineTraffic;