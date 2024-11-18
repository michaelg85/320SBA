import { useState, useEffect } from "react";
import "./App.css";
// Import our components
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
  // Constant with your API Key
  const apiKey = "98e3fb1f";

  // State to hold movie data
  const [movie, setMovie] = useState(null);

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

  return (
    <main>
      {/* Title & description */}
      <div className="title" style={{ color: "yellow" }}>
        <h1>Whose Movie?</h1>
        <h2>Settle it here!</h2>
        <h3>Each enter a movie and let the game decide!</h3>
      </div>

      {/* Red & Blue Columns */}
      <div className="container">
        {/* Left Column */}
        <div className="column left" style={{ color: "red" }}>
          <h2>The Red Corner</h2>
          <p>~Godspeed~</p>
          <form>
            <input
              id='text'
              // onChange={handleChange}
              // name='searchParams'
              // type='text'
              placeholder='Enter your movie...'
            />
          </form>
          <input type="submit" value="submit" />
        </div>
        {/* Right Column */}
        <div className="column right" style={{ color: "skyblue" }}>
          <h2>The Blue Corner</h2>
          <p>Good Luck!</p>
          <form>
            <input
              id='text'
              // onChange={handleChange}
              // name='searchParams'
              // type='text'
              placeholder='Enter your movie...'
            />
          </form>
          <input type="submit" value="submit" />
        </div>
        </div><br/><br/><br/>

        {/* Movie Selected */}
        <div className="App">
          <Form moviesearch={getMovie} />
          <MovieDisplay movie={movie} />
        </div>



      
    </main>
  );
}

