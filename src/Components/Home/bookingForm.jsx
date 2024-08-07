import { useState } from "react";
const initialState = {
    name: "",
    email: " ",
    message: " ",
}
export default function BookingForm() {
    const [form , setForm] = useState(initialState);
    return(
        <div>
            <form>
                <label> Name
                    <input
                    name="text"
                    value={form.name}/>
                </label>
                <label>Email
                    <input/>
                </label>
                <label>Phone No
                    <input/>
                </label>
               
                <label> Check-in Date
                    <input/>
                </label>
                <label>Check-out Date 
                    <input/>
                </label>
                <label>Number of Guests
                    <input/>
                </label>
                <label>Number of Rooms
                    <input/>
                </label>
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
                    <textarea/>
                </label>

<input
/>

            </form>
        </div>
    )
}