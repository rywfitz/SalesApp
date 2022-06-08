import React, { useState, useEffect } from "react";


import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import {LandingPage} from "./landingpage/landingpage";


import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
 
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    
    <div className="app">
      <LandingPage/>
    </div>
  );
};

export default App;



      {/* <img id="logo" src="/images/sample_logo.png" alt="" /> */}
      {/* <div className="homebanner"> */}
      {/* <h1>MovieLand</h1> */}
        
      {/* </div> */}

      {/* <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div> */}

      {/* {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )} */}