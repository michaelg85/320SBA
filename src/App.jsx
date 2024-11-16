import { useState } from "react";
import MovieSelector from "./components/MovieSelector";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      {/* Title & description */}
      <div className="title" style={{ color: "yellow" }}>
        <h1>Whose Movie?</h1>
        <h2>Need help choosing a movie?</h2>
        <h3>Each enter a movie and let the game decide!</h3>
      </div>

      {/* Red & Blue Columns */}
      <div className="container">
        {/* Left Column */}
        <div className="column left" style={{ color: "red" }}>
          <h2>The Red Corner</h2>
          <p>This is the left column.</p>
          <form>
            <input
              id='text'
              // onChange={handleChange}
              // name='searchParams'
              // type='text'
              placeholder='Enter your movie...'
            />
          </form>
        </div>
        {/* Right Column */}
        <div className="column right" style={{ color: "skyblue" }}>
          <h2>The Blue Corner</h2>
          <p>This is the right column.</p>
          <form>
            <input
              id='text'
              // onChange={handleChange}
              // name='searchParams'
              // type='text'
              placeholder='Enter your movie...'
            />
          </form>
        </div>


        
      </div>
    </main>
  );
}

export default App;
