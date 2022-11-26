import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import About from "./components/about";

function App() {
  return (
    <div className="App">
      <Navbar name="Ajay ram" />
      <div className="flex flex-col px-48">
        <Hero />
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default App;
