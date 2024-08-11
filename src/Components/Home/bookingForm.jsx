import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import {useTheme} from "./Theme";
const initialState = {
  name: "",
  email: " ",
  phone: "",
  checkInDate: "",
  checkOutDate: "",
  guests: "",
  rooms: "",
  roomType: "",
  bedType: "",
  specialRequest: "",
  hotel: JSON.parse(localStorage.getItem('selectedHotel')) || {},
};
export default function BookingForm(onBookingSubmit) {
  const [form, setForm] = useState(initialState);
  const navigate= useNavigate();
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  const {theme} = useTheme();
  const submitForm = async (event) => {
    event.preventDefault();
    const bookingDetails = {
      ...form,
      hotel: form.hotel,
    };
    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    existingBookings.push(bookingDetails);
    localStorage.setItem("bookings", JSON.stringify(existingBookings));
    if(onBookingSubmit && typeof onBookingSubmit === 'function' ) {onBookingSubmit(bookingDetails); //notify the parent component
    }
    setForm(initialState);
    navigate("/bookings")
  };
  
  return (
    <div className="w-[1200px] p-6  mt-10 justify-center items-center ">
        <h2 className="text-center text-5xl">Booking Form </h2>
      <form onSubmit={submitForm} className={`space-y-4`}>
        <div>
          <label className="block font-semibold">
            {" "}
            <span className="text-red-500">*</span>Name{" "}
          </label>
          <input
            onChange={handleChange}
            name="name"
            placeholder="Your Name"
            required
            value={form.name}
            className={`${theme === 'light' ? 'text-brown':'text-black'} w-full p-2 border rounded`}
          />
        </div>
        <div>
          <label className="block font-semibold">
            {" "}
            <span className="text-red-500">*</span>Email{" "}
          </label>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Your Email"
            required
            value={form.email}
            className={`${theme === 'light' ? 'text-brown':'text-black'} w-full p-2 border rounded`}
          />
        </div>
        <div>
          <label className="block font-semibold">
            {" "}
            <span className="text-red-500">*</span>Phone No{" "}
          </label>
          <input
            onChange={handleChange}
            name="phone"
            required
            value={form.phone}
            type="tel"
            className={`${theme === 'light' ? 'text-brown':'text-black'} w-full p-2 border rounded`}
          />
        </div>
        <div>
          <label className="block font-semibold">
            {" "}
            <span className="text-red-500">*</span>Check-in Date{" "}
          </label>
          <input
            onChange={handleChange}
            name="checkInDate"
            type="date"
            required
            value={form.checkInDate}
            className={`${theme === 'light' ? 'text-brown':'text-black'} w-full p-2 border rounded`}
          />
        </div>
        <div>
          <label className="block font-semibold">
            {" "}
            <span className="text-red-500">*</span>Check-out Date{" "}
          </label>
          <input
            onChange={handleChange}
            name="checkOutDate"
            value={form.checkOutDate}
            required
            className={`${theme === 'light' ? 'text-brown':'text-black'} w-full p-2 border rounded`}
            type="date"
          />
        </div>
        <div>
          <label className="block font-semibold">
            {" "}
            <span className="text-red-500">*</span>Number of Guests{" "}
          </label>
          <input
            onChange={handleChange}
            name="guests"
            type="number"
            placeholder="Number of Guests"
            required
            value={form.guests}
            className={`${theme === 'light' ? 'text-brown':'text-black'} w-full p-2 border rounded`}
          />
        </div>
        <div>
          <label className="block font-semibold">
            {" "}
            <span className="text-red-500">*</span>Number of Rooms{" "}
          </label>
          <input
            onChange={handleChange}
            name="rooms"
            type="number"
            placeholder="Number of Rooms"
            required
            value={form.rooms}
            className={`${theme === 'light' ? 'text-brown':'text-black'} w-full p-2 border rounded`}
          />
        </div>
        <div>
          <label className="block font-semibold">Room Type </label>
          <select
            onChange={handleChange}
            name="roomType"
            value={form.roomType}
            className={`${theme === 'light' ? 'text-brown':'text-black'} w-full p-2 border rounded`}
          >
            <option value="">Select a room type</option>
            <option value="Suite">Suite</option>
            <option value="Single Room">Single Room</option>
            <option value="Double Room">Double Room</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold">Bed Type</label>
          <select
            onChange={handleChange}
            name="bedType"
            value={form.bedType}
            className={`${theme === 'light' ? 'text-brown':'text-black'} w-full p-2 border rounded`}
          >
            <option value="">Select a Bed Type</option>
            <option value="King Size">King Size</option>
            <option value="Double Size">Double Size</option>
            <option value="Single Size">Single Size</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold">Special Request </label>
          <textarea
            onChange={handleChange}
            name="specialRequest"
            placeholder="Any special requests?"
            value={form.specialRequest}
            className={`${theme === 'light' ? 'text-brown':'text-black'} w-full p-2 border rounded`}
            rows="5"
          />
        </div>
        <div>
          <input
        
            type="submit"
            value="BOOK ME"
            className= {` ${theme === 'light' ? 'bg-brown' : 'bg-gray-800'} w-[200px] p-2 bg-brown text-white font-semibold rounded cursor-pointer `}
          />
        </div>
      </form>
    </div>
  );
}
