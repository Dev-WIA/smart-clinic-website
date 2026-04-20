import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Navbar from "./Components/navbar"
import Footer from "./Components/footer"
import ChatWidget from "./pages/ChatWidget"
import Booking from "./pages/Booking";
import Services from "./pages/Services"
import Hero from "./pages/hero"

 function App() {
  return (
    <div className="font-sans bg-slate-50 text-slate-800">
      <Navbar />
           <Routes>
      <Route path="/" element={<Hero />} />
     <Route path="/services" element={<Services />}/>
      
      <Route path="/booking" element={<Booking />} />
    </Routes>
      
   
      <Footer/>
     <ChatWidget />
      
    </div>
  );
}
export default App