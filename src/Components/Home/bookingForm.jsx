import { useState } from "react";
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
}
export default function BookingForm() {
    const [form , setForm] = useState(initialState);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value});
      };
      const submitForm = async (event) => {
        event.preventDefault() }
    return(
        <div className="w-[1200px] p-6  mt-10 justify-center items-center ">
            <form onSubmit={submitForm} className="space-y-4">
                <div>
                <label className="block font-semibold">  <span className="text-red-500">*</span>Name  </label>
                    <input
                     onChange={handleChange}
                    name="name"
                    placeholder="Your Name"
                    required
                    value={form.name}
                    className="w-full p-2 border rounded"/>
              </div>
              <div>
                <label className="block font-semibold"> <span className="text-red-500">*</span>Email </label>
                    <input
                     onChange={handleChange}
                     name="email"
                     type="email"
                     placeholder="Your Email"
                     required
                     value = {form.email}
                     className="w-full p-2 border rounded"/>
              </div>
              <div>
                <label className="block font-semibold"> <span className="text-red-500">*</span>Phone No  </label>
                    <input
                     onChange={handleChange}
                     name="phone"
                     required
                     value={form.phone}
                     type="tel"
                     className="w-full p-2 border rounded"/>
              </div>
               <div>
                <label  className="block font-semibold"> <span className="text-red-500">*</span>Check-in Date  </label>
                    <input
                     onChange={handleChange}
                     name="checkInDate"
                     type="date"
                     required
                     value={form.checkInDate}
                      className="w-full p-2 border rounded"
                     />
                    
               </div>
               <div>
                <label className="block font-semibold"> <span className="text-red-500">*</span>Check-out Date </label>
                    <input  onChange={handleChange}
                    name="checkOutDate"
                    value={form.checkOutDate}
                    required
                    className="w-full p-2 border rounded"
                    type="date"/>
                    </div>
                    <div>
                <label className="block font-semibold"> <span className="text-red-500">*</span>Number of Guests </label>
                    <input 
                    onChange={handleChange}
                    name="guests"
                    type="number"
                    placeholder="Number of Guests"
                    required
                    value={form.guests}
                    className="w-full p-2 border rounded"/>
                    </div>
                    <div>
                <label className="block font-semibold"> <span className="text-red-500">*</span>Number of Rooms </label>
                    <input  onChange={handleChange}name="rooms"
            type="number"
            placeholder="Number of Rooms"
            required
            value={form.rooms}
            className="w-full p-2 border rounded"/>
                    </div>
                    <div>
                <label className="block font-semibold">Room Type </label>
                <select onChange={handleChange}
            name="roomType"
            value={form.roomType}
            className="w-full p-2 border rounded" >
    <option value="">Select a room type</option>
    <option value="Suite">Suite</option>
    <option value="Single Room">Single Room</option>
    <option value="Double Room">Double Room</option>
   </select>
  </div>
             <div>  
                <label className="block font-semibold">Bed Type</label>
                <select  onChange={handleChange}
            name="bedType"
            value={form.bedType}
            className="w-full p-2 border rounded">
    <option value="">Select a Bed Type</option>
    <option value="King Size">King Size</option>
    <option value="Double Size">Double Size</option>
    <option value="Single Size">Single Size</option>
  </select>
  </div>
               <div>
                <label className="block font-semibold">Special Request  </label>
                    <textarea  onChange={handleChange}name="specialRequest"
            placeholder="Any special requests?"
            value={form.specialRequest}
            className="w-full p-2 border rounded"
            rows="5"
            />
               
                </div> 
                <div>
<input
type = "submit"
value = "BOOK ME"
className="w-[200px] p-2 bg-brown text-white font-semibold rounded cursor-pointer "
/>
</div>
            </form>
        </div>
    )
}