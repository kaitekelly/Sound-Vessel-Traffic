import React, { useState } from "react";
import API from "../utils/API";


const SearchBoats = () => {
    
    const [search, setSearch] = useState();
    
    searchShips = query => {
        API.searchShips(query)
          .then(res => this.setState( {result: res.data}))
          .catch(err => console.log(err));
    }


}