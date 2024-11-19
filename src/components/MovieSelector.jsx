// import React, { useState } from 'react';
// import movieData from '../utilities/data.mjs';
// import BlueMovieDisplay from './BlueMovieDisplay';
// import RedMovieDisplay from './RedMovieDisplay';

// const MovieSelector = () => {
// //   const [blueMovie, setBlueMovie] = useState(null);
// //   const [redMovie, setRedMovie] = useState(null);
// //   const [selectedMovie, setSelectedMovie] = useState(null);

// //   const handleRandomSelect = () => {
// //     // Check if both movies are selected
// //     if (blueMovie && redMovie) {
// //       // Choose one at random
// //       const movies = [blueMovie, redMovie];
// //       const randomMovie = movies[Math.floor(Math.random() * movies.length)];
// //       setSelectedMovie(randomMovie);
// //     }
// //   };

//   return (
//     <div>
//       <h1>Select Your Movies</h1>
//       {/* Render the movie displays */}
//       {/* <BlueMovieDisplay blueMovie={blueMovie} />
//       <RedMovieDisplay redMovie={redMovie} /> */}
      
//       <button onClick={handleRandomSelect}>Choose Random Movie</button>
      
//       {/* Display the selected movie */}
//       {selectedMovie && (
//         <div>
//           <h1>Selected Movie:</h1>
//           <h2>{selectedMovie.Title}</h2>
//           <h3>{selectedMovie.Genre}</h3>
//           <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
//           <h3>{selectedMovie.Year}</h3>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MovieSelector;