import React from "react";
import "../index.css"

const SearchBox = ({searchField, searchChange}) => {
    return (
        <input type={"search"}
               placeholder={"Search Amogus"}
               className={"pa3 ba b--green bg-lightest-blue"}
               onChange={searchChange}
        />
    )
}

export default SearchBox;