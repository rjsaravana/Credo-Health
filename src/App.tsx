import "./App.css";
import About from "./app/about";
import Contact from "./app/contact";
import Credocard from "./app/credo-card";
import EffectTool from "./app/effective-tool";
import Home from "./app/home";
import Menu from "./app/menu";
import Navbar from "./app/navbar";
import UserReview from "./app/userreview";

function App() {
  return (
    <>
      <div className="container-fluid">
      <Navbar />
      <Home />
      <Credocard />
      <About />
      <EffectTool />
      <Contact />
      <UserReview />
      <Menu />
      </div>
    
    </>
  );
}

export default App;
