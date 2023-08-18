import React, { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

//api key :- b1b92c0f

//creating api call
const API_URL = "http://www.omdbapi.com?apikey=b1b92c0f&";

const movie1 = {
  Title: "Batman v Superman: Dawn of Justice",
  Year: "2016",
  imdbID: "tt2975590",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
};

const App = () => {
  const [movies, setMovies] = React.useState([]);

   //search bar
  const searchMovies = async (title) => {
    //create a response
    const response = await fetch(`${API_URL}&s=${title}`);
    //convert response to json
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    // call searchMovies
    searchMovies("batman");
  }, []);

  return (
    <div className="app">
      <h1>CineFlixHub</h1>
      <div className="search">
        <input
          placeholder="search for movies"
          value="oppenheimer"
          //set the search values
          onChange={(e) => searchMovies(e.target.value)}
        />

        <img
          src={SearchIcon}
          alt="search"
          //set search magnifier property
          onClick={() => {}}
        />
      </div>
      {
        movies?.length >0
        ?( <div className="container">
        {/* create a card of movie */}
        <MovieCard movie1={movies[0]} />
      </div>) :
      (
        <div></div>
      )
      }
    </div>
  );
};

export default App;
