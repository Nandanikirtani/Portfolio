import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="text-white min-h-screen">
      <Navbar />
      <div className="p-6">
        <div className="pt-5">
        <Home />
        </div>
        <About />
        <Skills/>
        <Experience/>
        <Projects/
        >
      </div>
      </div>
  );
}

export default App;
