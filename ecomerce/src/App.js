import logo from "./logo.svg";
import "./App.css";

import Products from "./pages/Products";
import Allroute from "./components/Allroute";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Allroute />
    </div>
  );
}

export default App;
