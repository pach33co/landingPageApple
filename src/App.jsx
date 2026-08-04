import Hero from "./components/Hero";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import Highlights from "./components/Highlights"
import Colors from "./components/Colors";
import Accessories from "./components/Accessories";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Intro />
      <Highlights />
      <Colors />
      <Accessories />
      <Footer />
    </div>
  )
}

export default App;