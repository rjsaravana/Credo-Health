import "./App.css";
import About from "./app/about";
import Contact from "./app/contact";
import Credocard from "./app/credo-card";
import EffectTool from "./app/effective-tool";
import Home from "./app/home";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Home />
      <Credocard />
      <About />
      <EffectTool />
      <Contact />
    </>
  );
}

export default App;
