import React, { useEffect, useState } from "react";
import img1 from "/images/PO1.jpg";
import img2 from "/images/g4.jpg";
import img3 from "/images/P03.png";
import img4 from "/images/g7.jpg";
import img5 from "/images/PO6.png";
import img6 from "/images/G2.jpg";
import img7 from "/images/PO1.jpg";
import img8 from "/images/PO4.png";

const cards = [
  { title: "Railway Electrification & Infrastructure ", description: "Railway infrastructure projects involve the construction, maintenance, and modernization of railway networks.", img: img1 },
  { title: "Water & Wastewater Treatment(WTP/STP/ETP)", description: "Water supply projects ensure the availability of clean and safe drinking water to urban and rural areas.", img: img2 },
  { title: "Extra High Tension(EHT)Transmission & Distribution System", description: "Networking and telecom infrastructure projects involve the deployment of fiber optics, 5G towers, and broadband networks.", img: img3 },
  { title: "Industrial Electrical & Infastructure Works", description: "MPE projects focus on designing and implementing mechanical, plumbing, and electrical systems.", img: img4 },
  { title: "Pre-Engineered Structures", description: "Pre-engineered structures are modular buildings designed for rapid assembly and cost efficiency.", img: img6 },
  { title: "Manufacturing of HT/LT Distribution Panels", description: "Railway electrification projects involve converting diesel-operated railways into electric-powered systems.", img: img7 },
  { title: "Automation & SCADA Systems", description: "SCADA (Supervisory Control and Data Acquisition) and IoT automation projects focus on integrating smart technologies.", img: img8 },
];

const HomeProjects = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    // Update visible cards based on screen size
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1024) setVisibleCards(3); // Large screens: 3 cards
      else if (window.innerWidth >= 768) setVisibleCards(2); // Medium screens: 2 cards
      else setVisibleCards(1); // Small screens: 1 card
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) =>
        prevIndex >= cards.length - visibleCards ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [visibleCards]);

  return (
    <div className="bg-blue-50 py-12 px-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/assets/images/pattern.svg')] opacity-20"></div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-wrap items-center justify-between">
        {/* Left Section - Title */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <p className="text-lg font-semibold text-gray-500 uppercase tracking-wider">
            Flowing Toward Sustainable Future
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mt-2 leading-tight">
            Delivering Sustainable <br />
            <span className="text-blue-900">Solutions</span>
          </h2>
          <div className="border-b-4 border-blue-700 w-24 mt-2"></div>
        </div>

        {/* Right Section - Description */}
        <div className="w-full lg:w-1/2 text-justify">
          <p className="text-gray-600 text-lg">
            At Core4 engineers, we’re dedicated to water management, empowering communities, and preserving the environment. Also, it grows and prospers.
          </p>
        </div>
      </div>

      {/* Auto-Scrolling Card Section */}
      <div className="max-w-6xl mx-auto mt-8 overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${startIndex * (100 / visibleCards)}%)` }}
        >
          {cards.map((card, index) => (
            <div key={index} className={`w-full ${visibleCards === 3 ? "lg:w-1/3" : visibleCards === 2 ? "md:w-1/2" : "w-full"} px-4 flex-shrink-0`}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col min-h-[400px]">
                {/* Image */}
                <img src={card.img} alt={card.title} className="w-full h-64 object-cover" />

                {/* Text Content */}
                <div className="p-4 flex-grow">
                  <h3 className="text-lg font-bold">{card.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">{card.description}</p>
                  <button className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeProjects;
