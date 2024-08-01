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
    <main>
      <div className="">
        <div>
          <h2>
            Welcome to Elizabeth's Travel App! Discover the world with ease and
            comfort. Whether you're planning a weekend getaway or a month-long
            adventure, we've got you covered. Book your stay in top hotels
            across various locations, ensuring you find the perfect home away
            from home.
          </h2>
          <p>
            Browse and book hotels in numerous destinations worldwide, with
            options ranging from budget-friendly stays to luxury resorts.
          </p>
          <p>
            Create and customize your travel itinerary, including hotel
            bookings, flight details, and activities, all in one place.
          </p>
          <p>
            Read user reviews and ratings to make informed decisions about
            hotels, tours, and attractions.
          </p>
          <p>
            Get assistance anytime with our 24/7 customer support, ready to help
            with any questions or issues during your trip.
          </p>
          <p>
            Search and book flights at competitive prices, ensuring your travel
            plans are seamless from start to finish.
          </p>
        </div>
        <div>
          <div>
            <img src={holliday} alt="vacation" />
            <button onClick={handleHotelClick}>Explore Hotels</button>
          </div>
          <div>
            <img src={flight} alt="flight" />
            <button onClick={handleFlightsClick}>Explore Flights</button>
          </div>
        </div>
      </div>
    </main>
  );
}
