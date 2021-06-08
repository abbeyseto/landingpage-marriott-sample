import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import banner from "./assets/home-banner.jpg";
import ValueSection from "./components/ValueSection";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-container">
        <div className="banner">
          <img src={banner} alt="home page banner" className="banner-width" />
        </div>
        <ValueSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
