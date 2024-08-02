import "./index.css";
import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/home";
import Header from "./Components/Header/header";
import Footer from "./Components/footer";
import Welcome from "./Components/Welcome";
import Flights from "./Components/Home/flights";
import Hotels from "./Components/Home/hotels";
import Reviews from "./Components/Home/reviews";
export default function App() {
  //usestate to toggle landingpage so that the other components can be dısplayed
  const [landingPage, setLandingPage] = useState(true);
  //to handle landıng page button set it to false
  const handleMoreButton = () => {
    setLandingPage(false);
  };
  const currentTheme = localStorage.getItem("currentTheme");
  const [theme, setTheme] = useState(currentTheme ? currentTheme : "light");
  useEffect(() => {
    localStorage.setItem("currentTheme", theme);
  }, [theme]);
  return (
    <Router>
      <div className={`app-Container ${theme}`}>
        {landingPage ? (
          <Welcome onLearnMore={handleMoreButton}></Welcome>
        ) : (
          <>
            <Header theme={theme} setTheme={setTheme}></Header>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/explore hotels" element={<Hotels />}></Route>
              <Route path="/explore flights" element={<Flights />}></Route>
              <Route path="/reviews" element={<Reviews />}></Route>
            </Routes>
            <Footer></Footer>
          </>
        )}
      </div>
    </Router>
  );
}
