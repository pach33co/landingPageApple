import Hero from "./components/Hero";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import Highlights from "./components/Highlights"
import Colors from "./components/Colors";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Intro />
      <Highlights />
      <Colors />
    </div>
  )
}

export default App;