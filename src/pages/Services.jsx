import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

function Services() {
  const data = [
    { title: "General Medicine", desc: "Primary healthcare services" },
    { title: "Dentistry", desc: "Dental care & cleaning" },
    { title: "Dermatology", desc: "Skin treatments & care" },
    { title: "Pediatrics", desc: "Child healthcare" },
  ];

  return (
    <div id="services" className="max-w-6xl mx-auto px-6 py-10">
      <h3 className="text-2xl font-bold mb-6">Our Services</h3>
      <div className="grid md:grid-cols-4 gap-4">
        {data.map((s, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <div className="w-10 h-10 bg-teal-100 rounded-xl mb-3" />
            <h4 className="font-semibold">{s.title}</h4>
            <p className="text-sm text-slate-500">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Services