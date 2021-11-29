import { Route, Routes } from "react-router";
import "./App.css";
import CharInfo from "./pages/CharInfo";
import CharList from "./pages/CharList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharList />} />
        <Route path="/:charID" element={<CharInfo />} />
      </Routes>
    </div>
  );
}

export default App;
