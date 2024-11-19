import { useState } from "react";
import RedForm from "./RedForm";
import BlueForm from "./BlueForm";
import RedMovieDisplay from "./RedMovieDisplay";
import BlueMovieDisplay from "./BlueMovieDisplay";

const Choice1 = RedMovieDisplay
const Choice2 = BlueMovieDisplay

export default function RandomChoice () {
  const choices = [Choice1, Choice2];

  const [selectedChoice, setSelectedChoice] = useState('');

  const selectRandomChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    setSelectedChoice(choices[randomIndex]);
  };

  return (
    <div>
      {/* <h1>Random Choice Selector</h1> */}
      <button onClick={selectRandomChoice}>Choose your movie!</button>
      {selectedChoice && (
        <h2>Selected: {RandomChoice}</h2>

      )}
    </div>
  );
}
