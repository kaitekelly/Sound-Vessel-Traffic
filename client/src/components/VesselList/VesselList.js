import React from "react";
import ShipDummyData from "../../utils/ShipDummyData"

class VesselList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boats: []
        }
    }

    componentDidMount() {
        fetch(ShipDummyData)
            .then(res => this.setState({ boats: ShipDummyData }))
            .catch(err => console.log(err));
    }

    render() {
        const { boats } = this.state;
        console.log(this.state.boats)
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
                        {boats.map((boat, index) => (

                            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#ff33cc" : "#e495e4" }}>
                                <td><img alt="boat" src={boat.URL} style={{height: "25%"}} /></td>
                                <td>{boat.SHIP_ID}</td>
                                <td>{boat.SHIPNAME}</td>
                                <td>{boat.TYPE_NAME}</td>
                                <td>{boat.DESTINATION}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default VesselList