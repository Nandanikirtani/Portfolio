import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="text-white min-h-screen scroll-smooth">
      <Navbar />
      <div className="p-6">
        <div className="pt-5">
        <Home />
        </div>
        <About />
        <Skills/>
      </div>
      </div>
  );
}

export default App;
