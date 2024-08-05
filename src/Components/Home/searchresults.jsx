// SearchResults.jsx
import { useLocation } from 'react-router-dom';

export default function SearchResults() {
  const location = useLocation();
  const { hotels, flights } = location.state || { hotels: [], flights: [] };

  return (
    <div className='p-6'>
      <h1 className='text-5xl mb-6 mt-4 font-bold text-center'>Search Results</h1>
      <div className="mb-8">
        <h2 className="text-3xl mb-4">Hotels</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {hotels.map((hotel, index) => (
            <div key={index} className="hotel-card p-4 border shadow-md rounded-lg flex flex-col items-center">
              <img src={hotel.max_photo_url} alt={`${hotel.hotel_name}`} />
              <h2 className="text-xl font-bold mb-2">{hotel.hotel_name}</h2>
              <p className="mb-2">{hotel.address}</p>
              <p className="mb-2">Rating: {hotel.review_score}</p>
              <p className="mb-4">Price: {hotel.min_total_price} {hotel.currency}</p>
              <button className="bg-brown text-white px-4 py-2 rounded-md">Book Hotel</button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-3xl mb-4">Flights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {flights.map((flight, index) => (
            <div key={index} className="flight-card p-4 border shadow-md rounded-lg flex flex-col items-center">
              <h2 className="text-xl font-bold mb-2">{flight.airline.name}</h2>
              <p className="mb-2">Departure: {flight.departure}</p>
              <p className="mb-2">Arrival: {flight.arrival}</p>
              <p className="mb-4">Price: {flight.price}</p>
              <button className="bg-brown text-white px-4 py-2 rounded-md">Book Flights</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
