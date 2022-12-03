import React from "react";

const Search = ({ searchField, searchChange }) => {
    return (
        <div className="pa2">
            <input className="pa3 bt br bl b--navy bg-washed-blue" type='search' placeholder='Enter Location' onChange={ searchChange } />
        </div>
    )
}

export default Search;