import React from "react";
import { Link } from "react-router-dom";

const Investors = () => {
  const items = [
    { label: "Details of business", path: "/business-details", icon: "/images/investors icon/iv01.png" },
    { label: "List of KMP", path: "/kmp", icon: "/images/investors icon/iv02.png" },
    { label: "Board Of Directors", path: "/board-of-directors", icon: "/images/investors icon/iv03.png" },
    { label: "Share Holders Documents", path: "/investors/material-contracts", icon: "/images/investors icon/iv7.png" },
    { label: "Board commities", path: "/board-committee", icon: "/images/investors icon/iv7.png" },
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
<div className="min-h-screen flex flex-col items-center bg-gray-50">

  {/* Page Header */}
  <div className="bg-gray-300 py-10 w-full">
    <div className="max-w-6xl mx-auto px-6">
      <h1 className="text-3xl sm:text-4xl font-bold">
        Investors Info
      </h1>
      <p className="text-gray-700 mt-2">
        Home &gt;&gt; Investors Info
      </p>
    </div>
  </div>

  {/* ✅ Center Heading Below Header */}
  <h2 className="text-2xl sm:text-4xl font-semibold text-gray-800 mt-10 mb-8 text-center">
    Investors Space
  </h2>

  {/* Cards Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-[80%] mx-auto px-6">
    {items.map((item) => (
      <Link
        key={item.path}
        to={item.path}
        className="
          bg-white shadow-md rounded-xl p-5 
          flex flex-col items-center justify-center gap-3
          text-center text-lg font-semibold 
          hover:bg-gray-300 hover:text-black 
          transition-all duration-300 border border-gray-200
        "
      >
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
