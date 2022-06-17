import Nav from "./components/Nav/Nav";
import "./components/Nav/nav.css";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {

  return (
    <div>
      <Nav></Nav>
      <About></About>
    <Portfolio></Portfolio>
    <Contact></Contact>
    <Footer></Footer>
    </div>
  );
}

export default App;
