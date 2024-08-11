import "./index.css";
import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookingForm from "./Components/Home/bookingForm";
import Home from "./Components/Home/home";
import Header from "./Components/Header/header";
import Footer from "./Components/footer";
import Welcome from "./Components/Welcome";
import Flights from "./Components/Home/flights";
import Hotels from "./Components/Home/hotels";
import Reviews from "./Components/Home/reviews";
import Bookings from "./Components/Home/bookings";
import SearchResults from "./Components/Home/searchresults";
import ThemeProvider from "./Components/Home/Theme";
export default function App() {
  //usestate to toggle landingpage so that the other components can be dısplayed
  const [landingPage, setLandingPage] = useState(
    JSON.parse(localStorage.getItem("landingPage")) || true
  );
  //to handle landıng page button set it to false
  const handleMoreButton = () => {
    setLandingPage(false);
  };
  const [allHotels, setAllHotels] = useState([]);
  const [allFlights, setAllFlights] = useState([]);

  return (
    <ThemeProvider>
      <Router>
        <div className="app-Container">
          {landingPage ? (
            <Welcome onLearnMore={handleMoreButton}></Welcome>
          ) : (
            <>
              <Header
                allHotels={allHotels}
                allFlights={allFlights}
              ></Header>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route
                  path="/explore hotels"
                  element={<Hotels setAllHotels={setAllHotels} />}
                ></Route>
                <Route
                  path="/explore flights"
                  element={<Flights setAllFlights={setAllFlights} />}
                ></Route>
                <Route path="/reviews" element={<Reviews />}></Route>
                <Route path="/bookings" element={<Bookings />}></Route>
                <Route path="/search-results" element={<SearchResults />} />
                <Route path="/booking-Form" element={<BookingForm />}></Route>
              </Routes>
              <Footer></Footer>
            </>
          )}
        </div>
      </Router>
    </ThemeProvider>
  );
}
