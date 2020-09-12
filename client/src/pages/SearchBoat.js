import React, { useState, useEffect } from "react";
import API from "../utils/API";


const SearchBoats = () => {
    
    const [ships, setShips] = useState();

    useEffect(() => {
        loadShips()
    }, [])
    

    function loadShips(req, res) {
        
        API.searchShips()
        .then(res => setShips(res.data.results))
        .catch(err => console.log(err));
        console.log(res.data.results)
    };

    return (
        <div>
            <button onClick={loadShips}></button>
        </div>
    )

}

export default SearchBoats;