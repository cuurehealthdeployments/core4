// import React, { useState, useEffect } from "react";

// const Accordiona = () => {
//   useEffect(() =>{
//     window.scrollTo(0,0)
//   },[]);
//   const [openAccordion, setOpenAccordion] = useState(null);
//   const [modalContent, setModalContent] = useState(null);

//   const accordions = [
//     {
//       id: 1,
//       title: "Railway Projects",
//       image: "/public/images/Ga1.jpg",
//       subItems: [
//         {
//           name: "Railway Electrification",
//           image: "/public/images/Ga2.jpg",
//           description: "Electrification of railway tracks enhances efficiency, reduces fuel dependency, and minimizes environmental impact. It improves train acceleration, decreases maintenance costs, and provides a sustainable transportation solution. Modern electrification systems use regenerative braking, which recycles energy back into the grid. This transition reduces carbon emissions and ensures long-term cost savings. Electrified railways also contribute to increased operational reliability and better scheduling. Governments worldwide are investing in electrification to modernize railway infrastructure. The implementation involves high-voltage overhead lines and substation upgrades. Safety measures are critical, including insulation and grounding systems. Continuous monitoring and predictive maintenance help prevent failures. Overall, electrification is a step toward a greener and more efficient railway network."
//         },
//         {
//           name: "Railway Track",
//           image: "/public/images/Ga3.jpg",
//           description: "Railway track construction is crucial for safe and efficient transportation. It involves laying ballast, sleepers, and rails to form a stable structure. Proper alignment and leveling ensure smooth train movement and prevent derailments. Advanced materials like concrete sleepers and welded rails enhance durability. Regular inspections and maintenance prevent wear and tear, reducing operational risks. High-speed rail networks require precision engineering for optimal performance. Track electrification and signaling systems further improve safety and efficiency. Innovations like magnetic levitation reduce friction and increase speed. Environmental considerations include minimizing land disruption and noise pollution. Sustainable practices, like recycling old rails, support eco-friendly railway development."
//         },
//         {
//           name: "Railway Water Management",
//           image: "/public/images/H1.png",
//           description: "Railway water management ensures sustainable water use and flood prevention. Drainage systems prevent water accumulation on tracks, reducing erosion risks. Efficient water recycling minimizes wastage and supports environmental sustainability. Advanced filtration systems ensure clean water supply for railway stations. Proper sewage treatment prevents contamination and protects local ecosystems. Smart monitoring systems detect leaks and optimize water usage. Climate change resilience planning includes flood-resistant infrastructure. Water conservation initiatives promote responsible consumption among railway staff. Green roofing and rainwater harvesting further enhance sustainability. Integrated water management improves railway efficiency and environmental impact."
//         }
//       ]
//     },
//     {
//       id: 2,
//       title: "Network Telecom Projects",
//       image: "/public/images/P03.png",
//       subItems: [
//         {
//           name: "5G Network Deployment",
//           image: "/public/images/Ga4.jpg",
//           description: "5G network deployment revolutionizes telecommunications with ultra-fast speeds and low latency. It enables seamless streaming, gaming, and real-time communication. Enhanced bandwidth supports the Internet of Things (IoT) and smart city applications. Small cell technology boosts signal strength in dense urban areas. Network slicing allows dedicated bandwidth for critical applications. Advanced security measures protect against cyber threats. Edge computing reduces data travel time for instant processing. Infrastructure expansion involves installing new base stations and fiber-optic connections. 5G enhances healthcare, transportation, and industrial automation. Continuous innovation ensures future-ready connectivity solutions."
//         },
//         {
//           name: "Fiber Optic Infrastructure",
//           image: "/public/images/Ga5.jpg",
//           description: "Fiber optic infrastructure provides high-speed, reliable internet connectivity. It transmits data using light signals, reducing signal degradation over long distances. Fiber networks support growing data demands for businesses and households. Advanced materials and installation techniques improve durability and efficiency. Optical fibers offer superior bandwidth compared to traditional copper cables. Deployment requires trenching, cabling, and network configuration. Future-proofing involves upgrading to higher-capacity fiber technologies. Secure connections prevent data breaches and cyber threats. Governments and private sectors invest in expanding fiber networks. The rise of cloud computing and streaming services increases fiber optic adoption."
//         },
//         {
//           name: "Satellite Communication",
//           image: "/public/images/Ga6.jpg",
//           description: "Satellite communication plays a crucial role in global connectivity. It enables internet access in remote locations where traditional infrastructure is unavailable. Weather forecasting, GPS navigation, and military communications rely on satellite networks. High-throughput satellites improve data transmission rates and reduce latency. Innovations in low-earth orbit satellites enhance real-time communication. Satellite internet services are expanding due to increased demand for reliable connectivity. Telemedicine benefits from satellite networks, allowing remote diagnosis and treatment. Future advancements include AI-driven satellite operations and inter-satellite links. Sustainable satellite launches focus on reducing space debris and extending satellite lifespans. Governments and private companies collaborate to enhance global communication infrastructure."
//         }
//       ]
//     },
//     {
//       id: 3,
//       title: "Water Projects",
//       image: "/public/images/s3.png",
//       subItems: [
//         {
//           name: "Desalination Plants",
//           image: "/public/images/Ga8.jpg",
//           description: "Desalination plants convert seawater into freshwater to address water scarcity. They use reverse osmosis and distillation processes to remove salt and impurities. Large-scale desalination plants supply drinking water to millions of people. Energy-efficient technologies improve cost-effectiveness and sustainability. Government initiatives promote desalination as an alternative water source. Environmental concerns include brine disposal and marine life impact. Innovations focus on solar-powered desalination systems. Research continues to enhance efficiency and reduce operational costs. Coastal regions benefit the most from desalination technology. Future advancements aim to make desalination more affordable and widely accessible."
//         },
//         {
//           name: "Rainwater Harvesting",
//           image: "/public/images/Ga9.jpg",
//           description: "Rainwater harvesting captures and stores rainwater for future use. It reduces dependence on groundwater and municipal water supplies. Collection systems include rooftop catchments and underground storage tanks. Filtration and purification improve water quality for domestic use. Rainwater harvesting mitigates urban flooding by reducing runoff. Governments incentivize rainwater harvesting for sustainable water management. Schools and public buildings adopt harvesting systems for conservation. Community projects encourage rainwater reuse for irrigation. Smart sensors optimize water collection and distribution. Expanding rainwater harvesting can address global water challenges."
//         },
//         {
//           name: "Wastewater Treatment",
//           image: "/public/images/g11.jpg",
//           description: "Wastewater treatment removes contaminants to produce reusable water. Primary treatment removes large solids through sedimentation. Secondary treatment uses biological processes to break down organic matter. Tertiary treatment enhances water quality for safe discharge. Advanced treatment includes membrane filtration and chemical disinfection. Industrial facilities implement wastewater recycling to reduce pollution. Smart monitoring improves treatment efficiency and reduces waste. Governments enforce regulations to ensure water quality standards. Public awareness campaigns promote responsible wastewater management. Sustainable wastewater solutions contribute to water conservation efforts."
//         }
//       ]
//     },
//     {
//       id: 4,
//       title: "Construction Project",
//       image: "/images/A1.jpg",
//       subItems: [
//         {
//           name: "Pre engineered structures",
//           image: "/public/images/s3.png",
//           description: "Desalination plants convert seawater into freshwater to address water scarcity. They use reverse osmosis and distillation processes to remove salt and impurities. Large-scale desalination plants supply drinking water to millions of people. Energy-efficient technologies improve cost-effectiveness and sustainability. Government initiatives promote desalination as an alternative water source. Environmental concerns include brine disposal and marine life impact. Innovations focus on solar-powered desalination systems. Research continues to enhance efficiency and reduce operational costs. Coastal regions benefit the most from desalination technology. Future advancements aim to make desalination more affordable and widely accessible."
//         },
//         {
//           name: "Road Construction",
//           image: "/public/images/s4.png",
//           description: "Rainwater harvesting captures and stores rainwater for future use. It reduces dependence on groundwater and municipal water supplies. Collection systems include rooftop catchments and underground storage tanks. Filtration and purification improve water quality for domestic use. Rainwater harvesting mitigates urban flooding by reducing runoff. Governments incentivize rainwater harvesting for sustainable water management. Schools and public buildings adopt harvesting systems for conservation. Community projects encourage rainwater reuse for irrigation. Smart sensors optimize water collection and distribution. Expanding rainwater harvesting can address global water challenges."
//         },
//         {
//           name: "Bridge Construction",
//           image: "/public/images/s5.png",
//           description: "Wastewater treatment removes contaminants to produce reusable water. Primary treatment removes large solids through sedimentation. Secondary treatment uses biological processes to break down organic matter. Tertiary treatment enhances water quality for safe discharge. Advanced treatment includes membrane filtration and chemical disinfection. Industrial facilities implement wastewater recycling to reduce pollution. Smart monitoring improves treatment efficiency and reduces waste. Governments enforce regulations to ensure water quality standards. Public awareness campaigns promote responsible wastewater management. Sustainable wastewater solutions contribute to water conservation efforts."
//         },
        
//       ]
//     }
//   ];


//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 overflow-y-auto h-screen">
//       {accordions.map((accordion) => (
//         <div
//           key={accordion.id}
//           className="w-full bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg cursor-pointer transition-all duration-300"
//           onMouseEnter={() => setOpenAccordion(accordion.id)}
//           onClick={() => setOpenAccordion((prev) => (prev === accordion.id ? null : accordion.id))}
//         >
//           <div className="p-4 text-center text-lg font-semibold bg-gray-900">{accordion.title}</div>
//           <img
//             src={accordion.image}
//             alt={accordion.title}
//             className={`w-full transition-all duration-300 ${openAccordion === accordion.id ? "opacity-0 h-0" : "opacity-100"}`}
//           />
//           {openAccordion === accordion.id && (
//             <div className="bg-gray-700 p-4">
//               {accordion.subItems.map((subItem, index) => (
//                 <div
//                   key={index}
//                   className="p-3 border-b border-gray-600 hover:bg-gray-600"
//                   onClick={() => setModalContent(subItem)}
//                 >
//                   {subItem.name}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}

//       {modalContent && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
//           <div className="bg-white p-6 rounded-lg max-w-4xl w-full text-center max-h-[80vh] overflow-y-auto shadow-lg">
//             <img src={modalContent.image} alt={modalContent.name} className="w-full h-60 rounded-lg" />
//             <h2 className="text-xl font-semibold mt-4">{modalContent.name}</h2>
//             <p className="text-gray-700 text-justify mt-2">{modalContent.description}</p>
//             <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded" onClick={() => setModalContent(null)}>
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Accordiona;

import React, { useState, useEffect } from "react";

const Accordiona = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openAccordion, setOpenAccordion] = useState(null);
  const [modalContent, setModalContent] = useState(null);

  const accordions = [
    {
      id: 1,
      title: "Railway Projects",
      image: "/images/R7.png",
      subItems: [
        {
          name: "Railway Electrification",
          image: "/images/Ga2.jpg",
          description: "Electrification of railway tracks enhances efficiency, reduces fuel dependency, and minimizes environmental impact. It improves train acceleration, decreases maintenance costs, and provides a sustainable transportation solution. Modern electrification systems use regenerative braking, which recycles energy back into the grid. This transition reduces carbon emissions and ensures long-term cost savings. Electrified railways also contribute to increased operational reliability and better scheduling. Governments worldwide are investing in electrification to modernize railway infrastructure. The implementation involves high-voltage overhead lines and substation upgrades. Safety measures are critical, including insulation and grounding systems. Continuous monitoring and predictive maintenance help prevent failures. Overall, electrification is a step toward a greener and more efficient railway network."
        },
        {
          name: "Railway Track",
          image: "/images/Ga3.jpg",
          description: "Railway track construction is crucial for safe and efficient transportation. It involves laying ballast, sleepers, and rails to form a stable structure. Proper alignment and leveling ensure smooth train movement and prevent derailments. Advanced materials like concrete sleepers and welded rails enhance durability. Regular inspections and maintenance prevent wear and tear, reducing operational risks. High-speed rail networks require precision engineering for optimal performance. Track electrification and signaling systems further improve safety and efficiency. Innovations like magnetic levitation reduce friction and increase speed. Environmental considerations include minimizing land disruption and noise pollution. Sustainable practices, like recycling old rails, support eco-friendly railway development."
        },
        {
          name: "Railway Water Management",
          image: "/images/H1.png",
          description: "Railway water management ensures sustainable water use and flood prevention. Drainage systems prevent water accumulation on tracks, reducing erosion risks. Efficient water recycling minimizes wastage and supports environmental sustainability. Advanced filtration systems ensure clean water supply for railway stations. Proper sewage treatment prevents contamination and protects local ecosystems. Smart monitoring systems detect leaks and optimize water usage. Climate change resilience planning includes flood-resistant infrastructure. Water conservation initiatives promote responsible consumption among railway staff. Green roofing and rainwater harvesting further enhance sustainability. Integrated water management improves railway efficiency and environmental impact."
        }
      ]
    },
    {
      id: 2,
      title: "Network Telecom Projects",
      image: "/images/R3.png",
      subItems: [
        {
          name: "5G Network Deployment",
          image: "/images/Ga4.jpg",
          description: "5G network deployment revolutionizes telecommunications with ultra-fast speeds and low latency. It enables seamless streaming, gaming, and real-time communication. Enhanced bandwidth supports the Internet of Things (IoT) and smart city applications. Small cell technology boosts signal strength in dense urban areas. Network slicing allows dedicated bandwidth for critical applications. Advanced security measures protect against cyber threats. Edge computing reduces data travel time for instant processing. Infrastructure expansion involves installing new base stations and fiber-optic connections. 5G enhances healthcare, transportation, and industrial automation. Continuous innovation ensures future-ready connectivity solutions."
        },
        {
          name: "Fiber Optic Infrastructure",
          image: "/images/Ga5.jpg",
          description: "Fiber optic infrastructure provides high-speed, reliable internet connectivity. It transmits data using light signals, reducing signal degradation over long distances. Fiber networks support growing data demands for businesses and households. Advanced materials and installation techniques improve durability and efficiency. Optical fibers offer superior bandwidth compared to traditional copper cables. Deployment requires trenching, cabling, and network configuration. Future-proofing involves upgrading to higher-capacity fiber technologies. Secure connections prevent data breaches and cyber threats. Governments and private sectors invest in expanding fiber networks. The rise of cloud computing and streaming services increases fiber optic adoption."
        },
        {
          name: "Satellite Communication",
          image: "/images/Ga6.jpg",
          description: "Satellite communication plays a crucial role in global connectivity. It enables internet access in remote locations where traditional infrastructure is unavailable. Weather forecasting, GPS navigation, and military communications rely on satellite networks. High-throughput satellites improve data transmission rates and reduce latency. Innovations in low-earth orbit satellites enhance real-time communication. Satellite internet services are expanding due to increased demand for reliable connectivity. Telemedicine benefits from satellite networks, allowing remote diagnosis and treatment. Future advancements include AI-driven satellite operations and inter-satellite links. Sustainable satellite launches focus on reducing space debris and extending satellite lifespans. Governments and private companies collaborate to enhance global communication infrastructure."
        }
      ]
    },
    {
      id: 3,
      title: "Water Projects",
      image: "/images/s3.png",
      subItems: [
        {
          name: "Desalination Plants",
          image: "/images/Ga8.jpg",
          description: "Desalination plants convert seawater into freshwater to address water scarcity. They use reverse osmosis and distillation processes to remove salt and impurities. Large-scale desalination plants supply drinking water to millions of people. Energy-efficient technologies improve cost-effectiveness and sustainability. Government initiatives promote desalination as an alternative water source. Environmental concerns include brine disposal and marine life impact. Innovations focus on solar-powered desalination systems. Research continues to enhance efficiency and reduce operational costs. Coastal regions benefit the most from desalination technology. Future advancements aim to make desalination more affordable and widely accessible."
        },
        {
          name: "Rainwater Harvesting",
          image: "/images/Ga9.jpg",
          description: "Rainwater harvesting captures and stores rainwater for future use. It reduces dependence on groundwater and municipal water supplies. Collection systems include rooftop catchments and underground storage tanks. Filtration and purification improve water quality for domestic use. Rainwater harvesting mitigates urban flooding by reducing runoff. Governments incentivize rainwater harvesting for sustainable water management. Schools and public buildings adopt harvesting systems for conservation. Community projects encourage rainwater reuse for irrigation. Smart sensors optimize water collection and distribution. Expanding rainwater harvesting can address global water challenges."
        },
        {
          name: "Wastewater Treatment",
          image: "/images/g11.jpg",
          description: "Wastewater treatment removes contaminants to produce reusable water. Primary treatment removes large solids through sedimentation. Secondary treatment uses biological processes to break down organic matter. Tertiary treatment enhances water quality for safe discharge. Advanced treatment includes membrane filtration and chemical disinfection. Industrial facilities implement wastewater recycling to reduce pollution. Smart monitoring improves treatment efficiency and reduces waste. Governments enforce regulations to ensure water quality standards. Public awareness campaigns promote responsible wastewater management. Sustainable wastewater solutions contribute to water conservation efforts."
        }
      ]
    },
    {
      id: 4,
      title: "Construction Project",
      image: "/images/A1.jpg",
      subItems: [
        {
          name: "Pre engineered structures",
          image: "/images/s3.png",
          description: "Desalination plants convert seawater into freshwater to address water scarcity. They use reverse osmosis and distillation processes to remove salt and impurities. Large-scale desalination plants supply drinking water to millions of people. Energy-efficient technologies improve cost-effectiveness and sustainability. Government initiatives promote desalination as an alternative water source. Environmental concerns include brine disposal and marine life impact. Innovations focus on solar-powered desalination systems. Research continues to enhance efficiency and reduce operational costs. Coastal regions benefit the most from desalination technology. Future advancements aim to make desalination more affordable and widely accessible."
        },
        {
          name: "Road Construction",
          image: "/images/s4.png",
          description: "Rainwater harvesting captures and stores rainwater for future use. It reduces dependence on groundwater and municipal water supplies. Collection systems include rooftop catchments and underground storage tanks. Filtration and purification improve water quality for domestic use. Rainwater harvesting mitigates urban flooding by reducing runoff. Governments incentivize rainwater harvesting for sustainable water management. Schools and public buildings adopt harvesting systems for conservation. Community projects encourage rainwater reuse for irrigation. Smart sensors optimize water collection and distribution. Expanding rainwater harvesting can address global water challenges."
        },
        {
          name: "Bridge Construction",
          image: "/images/s5.png",
          description: "Wastewater treatment removes contaminants to produce reusable water. Primary treatment removes large solids through sedimentation. Secondary treatment uses biological processes to break down organic matter. Tertiary treatment enhances water quality for safe discharge. Advanced treatment includes membrane filtration and chemical disinfection. Industrial facilities implement wastewater recycling to reduce pollution. Smart monitoring improves treatment efficiency and reduces waste. Governments enforce regulations to ensure water quality standards. Public awareness campaigns promote responsible wastewater management. Sustainable wastewater solutions contribute to water conservation efforts."
        },
        
      ]
    }
  ];


  return (
    <div>
      <div className="bg-gray-300 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl sm:text-4xl font-bold">Projects</h1>
          <p className="text-gray-700 mt-2">Home &gt;&gt; Projects</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-4 md:p-6 overflow-y-auto min-h-screen">
        {accordions.map((accordion) => (
          <div
            key={accordion.id}
            className="w-full bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg cursor-pointer transition-all duration-300"
            onMouseEnter={() => setOpenAccordion(accordion.id)}
            onClick={() => setOpenAccordion((prev) => (prev === accordion.id ? null : accordion.id))}
          >
            <div className="p-4 text-center text-lg font-semibold bg-gray-900">{accordion.title}</div>
            <img
              src={accordion.image}
              alt={accordion.title}
              className={`w-full transition-all duration-300 ${openAccordion === accordion.id ? "opacity-0 h-0" : "opacity-100"}`}
            />
            {openAccordion === accordion.id && (
              <div className="bg-gray-700 p-4">
                {accordion.subItems.map((subItem, index) => (
                  <div
                    key={index}
                    className="p-3 border-b border-gray-600 hover:bg-gray-600"
                    onClick={() => setModalContent(subItem)}
                  >
                    {subItem.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {modalContent && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center p-4">
            <div className="bg-white p-6 rounded-lg max-w-4xl w-full text-center max-h-[80vh] overflow-y-auto shadow-lg">
              <img src={modalContent.image} alt={modalContent.name} className="w-full h-60 object-cover rounded-lg" />
              <h2 className="text-xl font-semibold mt-4">{modalContent.name}</h2>
              <p className="text-gray-700 text-justify mt-2">{modalContent.description}</p>
              <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded" onClick={() => setModalContent(null)}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordiona;



