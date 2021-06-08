import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import banner from "./assets/home-banner.jpg";
import BrandLogo from "./assets/brand-logo.png";
import sheild from "./assets/shield.png";
import clock from "./assets/clock.png";
import lotus from "./assets/lotus.png";
import phone from "./assets/phone.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-container">
        <div className="banner">
          <img src={banner} alt="home page banner" className="banner-width" />
        </div>
        <section className="value-proposition">
          <header className="value-text text">Travel with Peace of Mind</header>
          <ul className="values">
            <li><img src={sheild} alt="home page banner" className="icons" />Best Rate Guarantee</li>
            <li><img src={clock} alt="home page banner" className="icons" />Commitment to Clean</li>
            <li><img src={lotus} alt="home page banner" className="icons" />Flexible Cancellation</li>
            <li><img src={phone} alt="home page banner" className="icons" />Contactless Services</li>
          </ul>
          <div className="card-dark">
          <img src={BrandLogo} alt="brand-logo" className="logo-section" />
            <h3 className="value-text">
              Marriott Bonvoy™ Member Rates. Our lowest rates. All the time.
            </h3>
            <button className="button">Sign In</button>
            <button className="button button2">Join Now</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
