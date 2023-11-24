import React, { Fragment, useContext } from 'react';
import Deletecontext from '../Store/Deletecontext';

import classes from './Movie.module.css';

const Movie = (props) => {
  const deletectx = useContext(Deletecontext)

  // function deletehandler(id){
  //   fetch(`https://react-api-1b936-default-rtdb.firebaseio.com/movies/${id}.json`,{
  //     method:'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });

  // }

  return (
    <Fragment>
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.opeaningText}</p>
    </li>
    <button onClick={()=>deletectx.deleteMovie(props.id)}>Delete</button>
    </Fragment>
  );
};

export default Movie;