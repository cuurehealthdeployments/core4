import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import mapImage from "/images/india.png";
import locationPin from "/images/location1.png";

const projects = [
  { name: "Railway Electrification Madurai to Tamil Nadu", x: "40%", y: "83%" },
  { name: "2.5 Lakhs Liter Water Project (Andra Pradesh)", x: "40%", y: "73%" },
  { name: "Sewage Treatment Plant (Karnataka)", x: "32%", y: "75%" },
  { name: "Railway Electrification (Maharashtra)", x: "32%", y: "63%" },
  { name: "11kv/750v Substation (Odisha)", x: "58%", y: "58%" },
  { name: "Video Surveillance (Rajasthan)", x: "32%", y: "40%" },
  { name: "Railway Electrification Bhopal (Madhya Pradesh)", x: "40%", y: "49%" },
];

export default function IndiaMap() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init();
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
      setHoveredProject(projects[(activeIndex + 1) % projects.length]);
    }, 2000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="bg-white flex flex-col items-center justify-center gap-6 p-6">
      {/* Header */}
      <h2 className="text-2xl md:text-3xl font-bold text-blue-600 text-center" data-aos="fade-up">
        100+ Projects Across India
      </h2>
      
      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* India Map */}
        <div className="relative w-full max-w-xs sm:max-w-md md:w-[500px]" data-aos="fade-right">
          <img src={mapImage} alt="India Map" className="w-full h-auto" />

          {/* Location Pins */}
          {projects.map((project, index) => (
            <div
              key={index}
              className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-full"
              style={{ left: project.x, top: project.y }}
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <img src={locationPin} alt="Location Pin" className="w-4 sm:w-6 h-4 sm:h-6" />
            </div>
          ))}

          {/* Tooltip for hovered project */}
          {hoveredProject && (
            <div
              className="absolute bg-white text-black text-xs sm:text-sm p-2 border border-gray-300 shadow-lg rounded"
              style={{
                left: hoveredProject.x,
                top: `calc(${hoveredProject.y} - 30px)`,
                transform: "translate(-50%, -100%)",
                whiteSpace: "nowrap"
              }}
            >
              {hoveredProject.name}
            </div>
          )}
        </div>

        {/* Right Side - Project List (Hidden on Mobile) */}
        <div className="hidden md:block w-full md:w-auto" data-aos="fade-left">
          <ul className="mt-4 space-y-2">
            {projects.map((project, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-sm sm:text-lg cursor-pointer hover:text-blue-600"
                onMouseEnter={() => setHoveredProject(project)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <span className="w-2 sm:w-3 h-2 sm:h-3 bg-blue-600 rounded-full"></span>
                {project.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}