import axios from "axios";
import React, { useState } from "react";
import MovieCard from "./MovieCard";

function SearchForm({ addMovieToList }) {
  const OMBD_API = "https://www.omdbapi.com/?apikey=e95f2d6c&t=";
  const [searchValue, setSearchValue] = useState("");
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(false);

  const handleOnChange = (e) => {
    setError(false);
    setSearchValue(e.target.value);
  };
  const handleOnRemove = () => {
    setMovie({});
  };

  const addToMovieListAndClearMovie = (movie, choice) => {
    addMovieToList(movie, choice);
    setMovie({});
  }
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.get(OMBD_API + searchValue);
      if (data.imdbID) {
        setMovie(data);
      } else {
        setError(true);
        setMovie({});
      }
    } catch (e) {
      setError(true);
      setMovie({});
    }
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="text"
              className="form-control"
              onChange={handleOnChange}
              onFocus={() => setError(false)}
            />
          </div>
          <div className="col-3 d-grid">
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </form>
      {movie.imdbID && (
        <MovieCard
          movie={movie}
          handleOnRemove={handleOnRemove}
          addMovieToList={addMovieToList}
        />
      )}
      {error && <div className="alert alert-warning">No movies found</div>}
    </>
  );
}

export default SearchForm;
