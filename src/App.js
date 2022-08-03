import "./App.css";
import Cardinfo from "./compnent/cardinfo";
import Classes from "./compnent/ourclasses";
import Home from "./compnent/header";
import Nav from "./compnent/Nav";
import About from "./compnent/About";
import Contact from "./compnent/contact";
import Footer from "./compnent/footer";
import Teacher from "./compnent/teacher";
import Activities from "./compnent/Activities";
function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Cardinfo />
      <About />
      <Classes />
      <Teacher />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
