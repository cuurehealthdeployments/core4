import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


// Import images
import service1 from "/images/p3.png";
import service2 from "/images/p1.png";
import service3 from "/images/s4.png";
import service4 from "/images/s3.png";

const services = [
  {
    title: "Railway Over Head Traction System, Traction Sub-Station and EHT Transmission Line",
    description:
      "We specialize in providing reliable railway overhead traction systems, ensuring efficient power distribution. Our expertise includes traction sub-stations and EHT transmission lines, which play a crucial role in maintaining seamless railway operations.",
    img: service1,
  },
  {
    title: "Railway Station Infrastructure Work",
    description:
      "Our team is dedicated to constructing and modernizing railway stations with cutting-edge infrastructure. From platform development to safety enhancements, we ensure that every station is built for convenience, safety, and long-term efficiency.",
    img: service2,
  },
  {
    title: "SCADA and Automation Systems",
    description:
      "We provide advanced SCADA and automation solutions for various industries. Our smart control and monitoring systems help in improving operational efficiency, reducing downtime, and optimizing energy consumption for better productivity.",
    img: service3,
  },
  {
    title: "Water and Waste Water Treatment Plants",
    description:
      "Our water treatment solutions are designed to purify and recycle wastewater efficiently. With advanced filtration and treatment technologies, we contribute to sustainable water management for industries and municipalities.",
    img: service4,
  },
];

const ServicePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0,0)
  }, []);

  return (
    <div className="bg-blue-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-gray-300 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl sm:text-4xl font-bold">Services</h1>
          <p className="text-gray-700 mt-2">Home &gt;&gt; Services</p>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
        <div className="space-y-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-2xl shadow-lg w-full ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              data-aos="fade-up"
            >
              {/* Service Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-[300px] object-cover rounded-xl shadow-md"
                />
              </div>

              {/* Service Text */}
              <div className="w-full md:w-1/2 text-center">
                <h3 className="text-xl font-bold text-blue-600">{service.title}</h3>
                <p className="text-gray-600 mt-2 leading-relaxed text-justify">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;