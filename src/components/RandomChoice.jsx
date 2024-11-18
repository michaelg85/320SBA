import { useState } from "react";
import RedForm from "./RedForm";
import BlueForm from "./BlueForm";

export default function RandomChoice() {
  const choices = [RedForm, BlueForm];

  const [selectedChoice, setSelectedChoice] = useState("");

  const selectRandomChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    setSelectedChoice(choices[randomIndex]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Random Choice Selector</h1>
      <button onClick={selectRandomChoice}>Select Random Choice</button>
      {selectedChoice && (
        <h2 style={{ marginTop: "20px" }}>Selected: {selectedChoice}</h2>
      )}
    </div>
  );
}
