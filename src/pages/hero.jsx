
import { motion } from "framer-motion";
import img from "../assets/img.jpeg"
import { useNavigate } from "react-router-dom";
function Hero() {

  const navigate = useNavigate();
  const phone = "213XXXXXXXXX";
  const message = encodeURIComponent("مرحبا، أريد حجز موعد");
  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6 py-16">
      
      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold leading-tight">
          Modern Healthcare
          <span className="text-teal-600"> Made Simple</span>
        </h2>

        <p className="mt-4 text-slate-600">
          Book your appointment in seconds via WhatsApp or online form.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href={`https://wa.me/${phone}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-600 text-white px-5 py-3 rounded-xl hover:bg-teal-700"
          >
            Book via WhatsApp
          </a>

        

          <button 
          
           onClick={() => navigate("/services")}
          className="border border-slate-300 px-5 py-3 rounded-xl">
            Our Services
          </button>
        </div>
      </motion.div>

      {/* RIGHT - IMAGE */}
      <div className="flex items-center justify-center">
        <img
          src={img}
          alt="Doctor"
          className="rounded-3xl w-full h-[350px] object-cover shadow-lg"
        />
      </div>

    </div>
  );
}

export default Hero;