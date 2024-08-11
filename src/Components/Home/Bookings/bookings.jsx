import { useState, useEffect } from "react";
import { useTheme } from "../Theme";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const { theme } = useTheme();
  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem("bookings"));
    setBookings(savedBookings || []);
  }, []);

  const deleteBooking = (index) => {
    const updatedBookings = bookings.filter((_, i) => i !== index);
    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
  };

  return (
    <div className="p-6  mt-6 min-h-screen">
      <h2 className="text-5xl  text-center ">My Bookings</h2>
      {bookings.length > 0 ? (
        bookings.map((booking, index) => (
          <div key={index} className="p-4 mb-4 rounded-lg shadow-md leading-7">
            <h3 className="text-lg font-semibold mb-2">Booking {index + 1}</h3>
            <p>
              <strong>Name:</strong> {booking.name}
            </p>
            <p>
              <strong>Email:</strong> {booking.email}
            </p>
            <p>
              <strong>Phone:</strong> {booking.phone}
            </p>
            <p>
              <strong>Check-in Date:</strong> {booking.checkInDate}
            </p>
            <p>
              <strong>Check-out Date:</strong> {booking.checkOutDate}
            </p>
            <p>
              <strong>Number of Guests:</strong> {booking.guests}
            </p>
            <p>
              <strong>Number of Rooms:</strong> {booking.rooms}
            </p>
            <p>
              <strong>Room Type:</strong> {booking.roomType}
            </p>
            <p>
              <strong>Bed Type:</strong> {booking.bedType}
            </p>
            <p>
              <strong>Special Request:</strong> {booking.specialRequest}
            </p>
            {booking.hotel && (
              <div className="mt-4">
                <h4 className="text-lg font-semibold">Hotel Details</h4>
                <p>
                  <strong>Name:</strong> {booking.hotel.hotel_name}
                </p>
                <p>
                  <strong>Address:</strong> {booking.hotel.address}
                </p>
                <p>
                  <strong>Rating:</strong> {booking.hotel.review_score}/10
                </p>
                <p>
                  <strong>Price:</strong> {booking.hotel.min_total_price}{" "}
                  {booking.hotel.currency}
                </p>
              </div>
            )}
            <div className="mt-4 flex space-x-4">
              <button
                className={`${
                  theme === "light" ? "bg-brown" : "bg-gray-800"
                } text-white text-[20px] rounded-xl py-2 px-4`}
                onClick={() => deleteBooking(index)}
              >
                DELETE
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-xl font-semibold mt-4"> No bookings available.</p>
      )}
    </div>
  );
}
