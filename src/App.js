import React, { useState } from 'react';

import MovieList from './Components/MoviesList';
import './App.css';

function App() {
 const [movies , setMovies]=useState([]);
 const [isloading , setisLoading]= useState(false);

 async function fetchMoviesHandler(){
  setisLoading(true);
  const response = await fetch('https://swapi.dev/api/films/');
  const data = await response.json();
    const transformedMovies = data.results.map((movieData)=>{
      return {
        id:movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
    };
  });
  setMovies(transformedMovies);
  setisLoading(false);
};
 



  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isloading && <MovieList movies={movies} />}
        {isloading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;