import { useNavigate } from "react-router-dom";
import flight from "/flights.png";
import {useTheme} from "./Theme";

import holliday from "/hotelimage.png";
export default function Home() {
  //to navigate to the lıst of hotels
  const navigate = useNavigate();
  const handleHotelClick = () => {
      navigate('/explore hotels');
    };
    const handleFlightsClick= () => {
      navigate('explore flights')
    }
    const {theme} = useTheme();
  return (
    //https://booking-com.p.rapidapi.com/v1/hotels/search
    <main className="flex flex-col justify-center items-center min-h-screen  mt-10 ">
      <div className="max-w-6xl w-full   p-6 mb-6">
        
          <h2 className="text-5xl mb-4 leading-1">
            Welcome To My Travel App! Discover The World With Ease And
            Comfort. 
          </h2>
          <p className="text-[20px] leading-10 mt-10">
            Browse and book hotels in numerous destinations worldwide, with
            options ranging from budget-friendly stays to luxury resorts.
         
            Create and customize your travel itinerary, including hotel
            bookings, flight details, and activities, all in one place.
         
            Read user reviews and ratings to make informed decisions about
            hotels, tours, and attractions.
         
            Get assistance anytime with our 24/7 customer support, ready to help
            with any questions or issues during your trip.
         
            Search and book flights at competitive prices, ensuring your travel
            plans are seamless from start to finish.
          </p>
       
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="flex flex-col items-center text-center  p-4 rounded-lg shadow">
            <img src={holliday} alt="vacation" className="w-full h-auto mb-4 rounded-lg" />
            <button onClick={handleHotelClick}
            className={`${theme === 'light'? 'bg-brown' : 'bg-gray-800'}  text-white px-4 py-2 rounded-md mt-5`}
            >Explore Hotels</button>
          </div>
          <div className="flex flex-col items-center text-center  p-4 rounded-lg shadow">
            <img src={flight} alt="flight"
            className="w-full h-auto mb-4 rounded-lg" />
            <button onClick={handleFlightsClick}
            className={`${theme === 'light'? 'bg-brown' : 'bg-gray-800'}  text-white px-4 py-2 rounded-md mt-5`}>Explore Flights</button>
          </div>
        </div>
      </div>
    </main>
  );
}
