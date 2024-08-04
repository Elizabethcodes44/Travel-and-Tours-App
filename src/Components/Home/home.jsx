import { useNavigate } from "react-router-dom";
import flight from "/flights.png";


import holliday from "/hotelimage.png";
export default function Home() {
  const navigate = useNavigate();
  const handleHotelClick = () => {
      navigate('/explore hotels');
    };
    const handleFlightsClick= () => {
      navigate('explore flights')
    }
  return (
    //https://booking-com.p.rapidapi.com/v1/hotels/search
    <main className="flex flex-col justify-center items-center min-h-screen  ">
      <div className="max-w-6xl w-full   p-6 mb-6">
        
          <h2 className="text-5xl mb-4">
            Welcome to My Travel App! Discover the world with ease and
            comfort. 
          </h2>
          <p className="text-[15px]">
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
       
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col items-center text-center  p-4 rounded-lg shadow">
            <img src={holliday} alt="vacation" className="w-full h-auto mb-4 rounded-lg" />
            <button onClick={handleHotelClick}
            className="bg-brown text-white px-4 py-2 rounded-md "
            >Explore Hotels</button>
          </div>
          <div className="flex flex-col items-center text-center  p-4 rounded-lg shadow">
            <img src={flight} alt="flight"
            className="w-full h-auto mb-4 rounded-lg" />
            <button onClick={handleFlightsClick}
            className="bg-brown text-white px-4 py-2 rounded-md">Explore Flights</button>
          </div>
        </div>
      </div>
    </main>
  );
}
