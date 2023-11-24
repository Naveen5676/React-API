import React, { Fragment, useEffect, useState, useCallback } from "react";
import Moviesform from "./Components/Moviesform";
import MovieList from "./Components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isloading, setisLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retrying, setRetrying] = useState(false);

  const fetchMoviesHandler = useCallback(async () => {
    setisLoading(true);
    setError(null);
    try {
      const response = await fetch("https://react-api-1b936-default-rtdb.firebaseio.com/movies.json");
      if (!response.ok) {
        throw new Error("Could not fetch movies Error ");
      }

      const data = await response.json();
      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });

      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
      setRetrying(true);
    }
    setisLoading(false);
  });

  useEffect(() => {
    fetchMoviesHandler();
  }, []);

  const cancelRetryHandler = () => {
    setRetrying(false);
  };

  function addMovieHandler(movie) {
    console.log(movie);
  }

  let content = <p>Found no movies</p>;

  if (movies.length > 0) {
    content = <MovieList movies={movies} />;
  }
  if (error) {
    content = (
      <Fragment>
        <p>{error}</p>
        {retrying && <p>Retrying...</p>}
        {retrying && <button onClick={cancelRetryHandler}> Cancel</button>}
      </Fragment>
    );
  }

  if (isloading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <Moviesform  onAddMovie={addMovieHandler}/>
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
