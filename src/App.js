import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import SearchForm from "./components/SearchForm";

function App() {
  const [movieList, setMovieList] = useState([]);

  const addMovieToList = (movie, choice) => {
    console.log(movie, choice);
    const listHasMovie = movieList.filter((m) => m.imdbID === movie.imdbID);
    const movieWithChoice = { ...movie, choice };

    // If movie does not exist, simple add
    if (listHasMovie.length === 0) {
      setMovieList([...movieList, movieWithChoice]);
    } else {
      // if movie exists
      if (movie.choice === listHasMovie[0].choice) {
        return;
      } else {
        const movieListWithRemovedMovie = movieList.filter(
          (m) => m.imdbID !== movie.imdbID
        );
        const newListWithAddedMovie = [
          ...movieListWithRemovedMovie,
          movieWithChoice,
        ];
        setMovieList(newListWithAddedMovie);
      }
    }
  };

  const removeMovieList = (movie) => {
    const newMovieArr = movieList.filter((m)=> m.imdbID !== movie.imdbID);
    setMovieList(newMovieArr);
  }

  return (
    <div className="wrapper bg-dark text-warning">
      <div className="container">
        <div className="row">
          <div className="col text-center mt-3">
            <h1> My Movie Api APP</h1>
            <hr></hr>
          </div>
        </div>
        <SearchForm addMovieToList={addMovieToList} />
        <MovieList movieList={movieList} removeMovieList={removeMovieList} />
      </div>
    </div>
  );
}

export default App;
