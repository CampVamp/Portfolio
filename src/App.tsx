import Navbar from "./components/navbar";
import Hero from "./components/hero";

function App() {
  return (
    <div className="App">
      <Navbar name="Ajay ram" />
      <div className="flex flex-row px-48 mt-20">
        <Hero />
      </div>
    </div>
  );
}

export default App;
