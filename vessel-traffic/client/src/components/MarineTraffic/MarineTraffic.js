import React from "react";
import searchShips from "../../utils/API"
import API from "../../utils/API";
// import VesselDummyData from "../../utils/VesselDummyData";
import ShipDummyData from "../../utils/ShipDummyData.json";


class MarineTraffic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            ships: []
        };
    }
    
  
    //what should i pass into searchShips?
    componentDidMount() {
        fetch(ShipDummyData) 
        .then(res => this.setState({ ships: ShipDummyData }))
        .catch(err => console.log(err));
        console.log(ShipDummyData); 

    };


    render () {

        const { ships } = this.state;
        console.log(this.state.ships)

        return (
            <div>

                <table>


                    <thead>
                        <tr>
                            <th style={{ width: "25%", height: "50%" }}> Image</th>
                            <th style={{ width: "25%", height: "50%" }}>Ship ID</th>
                            <th style={{ width: "25%", height: "50%" }}>Ship Name</th>
                            <th style={{ width: "25%", height: "50%" }}> Ship Type</th>
                            <th style={{ width: "25%", height: "50%" }}> Destination</th>
                        </tr>
                    </thead>

                    <tbody id="employeeTable">
                        {ships.map((ship, index) => (

                            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#ff33cc" : "#e495e4" }}>
                                <td><img alt="ship" src={ship.PICTURE} /></td>
                                <td>{ship.SHIP_ID}</td>
                                <td>{ship.SHIPNAME}</td>
                                <td>{ship.TYPE_NAME}</td>
                                <td>{ship.DESTINATION}</td>
                            </tr>

                        ))}
                    </tbody>
                </table>


            </div>
        )



        )
    }
}

export default MarineTraffic;