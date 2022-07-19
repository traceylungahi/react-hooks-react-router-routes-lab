import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    {movies.map((movie, index) => {
      return <div key={index}>
        <h4>Name: {movie.title}</h4>
        <p>Time: {movie.time}</p>
        Genres: <ul>
          {movie.genres.map((genre, index) => {
            return <li key={index}>{genre}</li>
          })}
        </ul>
      </div>
    })}
  </div>;
}

export default Movies;
