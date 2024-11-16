import React, { useEffect, useState } from "react";
import axios from "axios";

const MovieSelector = ({ onSelect }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  // Constant with your API Key
  const apiKey = "98e3fb1f";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}"
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  const handleSelect = (movie) => {
    onSelect(movie);
  };

  if (loading) return <div>Loading movies...</div>

  return (
    <div>
      <h2>Select a Movie</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <button onClick={() => handleSelect(movie)}>{movie.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieSelector;
