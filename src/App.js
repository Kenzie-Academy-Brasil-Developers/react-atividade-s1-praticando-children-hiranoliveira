import logo from "./logo.svg";
import "./App.css";

import CenteredCard from "./components/CenteredCard";

function App() {
  const arr = ["joão", "marina", "pedro"];
  return (
    <div className="App">
      <header className="App-header">
        <CenteredCard children={arr[0]}></CenteredCard>
        <CenteredCard children={arr[1]}></CenteredCard>
        <CenteredCard children={arr[2]}></CenteredCard>
      </header>
    </div>
  );
}

export default App;
