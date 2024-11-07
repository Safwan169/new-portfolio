import "./App.css";
import Hero from "./Componants/section/Hero";
import Navbar from "./Componants/section/Navbar";
import Skills from "./Componants/section/Skills";
import { Star } from "./Star";

function App() {
  return (
    <div className="bg-black h-full">

    <Navbar/>
    <Hero/>
    <Skills/>

      
    </div>
  );
}

export default App;
