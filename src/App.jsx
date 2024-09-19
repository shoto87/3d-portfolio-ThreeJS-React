import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Contact,
  Experience,
  Feedbacks,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Hero />
          <Navbar />
          <About />
          <Experience />
          <Feedbacks />
          <Tech />
          <Works />
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
