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
                <label>
                    <input
                    name="text"
                    value={form.name}/>
                </label>
            </form>
        </div>
    )
}