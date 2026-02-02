import React, {useState, useEffect} from 'react'; 





function Movies () {
    
    const [shows, setShows] = useState([]);
    const [input, setInput] = useState("");
    const [search, setSearch] = useState([]);
    
    
    const getShows = async() => {
        try{
            await fetch("https://api.themoviedb.org/3/discover/movie?api_key=95b028b03cc7ed70f403ad0c3b05f43a")
            .then(res=> res.json())
            .then(json=> setShows(json.results))
        }catch(err){
            console.error(err)
        }
        
    }

    const getSearch = async() =>{
        try{
            await fetch("https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&api_key=95b028b03cc7ed70f403ad0c3b05f43a&query="+input)
            .then (res=>res.json())
            .then (json=>setSearch(json.results))
        } catch(err){
            console.error(err);
        }
        console.log(search);
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
                <button onClick={handleClick}>Search</button>
                {shows.map((data)=>{
                    return <div>  <img src={'https://image.tmdb.org/t/p/w500'+data?.poster_path}></img> </div>
                })}
            </main>
        </div>
    );
}         

export default Movies;
