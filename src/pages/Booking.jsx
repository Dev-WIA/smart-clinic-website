
import { useState } from "react";

function Booking() {
  const [name, setName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [service, setService] = useState("");
  const [time, setTime] = useState("");

  const clinicPhone = "213XXXXXXXXX"; // رقم العيادة

  const handleBooking = () => {
    if (!name || !userPhone || !service || !time) {
      alert("Please fill all fields");
      return;
    }

    const message = encodeURIComponent(
      `📅 New Appointment Request\n\n👤 Name: ${name}\n📞 Phone: ${userPhone}\n🩺 Service: ${service}\n⏰ Time: ${time}`
    );

    window.open(`https://wa.me/${clinicPhone}?text=${message}`, "_blank");
  };

  return (
    <div id="booking" className="max-w-4xl mx-auto px-6 py-16">
      <div className="bg-white p-8 rounded-3xl shadow-sm">
        <h3 className="text-2xl font-bold mb-6">Book Appointment</h3>

        <div className="grid gap-4">
          <input
            className="p-3 border rounded-xl"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="p-3 border rounded-xl"
            placeholder="Phone Number"
            value={userPhone}
            onChange={(e) => setUserPhone(e.target.value)}
          />

          <select
            className="p-3 border rounded-xl"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="">Select Service</option>
            <option>General Medicine</option>
            <option>Dentistry</option>
          </select>

          <input
            className="p-3 border rounded-xl"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <button
            onClick={handleBooking}
            className="bg-teal-600 text-white py-3 rounded-xl hover:bg-teal-700"
          >
            Submit Booking
          </button>
        </div>
      </div>
    </div>
  );
}

export default Booking;