import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import product1 from "/images/PR1.png";
import product2 from "/images/PR2.png";
import product3 from "/images/s4.png";
import product4 from "/images/PR6.png";
import product5 from "/images/PR4.png";
import product6 from "/images/PR1.png";

const products = [
  {
    title: "Power Control Center Panel (PCC)",
    description:
      "We provide PCC panels with a current capacity of up to 6300A, certified with a short-circuit type test of 50kA/1 sec from CPRI. These panels are designed for high-efficiency power distribution, ensuring the safety and reliability of electrical systems in industries. They are equipped with advanced monitoring and control features, making them an ideal choice for various applications. The panels also offer excellent thermal stability and enhanced durability, supporting uninterrupted operations. Our PCC panels meet international standards and come with customized configurations to suit specific requirements.",
    img: product1,
  },
  {
    title: "Motor Control Center Panel (MCC)",
    description:
      "Low voltage switchboard assemblies with a common power bus, primarily used for motor control applications. These MCC panels facilitate smooth motor operation, reducing energy consumption and improving performance. They are built with intelligent motor protection relays and user-friendly interfaces, allowing easy maintenance. Our MCC panels ensure seamless integration with automation systems, providing real-time data for predictive maintenance. They are designed with modular compartments for easy expansion and customization, making them a versatile solution for industrial setups.",
    img: product2,
  },
  {
    title: "PLC and SCADA Panels",
    description:
      "Programmable Logic Controllers (PLC) and SCADA panels designed for automation and process control with configurable logic flow. These panels enable centralized control of complex operations, reducing manual intervention. With remote monitoring capabilities, they enhance efficiency and provide real-time insights. Our PLC and SCADA panels come with user-friendly HMIs, ensuring quick diagnostics and troubleshooting. They are built with high-quality components to ensure durability and long-term reliability in demanding environments.",
    img: product3,
  },
  {
    title: "LT Panel",
    description:
      "Centralized control and monitoring of main power supply using protective switchgear, along with distribution boards for localized power control. These panels provide a safe and efficient way to manage power distribution in commercial and industrial buildings. Our LT panels are designed with overload protection, ensuring stability and preventing electrical failures. They also include advanced metering solutions for accurate energy management. The robust construction and high-quality insulation make them suitable for diverse applications, ensuring long-lasting performance.",
    img: product4,
  },
  {
    title: "Feeder Pillar",
    description:
      "Provides local maintenance access, minimizing downtime and reducing overall maintenance costs for electrical equipment. These pillars serve as an essential component in power distribution networks, ensuring easy access to control and protection devices. They are weatherproof and corrosion-resistant, making them ideal for outdoor installations. Our feeder pillars come with modular designs, allowing for future upgrades and expansions. They play a crucial role in ensuring a reliable power supply to commercial, industrial, and residential areas.",
    img: product5,
  },
  {
    title: "Auto Mains Failure Panel",
    description:
      "Automatically switches to backup power in case of mains failure, ensuring uninterrupted power supply for critical operations. These AMF panels are essential for generator control and power management, providing seamless transition during power outages. They are equipped with intelligent controllers to monitor voltage, frequency, and load conditions. Our AMF panels come with user-friendly interfaces, making them easy to operate and configure. They are built with robust components to ensure high reliability and longevity in critical power applications.",
    img: product6,
  },
];

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-3/4 lg:w-2/3 xl:w-1/2 max-h-[90vh] overflow-y-auto" data-aos="zoom-in">
        <img src={product.img} alt={product.title} className="w-full h-96 object-cover rounded-lg mb-4" />
        <h3 className="text-2xl font-bold">{product.title}</h3>
        <p className="mt-4 text-gray-700">{product.description}</p>
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const ProductPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0,0)
  }, []);

  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="bg-gray-300 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl sm:text-4xl font-bold">Products</h1>
          <p className="text-gray-700 mt-2">Home &gt;&gt; Products</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
              data-aos="fade-up"
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-[250px] object-cover rounded-xl shadow-md mb-4"
              />
              <h3 className="text-xl font-bold text-blue-600">{product.title}</h3>
              <p className="text-gray-600 mt-2 leading-relaxed text-justify">
                {product.description.substring(0, 100)}...
              </p>
              <button
                onClick={() => setSelectedProduct(product)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  );
};

export default ProductPage;