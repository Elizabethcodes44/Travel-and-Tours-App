import { useState } from "react";
const initialState = {
    name: "",
    email: " ",
    message: " ",
}
export default function BookingForm() {
    const [form , setForm] = useState(initialState);
    const handleChange = (event) => {
        const { name, type, value, checked } = event.target;
        setForm({ ...form, [name]: type === "checkbox" ? checked : value });
      };
      const submitForm = async (event) => {
        event.preventDefault() }
    return(
        <div>
            <form onSubmit={submitForm}>
                <label>  <span className="text-red-500">*</span>Name  </label>
                    <input
                     onChange={handleChange}
                    name="name"
                    placeholder="Your Name"
                    required
                    value={form.name}/>
               
                <label> <span className="text-red-500">*</span>Email </label>
                    <input
                     onChange={handleChange}/>
               
                <label> <span className="text-red-500">*</span>Phone No  </label>
                    <input
                     onChange={handleChange}/>
               
               
                <label> <span className="text-red-500">*</span>Check-in Date  </label>
                    <input
                     onChange={handleChange}/>
               
                <label> <span className="text-red-500">*</span>Check-out Date </label>
                    <input  onChange={handleChange}/>
               
                <label> <span className="text-red-500">*</span>Number of Guests </label>
                    <input/>
               
                <label> <span className="text-red-500">*</span>Number of Rooms </label>
                    <input  onChange={handleChange}/>
               
                <label>Room Type
                <select id="" name="">
    <option value="">Select a room type</option>
    <option value="">Suite</option>
    <option value="">Single Room</option>
    <option value="">Double Room</option>
  </select>
                </label>
                <label>Bed Type
                <select id="referralSource" name="referralSource">
    <option value="">Select a Bed Type</option>
    <option value="">King Size</option>
    <option value="">Double Size</option>
    <option value="">Single Size</option>
  </select>
                </label>
                <label>Special Request
                    <textarea  onChange={handleChange}/>
                </label>

<input
type = "submit"
value = "BOOK ME"
/>

            </form>
        </div>
    )
}