import { useEffect, useState } from "react";

export default function Flights() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      console.log("Flights Data:", flightsData);
    } catch (error) {
      console.error("Error fetching flight data:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Available Flights</h1>
      <div className="flights-container">
        {flights.map((flight, index) => (
          <div key={index} className="flight-card">
            <p>{flight.price.currency}</p>
            <p>{flight.price.base}</p>
            <p>{flight.lastTicketingDateTime}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
