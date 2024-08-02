import  { useState, useEffect } from 'react';

// Define your API key as an environment variable
const BOOKING_API_KEY = import.meta.env.VITE_BOOKING_API_KEY;

export default function Hotels() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        console.log(data)
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Available Hotels</h1>
      <div className="hotel-list">
        {hotels.map((hotel, index) => (
          <div key={index} className="hotel-card">
            <img src={hotel.max_photo_url}/>
            <h2>{hotel.hotel_name}</h2>
            <p>{hotel.address}</p>
            <p>Rating: {hotel.review_score}</p>
            <p>Price: {hotel.min_total_price} {hotel.currency}</p>
            <button>Book Hotel</button>
          </div>
        ))}
      </div>
    </div>
  );
}


