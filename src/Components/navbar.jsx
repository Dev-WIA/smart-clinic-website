
import react from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold text-teal-600"> CHIFFA SmartClinic </h1>
        <div className="hidden md:flex gap-6 text-sm">
        
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          
          <Link to="/booking">Booking</Link>
           <Link to="/contact">Contact</Link>
           
        </div>
        <button
      onClick={() => navigate("/booking")}
      className="bg-teal-600 text-white px-4 py-2 rounded-xl hover:bg-teal-700"
    >
      Book Now
    </button>
      </div>
    </div>
  );
}
export default Navbar