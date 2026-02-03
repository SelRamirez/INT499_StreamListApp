import React, {useState, useEffect} from 'react'; 





function Movies () {
    
    const [shows, setShows] = useState([]);
    const [input, setInput] = useState("");
    const [search, setSearch] = useState([]);
    
    const api_key = process.env.REACT_APP_API_KEY;
    
const getShows = async () => {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=`+api_key);
    const json = await res.json();
    setShows(json.results || []);
  } catch (err) {
    console.error(err);
  }
};

    const getSearch = async() =>{
        console.log(input+" was searched. Function still under construction.");
    }
    
    useEffect(()=> {
        getShows()
    },[])

    const handleChange = (e)=>{
        setInput(e.target.value);
        console.log(input);
    }

    const handleClick = (e)=>{
        e.preventDefault();
        getSearch();

    }

    return (
        <div className="movies">
            <h1>Movie Search</h1>
            <main>
                <input type="text" onChange={handleChange} value={input} className="searchbox-input" placeholder='Enter a movie to search...'></input>
                <button onClick={handleClick} onChange={handleChange}>Search</button>
                {shows.map((data) => (
  <div key={data.id}>
    <img
      src={data?.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : '/placeholder.png'}
      alt={data.title || 'Movie poster'}
      width="200"
      height="300"
    />
  </div>
))}
            </main>
        </div>
    );
}         

export default Movies;
