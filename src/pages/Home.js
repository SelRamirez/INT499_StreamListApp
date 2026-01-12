import React, {useState} from 'react';

function Home () {
    
    const [value,setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("You searched for " + value + ".");
    };
    
    return (
        <div className="home">
            <h1>Welcome to the EZ StreamList Homepage!</h1>
            <h2>Try searching a movie title.</h2>
            <form onSubmit={handleSubmit}>
                <label>Title: </label>
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                />
                
                <button type = "submit">Search</button>
            </form>
        </div>
    )
}

export default Home; 