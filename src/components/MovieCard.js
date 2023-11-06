import React, { useState } from "react";
import MovieList from "./MovieList";

function MovieCard({ movie, handleOnRemove, addMovieToList }) {
  return (
    <div className="card" style={{ width: "15rem" }}>
      <img src={movie.Poster} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{movie.Title}</h5>
        <p className="card-text">{movie.Plot}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">IMDB : {movie.imdbRating}</li>
        <li className="list-group-item">Actor : {movie.Actors}</li>
        <li className="list-group-item">Year : {movie.Year}</li>
      </ul>
      {addMovieToList && (
        <>
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-success"
              onClick={() => addMovieToList(movie, "awesome")}
            >
              Awesome
            </button>
            <button
              className="btn btn-warning"
              onClick={() => addMovieToList(movie, "boring")}
            >
              Boring
            </button>
          </div>
        </>
      )}
      <div className="d-grid">
        <button
          className="btn btn-danger"
          onClick={() => handleOnRemove(movie)}
        >
          Remove
        </button>
      </div>
      {/* <div className="d-grid">
      <button className="btn btn-warning" onClick={() => handleOnRemove(movie)}>
        Remove 
      </button>
    </div> */}
    </div>
  );
}

export default MovieCard;
