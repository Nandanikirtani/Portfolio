import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <HashRouter>
      <div className="text-white min-h-screen">
        <Navbar />
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
