import  { useState, useEffect } from 'react';
import reviewImage from "../../assets/reviews.png";


// Define your API key as an environment variable
const BOOKING_API_KEY = import.meta.env.VITE_BOOKING_API_KEY;

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Define the API endpoint and query parameters
    const fetchReviews = async () => {
      try {
        // Fetch review data from Booking.com API
        const response = await fetch(
          "https://booking-com.p.rapidapi.com/v1/hotels/reviews?customer_type=solo_traveller,review_category_group_of_friends&locale=en-gb&sort_type=SORT_MOST_RELEVANT&language_filter=en-gb,de,fr&hotel_id=1676161&page_number=0",
           {
            headers: {
              "X-RapidAPI-Key": BOOKING_API_KEY,
              "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
            },
          }
        );

        if (!response.ok) {
          const errorText = await response.text();
          console.error("Response Error:", errorText);
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data);
        setReviews(data.result || []); // Assuming 'result' contains the review list
        
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) return <div>LOADING PAGE ...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-6  mt-6 min-h-screen">
     
    <h1 className="text-4xl font-bold mb-6 text-center">Hotel Reviews</h1>
    <div className="space-y-6">
      {reviews.length === 0 ? (
        <p className="text-center ">No reviews available.</p>
      ) : (
        reviews.map((review, index) => (
          <div key={index} className=" p-4 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-4">
            <img src={reviewImage} alt="Review" className="w-16 h-16 object-cover rounded-full" />
            <h2 className="text-xl font-semibold ">{review.hotelier_name || 'No Name Provided'}</h2>
            </div>
            <p className=" mb-2">
            <span className="font-semibold">Pros: {review.pros}</span> </p>
            <p className=" mb-2">
            <span className="font-semibold">Cons: {review.cons}</span> </p>
            <p className=" mb-2">
            <span className="font-semibold">{review.date}</span> </p>
            <p className=" mb-2">
            <span className="font-semibold">Average Score: {review.average_score}</span> </p>
            <p className=" mb-2">
            <span className="font-semibold">Travel Purpose: {review.travel_purpose}</span> </p>
            <p className=" ">
            <span className="font-semibold">Country Code:</span> {review.countrycode || 'Not Available'}
            </p>
          </div>
        ))
      )}
        </div>
        </div>
  );
}


