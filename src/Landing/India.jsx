import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import mapImage from "/images/india.png";
import locationPin from "/images/location1.png";

// ⭐ Projects with MULTIPLE coordinates
const projects = [
  { 
    name: <>Railway Electrification at Tamil Nadu.</>,
    locations: [
      { x: "40%", y: "83%" },
    ]
  },

  { 
    name: <>
      Substation works at Karnataka, Telangana, Andra Pradesh, Uttar Pradesh, <br />
      Kerala, Tamil Nadu, Jammu & Kashmir, Delhi, Odisha & Etc.
    </>,
    locations: [
      { x: "32%", y: "70%" },
      { x: "40%", y: "73%" },
      { x: "42%", y: "66%" },
      { x: "46%", y: "39%" },
      { x: "34%", y: "85%" },
      { x: "39%", y: "86%" },
      { x: "35%", y: "15%" },
      { x: "36%", y: "34%" },
      { x: "58%", y: "55%" }
    ]
  },

  { 
    name: <>Sewage Treatment Plant across Karnataka.</>,
    locations: [
      { x: "32%", y: "75%" },
    ]
  },

  { 
    name: <>
      Station Re-development and Railway Infrastructure Development <br />
      across Karnataka, Maharashtra, Odisha, and other regions.
    </>,
    locations: [
      { x: "34%", y: "79%" },
      { x: "32%", y: "63%" },
      { x: "54%", y: "59%" }
    ]
  },

  { 
    name: <>Video Surveillance at Rajasthan.</>,
    locations: [
      { x: "32%", y: "40%" }
    ]
  },

  { 
    name: <>Implementation of Coach Watering System at Bhopal.</>,
    locations: [
      { x: "37%", y: "50%" }
    ]
  },
];

export default function IndiaMap() {
  const [hoveredProject, setHoveredProject] = useState(projects[0]);
  const [hoveredLocation, setHoveredLocation] = useState(projects[0].locations[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);


  useEffect(() => {
  if (isHovering) return; // ⛔ stop autoplay while hovering

  const interval = setInterval(() => {
    const nextIndex = (activeIndex + 1) % projects.length;
    setActiveIndex(nextIndex);

    setHoveredProject(projects[nextIndex]);
    setHoveredLocation(projects[nextIndex].locations[0]);
  }, 3000); // 4 seconds autoplay

  return () => clearInterval(interval);
}, [activeIndex, isHovering]);

  return (
    <div className="bg-white flex flex-col items-center justify-center gap-6 p-6">

      {/* Header */}
      <h2
        className="text-2xl md:text-3xl font-bold text-red-600 text-center"
        data-aos="fade-up"
      >
        100+ Projects Across India
      </h2>

      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">

        {/* India Map */}
        <div
          className="relative w-full max-w-xs sm:max-w-md md:w-[500px]"
          data-aos="fade-right"
        >
          <img src={mapImage} alt="India Map" className="w-full h-auto" />

          {/* ⭐ Render MULTIPLE pins per project */}
          {projects.map((project, pIndex) =>
            project.locations.map((loc, i) => (
              <div
                key={`${pIndex}-${i}`}
                className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-full"
                style={{ left: loc.x, top: loc.y }}
                onMouseEnter={() => {
                  setIsHovering(true);
                  setHoveredProject(project);
                  setHoveredLocation(loc);
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                }}

              >
                <img
                  src={locationPin}
                  alt="Location Pin"
                  className="w-4 sm:w-6 h-4 sm:h-6"
                />
              </div>
            ))
          )}

          {/* ⭐ Tooltip (Now works ALWAYS — including auto-play mode) */}
          {hoveredProject && hoveredLocation && (
            <div
              className="absolute bg-white text-black text-xs sm:text-sm p-2 border border-gray-300 shadow-lg rounded"
              style={{
                left: hoveredLocation.x,
                top: `calc(${hoveredLocation.y} - 30px)`,
                transform: "translate(-50%, -100%)",
                whiteSpace: "nowrap",
              }}
            >
              {hoveredProject.name}
            </div>
          )}
        </div>

        {/* ⭐ Right-side project list (names ALWAYS visible + hover works) */}
        <div className="hidden md:block w-full md:w-auto" data-aos="fade-left">
          <ul className="mt-4 space-y-2">
            {projects.map((project, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-sm sm:text-xl cursor-pointer hover:text-red-900"
                onMouseEnter={() => {
                  setIsHovering(true);
                  setHoveredProject(project);
                  setHoveredLocation(project.locations[0]);
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                }}
              >
                <span className="w-2 sm:w-3 h-2 sm:h-3 bg-red-600 rounded-full"></span>
                {project.name}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
