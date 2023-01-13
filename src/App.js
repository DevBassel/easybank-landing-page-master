import About from "./components/about/About";
import Articles from "./components/articles/Articles";
import Footer from "./components/footer/Footer";
import Landind from "./components/landing/Landind";
import Nav from "./components/navbar/Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <Landind />
      <About />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
