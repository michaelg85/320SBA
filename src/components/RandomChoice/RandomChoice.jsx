import { useState } from "react";
import RedMovieDisplay from "../RedMovieDisplay";
import BlueMovieDisplay from "../BlueMovieDisplay";

const RandomChoice = () => {
  const [selectedChoice, setSelectedChoice] = useState("");

  const selectRandomChoice = () => {
    const choices = [<RedMovieDisplay />, <BlueMovieDisplay />];
    const randomIndex = Math.floor(Math.random() * choices.length);
    setSelectedChoice(choices[randomIndex]);
  };

  return (
    <div style={{ color: "yellow", fontStyle: "italic" }}>
      <h1>Random Choice Selector</h1>
      <button
        onClick={selectRandomChoice}
        style={{ color: "yellow", fontStyle: "italic" }}
      >
        Click to reveal your destiny!
      </button>
      {selectedChoice && <h1>The Winner is {selectedChoice}</h1>}
    </div>
    // <h2>Selected</h2>
    // {selectedChoice}
  );
};

export default RandomChoice;

// // Alternative return statement
// return (
//   <div>
//     {/* <h1>Random Choice Selector</h1> */}
//     <button onClick={selectRandomChoice}>Choose your movie!</button>
//     {selectedChoice && (
//       <div>
//         <h2>The Champion!</h2>
//         {/* Render the selected choice as a component */}
//         {selectedChoice && <selectedChoice />}
//       </div>
//     )}
//   </div>
// );
// };
