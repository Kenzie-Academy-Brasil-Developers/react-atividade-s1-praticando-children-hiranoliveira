import logo from "./logo.svg";
import "./App.css";

import CenteredCard from "./components/CenteredCard";

function App() {
  const arr = ["joão", "marina", "pedro"];
  return (
    <div className="App">
      <header className="App-header">
        <CenteredCard>
          <h1>OI</h1>
        </CenteredCard>
      </header>
    </div>
  );
}

export default App;
