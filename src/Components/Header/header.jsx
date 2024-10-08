import "./Navbar.css";
import { Link, useNavigate,  } from "react-router-dom";
import { useEffect, useState } from "react";
import whiteLogo from "/logolight.png";
import blackLogo from "/logo.png";
import searchw from "../../assets/search-w.png";
import searchb from "../../assets/search-w.png";
import day from "../../assets/night.png";
import night from "../../assets/day.png";
import {useTheme} from "../Home/Theme";
export default function Header({ allFlights, allHotels}) {
  const {theme, toggleTheme} = useTheme();
  const [query, setQuery] = useState('');
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if(query.length === 0) {
      setFilteredHotels(allHotels);
      setFilteredFlights(allFlights);
    } else {
      setFilteredHotels(
        allHotels.filter(hotel => hotel.hotel_name.toLowerCase().includes(query.toLowerCase())
      )
      );
      setFilteredFlights(
        allFlights.filter(flight =>
         
          flight.lastTicketingDateTime.toLowerCase().includes(query.toLowerCase())
        )
      );
    }

  }, [query, allHotels, allFlights]);
  const handleSearch = (event) => {
    event.preventDefault();
    navigate('/search-results', {state: {hotels: filteredHotels, flights: filteredFlights}});
  };

  
  
  return (
    <header>
    <div className={`navbar ${theme === 'light' ? 'bg-cream' : 'bg-black'}`}>
      <img src={theme == 'light' ? whiteLogo : blackLogo} alt="logo" className="logo" />
      <ul className="font-bold ">
        <li ><Link to="/" >Home</Link></li>
        <li><Link to="/explore hotels">Hotels</Link></li>
        <li><Link to="/explore flights">Flights</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li><Link to="/bookings">Bookings</Link></li>
      </ul>
      <form onSubmit={handleSearch} className={`search-box flex items-center space-x-2 ${theme === 'light' ? 'bg-brown text-white' : 'bg-gray-800 text-white'}`}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="p-2 border rounded"
          />
          <img src={theme === 'light' ? searchw : searchb} alt="search-icon" />
        </form>
      <img onClick={()=>{toggleTheme()}} src={theme == 'light' ? day : night} alt="toggleicon" className="toggle-icon"/>
    </div>
    </header>
  );
}
