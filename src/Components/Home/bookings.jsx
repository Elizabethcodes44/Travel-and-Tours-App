import { useState, useEffect } from "react";
const deleteBooking =  2
export default function Bookings(){
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem("bookings"))
    setBookings(savedBookings);

  }, []);
  return (
    <div>
      <h2>Your Bookings</h2>
      {bookings.length > 0 ? (
        bookings.map((booking, index) => (
          <div key={index} className="p-4  m-2 ">
            <h3>Booking {index + 1}</h3>
            <p>Name: {booking.name}</p>
            <p>Email: {booking.email}</p>
            <p>Phone: {booking.phone}</p>
            <p>Check-in Date: {booking.checkInDate}</p>
            <p>Check-out Date: {booking.checkOutDate}</p>
            <p>Number of Guests: {booking.guests}</p>
            <p>Number of Rooms: {booking.rooms}</p>
            <p>Room Type: {booking.roomType}</p>
            <p>Bed Type: {booking.bedType}</p>
            <p>Special Request: {booking.specialRequest}</p>
            {booking.hotel && (
              <div className="hotel-info">
                <h4>Hotel Details</h4>
                <p>Name: {booking.hotel.hotel_name}</p>
                <p>Address: {booking.hotel.address}</p>
                <p>Rating: {booking.hotel.review_score}/10</p>
                <p>Price: {booking.hotel.min_total_price} {booking.hotel.currency}</p>
                <button className="bg-brown text-[15px] rounded-xl text-white h-[40px] w-[150px]"onClick= {deleteBooking}>DELETE</button>
                <button className="bg-brown text-[15px] ml-4 rounded-xl text-white h-[40px] w-[150px]">EDIT</button>
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No bookings available.</p>
      )}
    </div>
  )
}

