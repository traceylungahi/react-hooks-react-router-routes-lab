import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
    <h1>Actors Page</h1>
    {actors.map((actor, index) => {
      return <div key={index}>
        <h4>Name: {actor.name}</h4>
        Movies: <ul>
          {actor.movies.map((movie, index) => {
            return <li key={index}>{movie}</li>
          })}
        </ul>
      </div> 
    })}
  </div>;
}

export default Actors;
