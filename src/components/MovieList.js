import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'

function MovieList({ movieList, removeMovieList }) {
  console.log(movieList);

  const [displayList, setDisplayList] = useState([]);
  useEffect(() => {
    setDisplayList(movieList);
  }, [movieList]);

  const filterMovie = (choice) => {
    if(choice === "all") {
        setDisplayList(movieList);
        return;
    }
    const newDisplayList = movieList.filter((m) => m.choice === choice);
    setDisplayList(newDisplayList)
  }
  return (
    <>
      <div className="wrapper">
        <hr />
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => filterMovie("all")}
          >
            All
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => filterMovie("awesome")}
          >
            Awesome
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => filterMovie("boring")}
          >
            Boring
          </button>
        </div>
        <div className="d-flex flex-wrap justify-content-between">
          {displayList.map((movie) => {
            return (
              <MovieCard
                key={movie.imdbID}
                movie={movie}
                handleOnRemove={removeMovieList}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MovieList