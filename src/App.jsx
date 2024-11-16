import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <div className="title" style={{ color: "lightbronze" }}>
        <h1>Movie Picker</h1>
      </div>
      <div className="container">
        <div className="column left" style={{ color: "red" }}>
          {/* Left Column Content */}
          <h2>The Red Corner</h2>
          <p>This is the left column.</p>
        </div>
        <div className="column right" style={{ color: "skyblue" }}>
          {/* Right Column Content */}
          <h2>The Blue Corner</h2>
          <p>This is the right column.</p>
        </div>
      </div>
    </main>
  );
}

export default App;
