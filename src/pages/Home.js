import React, {useState, useEffect} from 'react';
import EditTitle from './EditTitle';
let newId =0;



function Home () {
        
    const [movieList, setMovies] = useState([]);
    const [value,setValue] = useState('');
    const [editValue,setEditValue] = useState('');
    
    useEffect(()=>{
        if(localStorage.getItem("localList")){
            const storedList= JSON.parse(localStorage.getItem("localList"));
            setMovies(storedList);
        }
    }, [])

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleEditChange = (e) => {
        setEditValue(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim() != '') {
            const newMovie = {id: newId++, movieTitle: value, editMode: false}
            setMovies([...movieList,newMovie]);
            console.log("You added " + value + ".");
            localStorage.setItem("localList",JSON.stringify([...movieList, newMovie]))
            setValue('');
            console.log(movieList);
            }
        else {
            console.log('No movie added.')
        }
    }
    
    const handleDelete = (movie) => {
        const deleted = movieList.filter(m => m.id !== movie.id);
        setMovies(deleted);
        localStorage.setItem("localList", JSON.stringify(deleted));
        console.log("Movie deleted. List saved.");
    }
    

    const editMovieTitle = (e, movieId) => {
        e.preventDefault();
        console.log('editMovieTitle called '+ editValue);
        changeMovieTitle(movieId);

    }

    const changeMovieTitle= (movieId) => {setMovies(movieList.map((movie) => movie.id === movieId ? {...movie, movieTitle: editValue} : movie));}
    const changeEditMode = (movieId) => {setMovies(movieList.map((movie) => movie.id === movieId ? {...movie, editMode: !movie.editMode } : movie)); }
    const handleEditButton = (movieId) => {
        console.log('Button worked? Movie ID: '+movieId);
        changeEditMode(movieId);
    };


    return (

        <div className="home">
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
           
            <h1>Welcome to the EZ StreamList Homepage!</h1>
            <h2>Try adding a movie title.</h2>
            <form onSubmit={handleSubmit}>
                <label>Title: </label>
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                />
                
                <button type = "submit">Add to List</button>
            </form>
            <h2>Your Movie List</h2>
            <ul id='movieList' className='movie-list'>
                    {movieList.map(movie => (

                        //Makes new item in list 
                        <li key={movie.id}>
                            
                            <button onClick={()=> {handleDelete(movie)}}>
                                <span class="material-icons">
                                delete
                                </span>
                            </button>
                            <button class="material-icons" onClick={()=>handleEditButton(movie.id)}> 
                                edit
                            </button>
                            
                            <div className='movie-title'>{movie.movieTitle}</div>
                            {movie.editMode ? (<div> <input type="text" value={editValue} onChange={handleEditChange} />
                                <button onClick={editMovieTitle}>Update</button></div>): (null)}
                            </li>
                        
                    ))}
                </ul>
                
                
        </div>
    )
}

export default Home; 