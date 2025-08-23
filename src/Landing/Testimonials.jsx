import { useEffect, useRef, useState } from "react";
import { Star, User, X } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    name: "Michael Lee",
    review:
      "Exceptional craftsmanship and attention to detail! The team delivered our project on time with outstanding quality.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    review:
      "Professional, reliable, and highly skilled. Our dream home turned out even better than we imagined!",
    rating: 5,
  },
  {
    name: "Emily Thomson",
    review:
      "From planning to execution, everything was seamless. Highly recommended for any construction needs!",
    rating: 5,
  },
  {
    name: "John Doe",
    review:
      "Great service! The project was completed efficiently and on time. Highly recommend their work!",
    rating: 4,
  },
  {
    name: "Jane Smith",
    review:
      "Very satisfied with the work. The attention to detail was impressive!",
    rating: 5,
  },
];

// Duplicate testimonials for seamless scrolling
const duplicatedTestimonials = [...testimonials, ...testimonials];

export default function Testimonial() {
  const scrollRef = useRef(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a fade effect

    const scrollContainer = scrollRef.current;
    let scrollSpeed = 1.5; // Adjust speed

    function startScrolling() {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;

        // Reset scroll when reaching halfway to create an infinite effect
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      requestAnimationFrame(startScrolling);
    }

    startScrolling();
  }, []);

  return (
    <div
      id="Testimonial"
      className="w-full max-w-6xl mx-auto py-10 text-center overflow-hidden px-4 sm:px-6 md:px-8"
    >
      <h2
        className="text-xl sm:text-4xl font-bold text-blue-600"
        data-aos="fade-up"
      >
        Testimonial
      </h2>
      <p className="text-gray-600 mt-2 text-sm sm:text-base" data-aos="fade-up">
        Building Excellence, One Structure At A Time
      </p>

      {/* Scrolling Container */}
      <div
        ref={scrollRef}
        className="flex space-x-4 sm:space-x-6 overflow-hidden mt-6 px-4 sm:px-10 py-5"
        style={{ whiteSpace: "nowrap" }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-none w-[90%] xs:w-[70%] sm:w-[48%] md:w-[30%] bg-white rounded-lg shadow-lg p-4 sm:p-5 border border-gray-200 text-left h-auto hover:shadow-xl transition-all cursor-pointer"
            data-aos="fade-up"
            onClick={() => setSelectedTestimonial(testimonial)}
          >
            <div className="flex items-center space-x-3">
              <User className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500" />
              <h3 className="font-semibold text-sm sm:text-base">
                {testimonial.name}
              </h3>
            </div>

            {/* Star Rating */}
            <div className="flex mt-1 sm:mt-2">
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-yellow-500"
                />
              ))}
            </div>

            {/* Short Review Inside the Card */}
            <p className="text-gray-600 mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed line-clamp-3">
              {testimonial.review}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedTestimonial && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            className="bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-md w-full relative"
            data-aos="zoom-in"
          >
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setSelectedTestimonial(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-lg font-semibold">{selectedTestimonial.name}</h3>

            <div className="flex mt-2">
              {Array.from({ length: selectedTestimonial.rating }, (_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-500 fill-yellow-500"
                />
              ))}
            </div>

            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
              {selectedTestimonial.review}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}