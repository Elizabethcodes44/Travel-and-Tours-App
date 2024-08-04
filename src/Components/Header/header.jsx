import "./Navbar.css";
import { Link } from "react-router-dom";
import blackLogo from "/logolight.png";
import whiteLogo from "/logo.png";
import searchw from "/search-w.png";
import searchb from "/search-b.png";
import day from "/night.png";
import night from "/day.png";
export default function Header({theme, setTheme}) {
  const toggleMode = () => {
    theme == 'light'? setTheme('dark') : setTheme('light');
  }
  
  return (
    <header>
    <div className="navbar">
      <img src={theme == 'light' ? whiteLogo : blackLogo} alt="logo" className="logo" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/explore hotels">Hotels</Link></li>
        <li><Link to="/explore flights">Flights</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li><Link to="/bookings">Bookings</Link></li>
      </ul>
      <div className="search-box">
        <input type="text" placeholder="Search"></input>
        <img src={theme == 'light' ? searchw : searchb} alt="search-icon"/>
      </div>
      <img onClick={()=>{toggleMode()}} src={theme == 'light' ? day : night} alt="toggleicon" className="toggle-icon"/>
    </div>
    </header>
  );
}
