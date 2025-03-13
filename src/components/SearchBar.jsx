import React from "react";

function SearchBar({ searchTerm, onSearchChange }) {
    return (
        <div className="mb-4">
            {/* <label htmlFor="search-bar">Search:</label> */}
            <input
                id="search-bar"
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search for a movie..."
                className="border border-gray-300 rounded p-2 w-full"
            />
        </div>
    );
}

export default SearchBar;
