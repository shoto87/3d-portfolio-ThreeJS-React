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
      <Navbar />
    </BrowserRouter>
  );
};
