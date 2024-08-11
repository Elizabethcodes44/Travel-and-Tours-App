import { useEffect, useState } from "react";
import airplane from '/airplane.jpeg';
import { useNavigate } from "react-router-dom";
export default function Flights({setAllFlights}) {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/booking-Form")
  }

  useEffect(() => {
  const fetchFlights = async () => {
    try {
      // Fetch the access token
      const authResponse = await fetch(
        "https://test.api.amadeus.com/v1/security/oauth2/token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            grant_type: "client_credentials",
            client_id: import.meta.env.VITE_AMADEUS_API_KEY,
            client_secret: import.meta.env.VITE_AMADEUS_API_SECRET,
          }),
        }
      );

      if (!authResponse.ok) {
        const errorText = await authResponse.text();
        console.error("Auth Response Error:", errorText);
        throw new Error(`Authentication failed: ${authResponse.status}`);
      }

      const authData = await authResponse.json();
      const accessToken = authData.access_token;

      // Fetch flight data
      const flightsResponse = await fetch(
        "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=SFO&destinationLocationCode=LAX&departureDate=2024-12-01&adults=1",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!flightsResponse.ok) {
        const errorText = await flightsResponse.text();
        console.error("Flight Response Error:", errorText);
        throw new Error(`Flight search failed: ${flightsResponse.status}`);
      }

      const flightsData = await flightsResponse.json();
      setFlights(flightsData.data);
      setAllFlights(flightsData.data);
      console.log("Flights Data:", flightsData);
    } catch (error) {
      console.error("Error fetching flight data:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

 
    fetchFlights();
  }, [setAllFlights]);

  if (loading) return <div className='text-3xl font-bold mt-6 text-center'>LOADING PAGE ...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-6  min-h-screen mt-6">
      <h1 className="text-5xl font-bold mb-6 text-center">Flights</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {flights.map((flight, index) => (
          <div key={index} className=" rounded-lg shadow-lg overflow-hidden w-full sm:w-80 md:w-96">
            <img src={airplane} alt={flight.lastTicketingDateTime}  className="w-full h-48 object-cover"/>
            <div className="p-4 border   rounded-lg ">
            <p className="text-[20px] font-semibold ">Airline Code: {flight.validatingAirlineCodes}</p>
              <p className="text-[15px] mt-2 ">Available seats: {flight.numberOfBookableSeats}</p>
              <p className="text-[15px] mt-2 ">Checked Bags: {flight.pricingOptions.includedCheckedBagsOnly || "Check with customer service"} </p>
            <p className="text-[15px] mt-2 ">{flight.price.currency} {flight.price.base}</p>
            
            <p className="text-[15px] mt-2 ">{flight.lastTicketingDateTime}</p>
            <button onClick={handleClick} className="w-full bg-brown text-white py-2 px-4 mt-4 rounded-md ">Book Flight</button>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
}
