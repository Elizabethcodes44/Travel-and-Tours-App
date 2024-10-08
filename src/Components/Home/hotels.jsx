import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useTheme} from './Theme';

// Define your API key as an environment variable
const BOOKING_API_KEY = import.meta.env.VITE_BOOKING_API_KEY;

export default function Hotels({setAllHotels}) {
  const {theme} = useTheme();
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
const navigate = useNavigate()

  useEffect(() => {
    // Define the API endpoint and query parameters
    const fetchHotels = async () => {
      try {
        // Fetch hotel data from Booking.com API
        const response = await fetch(
          "https://booking-com.p.rapidapi.com/v1/hotels/search?" +
            new URLSearchParams({
              checkin_date: "2024-12-01",
              checkout_date: "2024-12-02",
              units: "metric",
              room_number: "1",
              adults_number: "1",
              dest_id: "-1456928", // Example destination ID
              dest_type: "city",
              order_by: "popularity",
              locale: "en-gb",
              filter_by_currency: "USD",
              include_adjacency: "true",
            }),
          {
            headers: {
              "X-RapidAPI-Key": BOOKING_API_KEY,
              "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        setHotels(data.result); // Assuming 'result' contains the hotel list
        setAllHotels(data.result);
        console.log(data)
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, [setAllHotels]);
  const handleClick = (hotel) => {
    localStorage.setItem('selectedHotel', JSON.stringify(hotel)); // Save selected hotel data to local storage
    navigate("/booking-Form");
    } 
  if (loading) return <div className='text-3xl font-bold mt-6 text-center'>LOADING PAGE ...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='p-6 mt-6'>
      <h1 className='text-5xl mb-6  font-bold text-center'>HOTELS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {hotels.map((hotel, index) => (
          <div key={index} className="hotel-card p-4 border  shadow-md rounded-lg flex h-[550px] flex-col items-center">
            <img src={hotel.max_photo_url}
             alt={`${hotel.hotel_name}`}/>
            <h2 className="text-xl font-bold mb-2 mt-4">{hotel.hotel_name}</h2>
            <p className=" mb-2">{hotel.address}</p>
            <p className=" mb-2">Rating: {hotel.review_score} <span></span>/ 10</p>
            <p className=" mb-4">Price: {hotel.min_total_price} {hotel.currency_code}</p>
            <button onClick={() => handleClick(hotel)} className={`${theme === 'light' ? 'bg-brown': 'bg-gray-800'}  text-white px-4 py-2 rounded-md mt-4`}>Book Hotel</button>
          </div>
        ))}
      </div>
    </div>
  );
}


