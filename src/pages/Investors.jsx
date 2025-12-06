import React from "react";
import { Link } from "react-router-dom";

const Investors = () => {
  const items = [
    { label: "Board Of Directors", path: "/management-team", icon: "/images/investors icon/iv1.png" },
    { label: "Annual Returns & Financial Reports", path: "/investors/annual-returns", icon: "/images/investors icon/iv2.png" },
    { label: "Corporate Oversight", path: "/investors/corporate-oversight", icon: "/images/investors icon/iv3.png" },
    { label: "Corporate Updates", path: "/investors/corporate-updates", icon: "/images/investors icon/iv4.png" },
    { label: "Investor Concerns", path: "/investors/investor-concerns", icon: "/images/investors icon/iv5.png" },
    { label: "IPO", path: "/investors/ipo", icon: "/images/investors icon/iv6.png" },
    { label: "Material Contracts", path: "/investors/material-contracts", icon: "/images/investors icon/iv7.png" },
    { label: "Material Creditors", path: "/investors/material-creditors", icon: "/images/investors icon/iv8.png" },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-start pt-24 items-center bg-gray-50 p-6">
      <h1 className="text-5xl font-bold mb-8 text-gray-800">
        Investors Space
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {items.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="
              bg-white shadow-md rounded-xl p-5 
              flex flex-col items-center justify-center gap-3
              text-center text-lg font-semibold 
              hover:bg-gray-300 hover:text-black 
              transition-all duration-300 border border-gray-200"
          >
            {/* ICON SPACE FOR YOUR OWN IMAGES */}
            <img 
              src={item.icon} 
              alt={item.label}
              className="w-16 h-16 object-contain"
            />

            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Investors;
