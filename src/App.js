import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {

  return (
    <div>
      <Header></Header>
      <Navigation></Navigation>
      <About></About>
      <Portfolio></Portfolio>
      <Resume></Resume>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
