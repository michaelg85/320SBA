import { useState } from "react";
import RedMovieDisplay from "../RedMovieDisplay";
import BlueMovieDisplay from "../BlueMovieDisplay";

const choice1 = RedMovieDisplay;
const choice2 = BlueMovieDisplay;

const RandomChoice = () => {
  const choices = [choice1, choice2];

  const [selectedChoice, setSelectedChoice] = useState("");

  const selectRandomChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    setSelectedChoice(choices[randomIndex]);
  };

  return (
    <div>
      {/* <h1>Random Choice Selector</h1> */}
      <button onClick={selectRandomChoice}>Choose your movie!</button>
      {selectedChoice && <h2>Selected: {RandomChoice}</h2>}
    </div>
  );
}

export default RandomChoice;