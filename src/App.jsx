import { useState, useEffect } from "react";
import "./App.css";
// Import our components
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
import RedMovieDisplay from "./components/RedMovieDisplay";
import RedForm from "./components/RedForm";
import BlueMovieDisplay from "./components/BlueMovieDisplay";
import BlueForm from "./components/BlueForm";
import RandomChoiceDisplay from "./components/RandomChoiceDisplay";
import RandomChoice from "./components/RandomChoice";

export default function App() {

  //new code:



//end new code

  // Constant with your API Key
  const apiKey = "98e3fb1f";

  // State to hold movie data
  const [movie, setMovie] = useState(null);
  const [redMovie, setRedMovie] = useState(null);
  const [blueMovie, setBlueMovie] = useState(null);
  const [randomMovie, setRandomMovie] = useState(null);

  // Function to get movies
  const getMovie = async(searchTerm) => {
    // Make fetch request and store the response
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    // Parse JSON response into a JavaScript object
    const data = await response.json();
    // Set the Movie state to the received data
    setMovie(data);
  };

    // This will run on the first render but not on subsquent renders
    useEffect(() => {
      getMovie("Superman");
    }, []);

      // Function to get RED movies
  const getRedMovie = async(searchTerm) => {
    // Make fetch request and store the response
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    // Parse JSON response into a JavaScript object
    const data = await response.json();
    // Set the Movie state to the received data
    setRedMovie(data);
  };

    // This will run on the first render but not on subsquent renders
    useEffect(() => {
      getRedMovie("Trailer Park Boys");
    }, []);

      // Function to get BLUE movies
  const getBlueMovie = async(searchTerm) => {
    // Make fetch request and store the response
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    // Parse JSON response into a JavaScript object
    const data = await response.json();
    // Set the Movie state to the received data
    setBlueMovie(data);
  };

    // This will run on the first render but not on subsquent renders
    useEffect(() => {
      getBlueMovie("Wonder Woman");
    }, []);

    // Function to get RANDOMMOVIE movies
  const getRandomMovie = async(searchTerm) => {
    // Make fetch request and store the response
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    // Parse JSON response into a JavaScript object
    const data = await response.json();
    // Set the Movie state to the received data
    setRandomMovie(data);
  };

    // This will run on the first render but not on subsquent renders
    useEffect(() => {
      getRandomMovie("Superman");
    }, []);

  return (
    <main>
      {/* Title & description */}
      <div className="title" style={{ color: "yellow" }}>
        <h1>Whose Movie?</h1>
        <h2>Settle it here!</h2>
        <h3>Each enter a movie and let the game decide...</h3>
      </div>

      {/* Red & Blue Columns */}
      <div className="container">
        {/* Left RED Column */}
        <div className="column left" style={{ color: "red" }}>
          <h2>The Red Corner</h2>
          <p>~Godspeed~</p>
          <RedForm redMoviesearch={getRedMovie} />
          <RedMovieDisplay redMovie={redMovie} />
        </div>
        {/* Right BLUE Column */}
        <div className="column right" style={{ color: "skyblue" }}>
          <h2>The Blue Corner</h2>
          <p>Good Luck!</p>
          <BlueForm blueMoviesearch={getBlueMovie} />
          <BlueMovieDisplay blueMovie={blueMovie} />
        </div>
        </div><br/><br/><br/>

        {/* Movie Selected
        <div className="App">
          <Form moviesearch={getMovie} />
          <MovieDisplay movie={movie} />
        </div> */}

        <div>
          <RandomChoice randomMoviesearch={getRandomMovie} />
          <RandomChoiceDisplay randomMovie={randomMovie} />
        </div>

      
    </main>
  );
}

