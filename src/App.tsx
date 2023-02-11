import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="text-sky-400 font-josefin-sans">
        How do you perceive the partisanship of the Supreme Court?
      </h1>
    </div>
  );
}

export default App;
