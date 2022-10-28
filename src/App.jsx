import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Navbar from  "./components/navbar/Navbar";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
import Menu from "./components/menu/Menu";
import "./app.scss"

function App() {
  return (
    <div className="app">

      <About/>
      <Work/>
      <Contact/>
      {/* <Navbar/>
      <Menu/>
      <div className="sections">
        <Skills/>
      </div> */}
    </div>
  );
}

export default App;