import  { useState, useEffect } from 'react';
import reviewImage from "/reviews.png";
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
    <h1>Hotel Reviews</h1>
    <div className="review-list">
      {reviews.length === 0 ? (
        <p>No reviews available.</p>
      ) : (
        reviews.map((review, index) => (
          <div key={index} className="review-card">
            <img src={reviewImage} alt="Review" />
            <h2>{review.hotelier_name || 'No Name Provided'}</h2>
            
            <p>Pros: {review.cons || 'No Pros Provided'}</p>
            <p>Country Code: {review.countrycode || 'Not Available'}</p>
          </div>
        ))
      )}
        </div>
        </div>
  );
}


