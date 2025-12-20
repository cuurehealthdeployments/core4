import React from "react";
import { Link } from "react-router-dom";

const Investors = () => {
  const items = [
    { label: "Details of business", path: "/investors/material-creditors", icon: "/images/investors icon/iv8.png" },
    { label: "List of KMP", path: "/investors/material-contracts", icon: "/images/investors icon/iv7.png" },
    { label: "Board Of Directors", path: "/management-team", icon: "/images/investors icon/iv1.png" },
    { label: "Share Holders Documents", path: "/investors/material-contracts", icon: "/images/investors icon/iv7.png" },
    { label: "Board commities", path: "/investors/material-contracts", icon: "/images/investors icon/iv7.png" },
    { label: "Financial results", path: "/investors/material-contracts", icon: "/images/investors icon/iv7.png" },
    { label: "Share holding patterns", path: "/investors/material-contracts", icon: "/images/investors icon/iv7.png" },
    { label: "Board meeting notice and outcome", path: "/investors/material-contracts", icon: "/images/investors icon/iv7.png" },
    { label: "Subsidary Financials", path: "/investors/material-contracts", icon: "/images/investors icon/iv7.png" },
    { label: "Associate finincials", path: "/investors/material-contracts", icon: "/images/investors icon/iv7.png" },
    { label: "Corporate Policies", path: "/corporate-oversight", icon: "/images/investors icon/iv3.png" },
    { label: "Annual Report ", path: "/reports", icon: "/images/investors icon/iv2.png" },
    { label: "IPO", path: "/investors/ipo", icon: "/images/investors icon/iv6.png" },
    { label: "annual returns", path: "/investors/ipo", icon: "/images/investors icon/iv6.png" },
    { label: "news and information", path: "/investors/ipo", icon: "/images/investors icon/iv6.png" },
    { label: "corporate announcements", path: "/investors/ipo", icon: "/images/investors icon/iv6.png" },
    { label: "corporate information", path: "/investors/ipo", icon: "/images/investors icon/iv6.png" },
    { label: "AGM notice", path: "/investors/ipo", icon: "/images/investors icon/iv6.png" },
    { label: "Material creditors", path: "/investors/ipo", icon: "/images/investors icon/iv6.png" },
    { label: "Material contracts", path: "/investors/ipo", icon: "/images/investors icon/iv6.png" },
    { label: "Material documents", path: "/investors/ipo", icon: "/images/investors icon/iv6.png" },
    { label: "secretiriol componets report", path: "/investors/ipo", icon: "/images/investors icon/iv6.png" },
    
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
