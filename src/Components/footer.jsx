
import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
function Footer() {
  return (
    <div id="contact" className="bg-slate-900 text-white mt-10">
      <div className="max-w-6xl mx-auto p-10 grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-bold">SmartClinic</h4>
          <p className="text-sm text-slate-300 mt-2">
            Modern clinic management system.
          </p>
        </div>
        <div>
          <h4 className="font-bold">Contact</h4>
          <p className="text-sm text-slate-300">+213 000 000 000</p>
          <p className="text-sm text-slate-300">Algeria</p>
        </div>
        <div>
          <h4 className="font-bold">Quick Links</h4>
          <p className="text-sm text-slate-300">Booking</p>
          <p className="text-sm text-slate-300">Services</p>
        </div>
      </div>
    </div>
  );
}
export default Footer