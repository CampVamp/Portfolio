import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar name="Ajay ram" />
      <div className="flex flex-row px-48 mt-4  0">
        <Hero />
      </div>
      <Footer />
    </div>
  );
}

export default App;
