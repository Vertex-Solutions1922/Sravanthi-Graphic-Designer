import { LayoutGroup } from "framer-motion";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Work from "./components/Work/Work";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";


function App() {
  return (
    <LayoutGroup>
      <Header />
      <Home />
      <About />
      <Services />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
    </LayoutGroup>
  );
}

export default App;