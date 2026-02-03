import React, { useState, useEffect } from 'react';

// Simple id generator — or use uuid package
const generateId = () => `${Date.now()}-${Math.floor(Math.random() * 10000)}`;

function Home() {
  const [movieList, setMovieList] = useState(()=>{
    const storedValue = localStorage.getItem("localList");
    return storedValue ? JSON.parse(storedValue) : [];
  });
  const [value, setValue] = useState('');

  // Load once
    useEffect(()=>{
        if(localStorage.getItem("localList")){
            const storedList= JSON.parse(localStorage.getItem("localList"));
            setMovieList(storedList);
        }
    }, []);

    
    useEffect(() => {
    localStorage.setItem('localList', JSON.stringify(movieList));
  }, [movieList]);
  
  
  

  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = value.trim();
    if (!title) return;
    const newMovie = { id: generateId(), movieTitle: title, editMode: false, editValue: title };
    setMovieList((prev) => [...prev, newMovie]);
    localStorage.setItem("localList",JSON.stringify([...movieList, newMovie]))
    setValue('');
  };

  const handleDelete = (movieId) => {
    const deleted = movieList.filter(m => m.id !== movieId);
    setMovieList(deleted);
    localStorage.setItem("localList", JSON.stringify(deleted));
    console.log("Movie deleted. List saved.");
  };

  const toggleEditMode = (movieId) => {
    setMovieList((prev) =>
      prev.map((m) =>
        m.id === movieId ? { ...m, editMode: !m.editMode, editValue: !m.editMode ? m.movieTitle : m.editValue } : m
      )
    );
  };

  const handleEditChange = (movieId, newVal) => {
    setMovieList((prev) => prev.map((m) => (m.id === movieId ? { ...m, editValue: newVal } : m)));
  };

  const saveEdit = (movieId) => {
    const editList = (prev) =>
      prev.map((m) => (m.id === movieId ? { ...m, movieTitle: m.editValue, editMode: false } : m));
    setMovieList(editList);
  };

  return (
    <div className="home">
      <h1>Welcome to the EZ StreamList Homepage!</h1>
        <h2>Try adding a movie title.</h2>
      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Add to List</button>
      </form>

      <ul className="movie-list">
        {movieList.map((movie) => (
          <li key={movie.id}>
            <button onClick={() => handleDelete(movie.id)}><span aria-label="delete" className="material-icons">
                                delete
                                </span></button>
            <button onClick={() => toggleEditMode(movie.id)}>{movie.editMode ? 'Cancel' : <span aria-label="edit" className="material-icons">edit</span>}</button>

            {!movie.editMode ? (
              <div className="movie-title">{movie.movieTitle}</div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  saveEdit(movie.id);
                }}
              >
                <input value={movie.editValue} onChange={(e) => handleEditChange(movie.id, e.target.value)} />
                <button type="submit">Save</button>
              </form>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;