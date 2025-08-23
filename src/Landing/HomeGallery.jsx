import React, { useState, useEffect, useRef } from "react";

const images = [
  { src: "/images/Ga1.jpg", alt: "Electric poles with wires", caption: "Electrical Infrastructure" },
  { src: "/images/Ga2.jpg", alt: "Construction workers on-site", caption: "Ongoing Construction" },
  { src: "/images/Ga3.jpg", alt: "Modern building exterior", caption: "Architectural Design" },
  { src: "/images/Ga4.jpg", alt: "Excavator at work", caption: "Earthworks & Excavation" },
  { src: "/images/Ga5.jpg", alt: "Bridge construction site", caption: "Bridge Engineering" },
  { src: "/images/Ga6.jpg", alt: "Road being paved", caption: "Road Development" },
  { src: "/images/Ga7.jpg", alt: "Steel framework of a building", caption: "Structural Engineering" },
  { src: "/images/Ga8.jpg", alt: "Green building with solar panels", caption: "Sustainable Construction" },
  { src: "/images/Ga9.jpg", alt: "Blueprints and tools on a desk", caption: "Project Planning & Design" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) return;

    let scrollSpeed = 2;
    const interval = setInterval(() => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0; // Reset to the beginning
      } else {
        scrollContainer.scrollLeft += scrollSpeed;
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-6 md:px-16 py-12">
      {/* Title */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          Better Tomorrow for Generations to Come
        </h2>
        <p className="text-gray-600 mt-2">
          Diverse infrastructure projects, from lift irrigation to water treatment, connect communities, 
          protect resources, and drive progress with precision engineering.{" "}
          <a href="#" className="text-red-600 font-semibold">Click Here</a>
        </p>
      </div>

      {/* Auto-Scrolling Image Gallery */}
      <div ref={scrollContainerRef} className="overflow-hidden whitespace-nowrap mt-8 pb-4">
        <div className="inline-flex space-x-4">
          {images.map((img, index) => (
            <div key={index} className="min-w-[250px] md:min-w-[350px] cursor-pointer">
              <img
                src={img.src} // ✅ Fixed issue: Correct src usage
                alt={img.alt}
                className="rounded-lg shadow-lg hover:opacity-80 transition"
                onClick={() => setSelectedImage(img)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-lg max-w-3xl">
            <button 
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl" 
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} className="rounded-lg w-full" /> {/* ✅ Fixed issue */}
            <p className="text-center mt-2 font-semibold text-gray-700">{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;