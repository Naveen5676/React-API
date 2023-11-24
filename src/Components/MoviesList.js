import React from 'react';

import Movie from '../Components/Movie';

import classes from './MoviesList.module.css'
const MovieList = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Movie 
          id={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          opeaningText={movie.opeaningText}
        />
      ))}
    </ul>
  );
};

export default MovieList;