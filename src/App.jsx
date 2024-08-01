import "./index.css";
import "./App.css";
import {useState} from 'react';
import { BrowserRouter as  Routes, Route } from 'react-router-dom';
import Home from "./Components/Home/home";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Welcome from "./Components/Welcome";
import Flights from "./Components/Home/flights";
import Hotels from "./Components/Home/hotels";
export default function App() {
  //usestate to toggle landingpage so that the other components can be dısplayed
  const [landingPage, setLandingPage] = useState(true);
  //to handle landıng page button set it to false 
  const handleMoreButton = ()=>{
    setLandingPage(false);
  };
  return (
    <>
    <div className="app-Container">
    {landingPage ? (
      <Welcome onLearnMore = {handleMoreButton}></Welcome>
    ) : (
      <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path= "/explore hotels" element= {<Hotels/>}></Route>
        <Route path= "/explore flights" element= {<Flights/>}></Route>
      </Routes>
      <Footer></Footer>
      </>
    )}
    </div>
    </>
  );
}
