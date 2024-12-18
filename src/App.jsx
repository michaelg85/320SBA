import { useState, useEffect } from "react";
import "./App.css";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
import RedMovieDisplay from "./components/RedMovieDisplay";
import RedForm from "./components/RedForm";
import BlueMovieDisplay from "./components/BlueMovieDisplay";
import BlueForm from "./components/BlueForm";
import SelectedChoice from "./components/RandomChoice/RandomChoice";
import RandomChoiceDisplay from "./components/RandomChoiceDisplay/RandomChoiceDisplay";

export default function App() {

  // Constant with your API Key
  const apiKey = "98e3fb1f";

  // State to hold movie data
  const [movie, setMovie] = useState(null);
  const [redMovie, setRedMovie] = useState(null);
  const [blueMovie, setBlueMovie] = useState(null);
  const [randomChoice, setRandomChoice] = useState(null);
  // const [selectedMovie, setSelectedMovie] = useState(null);
  
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
      getMovie("Land Before Time");
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
      getRedMovie("Superman");
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

          // Function to get RANDOM CHOICE movies
  const getRandomChoice = async(searchTerm) => {
    // Make fetch request and store the response
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    // Parse JSON response into a JavaScript object
    const data = await response.json();
    // Set the Movie state to the received data
    setRandomChoice(data);
  };

    // // This will run on the first render but not on subsquent renders
    // useEffect(() => {
    //   getRandomChoice("Superman");
    // }, []);

  return (
    <main>
      {/* Title & description */}
      <div className="title" style={{ color: "yellow" }}>
        <h1 style={{ fontSize: "75px"}}>Whose Movie?!</h1>
        <h1>Settle it here!</h1>
        <h2>Each enter a movie and let the game decide...</h2>
      </div>

      {/* Red & Blue Columns */}
      <div className="container">
        {/* Left RED Column */}
        <div>
          <RedForm redMoviesearch={getRedMovie} />
          <RedMovieDisplay redMovie={redMovie} />
        </div>
        {/* Right BLUE Column */}
        <div>
          <BlueForm blueMoviesearch={getBlueMovie} />
          <BlueMovieDisplay blueMovie={blueMovie} />
        </div>
        </div><br/><br/><br/>

        {/* Random Choice */}
        <div className="random choice">
          <SelectedChoice redMovie={redMovie} blueMovie={blueMovie} selectedChoice={setRandomChoice} />
          <RandomChoiceDisplay randomChoice={randomChoice} />
        </div><br/><br/><br/>

        {/* Movie Search Engine */}
        
        <div className="App">
          <Form moviesearch={getMovie} />
          <MovieDisplay movie={movie} />
        </div>
      
    </main>
  );
}

