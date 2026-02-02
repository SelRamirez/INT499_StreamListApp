import React from "react";

function Search({handleInput, search}) {
    return (
        <section className="searchbox-wrap">
            <input type="text" placeholder="Search a movie..." className="search-input" onChange ={handleInput} onKeyDown={search} />
        </section>
    )
}

export default Search;