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
      title: "Railway Electrification Projects",
      image: "/images/projects/PJ1.1.png",
      subItems: [
        {
          name: "25 kV OHE (Over Head Equipment) Works",
          image: "/images/projects/PJ1.1.png",
          description: `25 kV OHE systems form the backbone of modern railway electrification, providing a reliable and efficient power supply for electric locomotives. CORE4 Engineers executes complete OHE installations including masts, portals, cantilevers, catenary wires, and contact wires with precise tensioning. Our team ensures compliance with RDSO standards, proper earthing, high mechanical strength, and safe clearances. With advanced surveying, stringing equipment, and quality materials, we deliver long-lasting OHE networks that support high-speed, energy-efficient, and low-maintenance railway operations.`
        },
        {
          name: "PSI / Traction Substations",
          image: "/images/projects/PJ1.2.png",
          description: `Traction substations (TSS), Sectioning Posts (SP), and Sub Sectioning Posts (SSP) are critical nodes that feed and protect the railway electrification system. CORE4 Engineers specializes in designing and constructing Power Supply Installations that include transformers, circuit breakers, isolators, protection relays, and SCADA-integrated control systems. Our substations ensure stable 25 kV power supply, automatic protection during faults, and reliable feeder switching. Through high-precision equipment adhering strict safety standards, we support uninterrupted traction power for smooth train operations.`
        },
        {
          name: "Railway Signalling (EI, RRI, Panel)",
          image: "/images/projects/PJ1.3.png",
          description: `Railway signalling ensures safe and efficient movement of trains across the network. CORE4 Engineers executes complete signalling installations covering Electronic Interlocking (EI), Route Relay Interlocking (RRI), and Panel-based systems. We handle cabling, location boxes, point machines, signal posts, track circuits, and control panels with high precision. Our signalling solutions improve operational safety, reduce human error, and increase line capacity through automated route control and interlocking logic,with various arrangements for power drawing. In addition, there are dedicated systems for signalling and telecom using auxiliary transformers from OHE or commercial supply with battery backup, DG sets, and increasing solar integration for sustainability. Key components include Traction Substations (TSS), Feeding Posts (FP), Sectioning Posts (SP), and Integrated Power Supply (IPS) systems for reliability, using SMPS chargers and batteries.`
        },
        {
          name: "Railway Telecommunication & OFC works",
          image: "/images/projects/PJ1.4.png",
          description: `Railway telecommunication provides secure and seamless communication across stations, control rooms, and field locations. CORE4 Engineers installs OFC (Optical Fiber Cable) networks, telecom huts, IP-based communication systems, PA systems, and train control communication infrastructure. Our OFC solutions offer high bandwidth, low latency, and reliable long-distance data transfer essential for signalling, SCADA, and train monitoring systems. We ensure robust connectivity, minimal downtime, and compliance with railway standards.`
        },
        {
          name: "Railway SCADA / RTU installation",
          image: "/images/projects/PJ1.5.png",
          description: `SCADA and RTU systems enable real-time monitoring and control of traction power and railway assets. CORE4 Engineers implements SCADA-based command centers, RTU installations, communication wiring, protocol configuration, and system integration. These systems provide live updates on voltage, feeder status, load, alarms, and switching operations. Our automation improves operational safety, speeds up decision-making, and reduces manual intervention across TSS, SP, and SSP locations.`
        },
        {
          name: "Power supply & distribution for stations ",
          image: "/images/projects/PJ1.6.png",
          description: `CORE4 Engineers provides complete power distribution solutions for railway stations, including LT/HT cabling, transformers, distribution boards, lighting systems, UPS systems, and emergency backup power. We ensure reliable power supply for station operations such as lighting, escalators, lifts, ticket counters, signalling cabins, and safety equipment. Our installations follow stringent railway standards and ensure uninterrupted functionality, improved passenger safety, and efficient energy utilization.`
        }  
      ]
    },
    {
      id: 2,
      title: "Transmission & Distribution Projects",
      image: "/images/projects/PJ2.1.png",
      subItems: [
        {
          name: "11kV / 33kV / 66kV / 110kV / 220kV / 400kV substation works",
          image: "/images/projects/PJ2.1.png",
          description: `High-voltage substations are a critical part of the power transmission network, ensuring safe and efficient delivery of electricity from generating stations to consumers. CORE4 Engineers executes turnkey substation projects across voltage levels from 11kV to 220kV. Our scope includes design, equipment selection, structure erection, switchgear installation, protection relay configuration, SCADA integration, and system testing. With strong technical expertise and compliance to utility standards, we ensure stable power flow, reduced outages, and long-term reliability for industrial, commercial, and utility clients.`
        },
        {
          name: "HT/LT overhead line construction",
          image: "/images/projects/PJ2.2.png",
          description: `Overhead line construction plays a vital role in extending power supply to remote, rural, and industrial areas. CORE4 Engineers undertakes HT (High Tension) and LT (Low Tension) overhead line works including pole erection, conductor stringing, insulator installation, earthing, stay wire fixing, and line tensioning. Our teams ensure proper clearances, mechanical strength, and safety compliance as per electrical standards. These overhead networks improve supply reach, enhance distribution capability, and support long-term grid stability.`
        },
        {
          name: "HT/LT underground cable laying",
          image: "/images/projects/PJ2.3.jpg",
          description: `Underground cabling systems offer safer, more reliable, and aesthetically better alternatives to overhead lines. CORE4 Engineers specializes in HT/LT underground cable trenching, ducting, cable pulling, jointing, termination, and route marking. We follow advanced installation practices to protect cables from moisture, soil conditions, and mechanical stress. Our underground cable projects reduce outages, enhance network safety, and are ideal for urban, industrial, and high-density infrastructure.`
        },
        {
          name: "Transformer installation & commissioning",
          image: "/images/projects/PJ2.4.png",
          description: `Transformers are the backbone of power distribution networks, enabling efficient voltage conversion and load management. CORE4 Engineers provides complete transformer installation services including foundation preparation, oil filtration, connection works, protection relay setup, earthing, and full electrical testing. Our commissioning process ensures optimal efficiency, proper load balancing, and safe operation of power systems. We support both distribution and power transformers across varied capacities.`
        },
        {
          name: "Feeder pillar & distribution network projects",
          image: "/images/projects/PJ2.5.png",
          description: `Feeder pillars and distribution networks form the final stage of electrical power delivery. CORE4 Engineers designs and installs feeder pillars, distribution boxes, LT panels, and interconnected cable systems to ensure safe and controlled power distribution. Our systems include protection devices, metering, and load management features that enhance reliability and reduce distribution losses. These networks support residential layouts, commercial complexes, industries, and public infrastructure with efficient and well-organized power supply.`
        }
      ]
    },
    {
      id: 3,
      title: "Water & Wastewater Projects (WTP/STP/ETP)",
      image: "/images/projects/PJ3.1.png",
      subItems: [
        {
          name: "Sewage Treatment Plants (STP)",
          image: "/images/projects/PJ3.1.png",
          description: `Sewage Treatment Plants (STPs) play a crucial role in treating domestic wastewater and protecting the environment. CORE4 Engineers delivers complete STP solutions including civil structures, mechanical equipment, electrical systems, and automation. Our plants use advanced technologies such as MBBR, SBR, and ASP to ensure efficient removal of contaminants. We focus on low energy consumption, stable operation, odor control, and compliance with pollution control board norms. Our STPs help residential, commercial, and municipal clients manage sewage safely and sustainably.`
        },
        {
          name: "Water Treatment Plants (WTP)",
          image: "/images/projects/PJ3.2.png",
          description: `Water Treatment Plants ensure the supply of clean, safe, and potable water for residential, industrial, and institutional use. CORE4 Engineers designs and implements WTPs with processes such as filtration, sedimentation, chlorination, and advanced purification technologies. We handle complete mechanical, electrical, and automation works to ensure high-quality water output. Our systems improve water clarity, remove impurities, and maintain consistent supply, ensuring long-term reliability and regulatory compliance.`
        },
        {
          name: "Effluent Treatment Plants (ETP)",
          image: "/images/projects/PJ3.3.png",
          description: `Effluent Treatment Plants are essential for industries to treat chemically contaminated wastewater before discharge or reuse. CORE4 Engineers provides turnkey ETP solutions including chemical dosing systems, aeration tanks, clarifiers, sludge handling units, and monitoring systems. Our ETPs are designed to handle complex industrial pollutants and meet strict environmental standards. We offer energy-efficient operations, high treatment efficiency, and robust automation to help industries achieve safe and sustainable discharge practices.`
        },
        {
          name: "Industrial wastewater management",
          image: "/images/projects/PJ3.4.png",
          description: `Industrial wastewater management involves the systematic collection, treatment, recycling, and disposal of wastewater generated from industrial processes. CORE4 Engineers offers end-to-end solutions including wastewater collection networks, equalization tanks, filtration systems, monitoring instruments, and discharge management. We implement customized treatment strategies to handle heavy metals, chemicals, oils, and process wastes. Our approach ensures regulatory compliance, protects natural resources, and reduces operational costs by promoting reuse and recycling.`
        },
        {
          name: "Plant upgradation & automation (PLC/SCADA)",
          image: "/images/projects/PJ3.5.png",
          description: `Upgrading and automating water or wastewater treatment plants significantly improves performance, reduces downtime, and enhances monitoring. CORE4 Engineers provides PLC-based automation, SCADA dashboards, remote monitoring, sensor integration, and electrical upgrades for existing WTP/STP/ETP plants. Automation enables real-time control of aeration, dosing, pumps, and filtration processes. Our solutions help clients reduce manpower dependency, increase process accuracy, and achieve greater operational efficiency.`
        }
      ]
    },
    {
      id: 4,
      title: " EPC – Engineering, Procurement & Construction Projects",
      image: "/images/projects/PJ4.4.png",
      subItems: [
        {
          name: "ndustrial EPC turnkey projects",
          image: "/images/projects/PJ4.1.png",
          description: `Industrial EPC turnkey projects involve complete end-to-end execution from concept design to final commissioning. CORE4 Engineers handles engineering, procurement, construction, electrification, and automation for large-scale industrial facilities. We deliver fully operational plants ready for production, ensuring accurate planning, material quality, safety standards, and timely execution. Our integrated approach minimizes client involvement, reduces project delays, and ensures a seamless transition from construction to operations.`
        },
        {
          name: "Commercial building EPC",
          image: "/images/projects/PJ4.2.png",
          description: `Commercial EPC projects focus on developing functional, efficient, and safe buildings such as offices, malls, showrooms, and institutional structures. CORE4 Engineers manages architectural design, structural works, MEP systems, electrical distribution, fire safety, and automation. We ensure modern aesthetics, optimal space utilization, and sustainable engineering. Our expertise guarantees high-quality construction, energy-efficient systems, and long-term operational reliability for commercial establishments.`
        },
        {
          name: "Factories & warehouse EPC",
          image: "/images/projects/PJ4.3.png",
          description: `Factories and warehouses require reliable structural integrity, efficient electrical systems, and streamlined logistics planning. CORE4 Engineers delivers turnkey EPC solutions for industrial plants, storage facilities, logistics hubs, and manufacturing units. Our services include civil construction, mechanical installation, electrical works, industrial lighting, and utility connections. We design layouts focusing on workflow efficiency, safety, ventilation, and future expansion, ensuring a robust foundation for industrial operations.`
        },
        {
          name: "Utility buildings & infrastructure EPC",
          image: "/images/projects/PJ4.4.png",
          description: `Utility infrastructure forms the backbone of public and industrial ecosystems. CORE4 Engineers undertakes EPC projects for substations, pumping stations, control rooms, utility centers, and public service structures. Our scope covers civil works, electrical systems, mechanical integration, and automation. These projects enhance community development, support industrial growth, and improve essential service delivery. We ensure durability, compliance with regulatory standards, and long-term reliability in all utility EPC works.`
        }
        
      ]
    },
    {
      id: 5,
      title: "Civil & Infrastructure Projects",
      image: "/images/projects/PJ5.3.png",
      subItems: [
        {
          name: "Roads & Highways",
          image: "/images/projects/PJ5.1.png",
          description: `Road and highway projects form the backbone of regional connectivity and economic growth. CORE4 Engineers executes complete road construction works including earthwork, pavement layers, asphalt/concrete surfacing, drainage, road furniture, and safety systems. We follow IRC standards, modern surveying techniques, and advanced machinery to ensure durable, smooth, and safe road networks. Our focus on quality and precision ensures long-term performance with reduced maintenance needs.`
        },
        {
          name: "Bridges & Culverts",
          image: "/images/projects/PJ5.2.png",
          description: `Bridges and culverts are critical structures that enable smooth flow of transport and water channels. CORE4 Engineers designs and constructs RCC and steel bridges, box culverts, pipe culverts, and flyover components with strict structural and geotechnical compliance. We ensure high load-bearing capacity, stability, and safety under varying environmental conditions. Our engineered solutions improve connectivity, reduce travel time, and support long-term infrastructure reliability.`
        },
        {
          name: "Industrial buildings",
          image: "/images/projects/PJ5.3.png",
          description: `Industrial buildings require robust structural design and optimized layouts to support heavy machinery, production lines, and warehouse operations. CORE4 Engineers delivers complete industrial building solutions including foundations, steel structures, RCC works, roofing, ventilation, and electrical integration. Our facilities are designed for safety, efficiency, and future expansion. We follow industry-specific standards to ensure durability, productivity enhancement, and long-term operational performance.`
        },
        {
          name: "Drainage & stormwater networks",
          image: "/images/projects/PJ5.4.png",
          description: `Efficient drainage and stormwater systems prevent flooding, protect road infrastructure, and maintain environmental balance. CORE4 Engineers constructs RCC drains, HDPE storm lines, culverts, catch basins, and rainwater channels with proper gradient and hydraulic design. Our solutions ensure smooth water flow during monsoons, reduce erosion, and support sustainable urban planning. These systems are engineered for high durability and minimal maintenance.`
        },
        {
          name: "Public Infrastructure (PPP mode)",
          image: "/images/projects/PJ5.5.png",
          description: `Public–Private Partnership (PPP) projects combine government support with private execution expertise to develop essential public utilities. CORE4 Engineers participates in PPP infrastructure projects such as urban electrification, water supply networks, community buildings, smart city services, and public service facilities. We deliver cost-effective, long-lasting infrastructure with efficient engineering, transparent project management, and long-term operational support. These projects enhance community development and improve public service delivery.`
        }
      ]
    },
    {
      id: 6,
      title: "Industrial Electrical Projects",
      image: "/images/projects/PJ6.1.png",
      subItems: [
        {
          name: "Industrial electrification of complete plants",
          image: "/images/projects/PJ6.1.png",
          description: `Industrial electrification ensures that the entire plant receives reliable, efficient, and safe electrical power for operations. CORE4 Engineers provides end-to-end electrification solutions for manufacturing units, processing plants, warehouses, and industrial complexes. Our scope includes power distribution, PCC/MCC installation, transformer integration, earthing networks, bus duct systems, and safety compliance. With precise engineering and load analysis, we ensure uninterrupted power flow, improved energy efficiency, and long-term operational reliability for industrial facilities.`
        },
        {
          name: "LT/HT electrification",
          image: "/images/projects/PJ6.2.png",
          description: `LT (Low Tension) and HT (High Tension) electrification are essential for seamless power supply across industrial and commercial environments. CORE4 Engineers executes complete HT/LT works including substation setup, switchgear installation, overhead/underground cabling, protection systems, and transformer integration. We ensure compliance with electrical safety standards, proper fault-level coordination, and reliable distribution infrastructure. Our solutions enhance operational safety, reduce downtime, and support heavy industrial loads effectively.`
        },
        {
          name: "Street lighting projects",
          image: "/images/projects/PJ6.3.png",
          description: `Street lighting projects improve visibility, enhance safety, and support urban development. CORE4 Engineers provides complete street lighting solutions including pole erection, cable routing, LED fixtures, smart lighting controls, and feeder pillar installation. We design energy-efficient and low-maintenance systems suitable for highways, layouts, industrial campuses, and public areas. Our lighting networks ensure uniform illumination, reduced power consumption, and long-term reliability.`
        },
        {
          name: "Cable routing & termination projects",
          image: "/images/projects/PJ6.4.png",
          description: `Proper cable routing and termination are critical for safe and efficient power distribution in any electrical system. CORE4 Engineers handles detailed cable engineering including route planning, cable tray installation, trenching, pulling, jointing, and termination works. We ensure optimal cable protection, minimal voltage drop, and adherence to electrical safety standards. Our expertise ensures neat installation, long-term durability, and reliable electrical connectivity for industrial and infrastructure projects.`
        }
      ]
    },
    {
      id: 7,
      title: "Automation, SCADA & IoT Projects",
      image: "/images/projects/PJ7.4.png",
      subItems: [
        {
          name: "PLC automation projects",
          image: "/images/projects/PJ7.1.png",
          description: `PLC automation enables precise control, monitoring, and sequencing of industrial processes. CORE4 Engineers delivers complete PLC automation solutions including PLC panel design, programming, I/O configuration, and field integration. We work with leading brands like Siemens, Allen Bradley, Schneider, ABB, and Delta to create reliable, high-performance automation systems. Our PLC solutions help industries reduce manual intervention, improve production accuracy, enhance safety, and maintain stable, continuous operations.`
        },
        {
          name: "SCADA system development",
          image: "/images/projects/PJ7.2.png",
          description: `SCADA systems provide centralized monitoring and control for plants, substations, and industrial processes. CORE4 Engineers develops full-scale SCADA architectures including server-based systems, HMI screen design, communication protocols, database integration, and alarm/event management. Our SCADA solutions offer real-time visibility, advanced analytics, and remote operational control. They help clients minimize downtime, improve decision-making, and maintain complete operational oversight across large and complex infrastructures.`
        },
        {
          name: "IoT remote monitoring systems",
          image: "/images/projects/PJ7.3.png",
          description: `IoT remote monitoring enables clients to track equipment performance, energy usage, process parameters, and asset health from anywhere. CORE4 Engineers implements IoT dashboards, cloud-based data systems, smart sensors, and wireless gateways tailored for industrial and utility applications. Our IoT solutions provide instant alerts, predictive maintenance insights, and real-time analytics. This significantly reduces manual checks, increases operational efficiency, and ensures smarter, data-driven management.`
        },
        {
          name: "Control room setups",
          image: "/images/projects/PJ7.4.png",
          description: `Control rooms are critical operational hubs that centralize monitoring, automation, and safety systems. CORE4 Engineers designs and installs ergonomic, technology-driven control rooms that house SCADA systems, dispatch panels, communication equipment, network interfaces, and large display units. Our layouts focus on operator comfort, workflow optimization, and seamless integration with field equipment. These control rooms improve operational responsiveness, coordination, and situational awareness across plants and infrastructure systems.`
        },
        {
          name: "Process automation for water/industry",
          image: "/images/projects/PJ7.5.png",
          description: `Process automation improves accuracy, efficiency, and safety in both water treatment and industrial production environments. CORE4 Engineers automates filtration systems, aeration control, chemical dosing, pump operations, conveyor lines, batching systems, and various industrial processes using PLC/SCADA/IoT technologies. Automation optimizes energy consumption, stabilizes process parameters, reduces human error, and ensures consistent output quality. Our solutions create high-performing, reliable processes suitable for continuous operations.`
        }
      ]
    },
    {
      id: 8,
      title: "Panel Manufacturing & Substation Projects",
      image: "/images/projects/PJ8.3.png",
      subItems: [
        {
          name: "PCC/MCC/APFC/AMF/Synchronizing panels",
          image: "/images/projects/PJ8.1.png",
          description: `PCC, MCC, APFC, AMF, and synchronizing panels are the backbone of industrial power management. CORE4 Engineers designs and installs these panels to ensure reliable operation of motors and electrical equipment, efficient power factor management, and seamless backup during mains failure. Our synchronizing panels enable multiple generators or grid connections to operate in harmony, providing uninterrupted and stable power supply. Each panel is engineered for durability, safety, and easy integration with existing electrical systems.`
        },
        {
          name: "HT Panels (VCB/SF6/RMU)",
          image: "/images/projects/PJ8.2.png",
          description: `High-tension panels are essential for handling and distributing high-voltage power safely. CORE4 Engineers delivers VCB, SF6, and RMU panels that combine compact design with robust performance. Our panels protect against overloads and short circuits, reduce maintenance requirements, and allow reliable switching and isolation in secondary distribution networks. Designed for industrial reliability, they ensure continuity of power and operational safety across the plant.`
        },
        {
          name: "Compact Substations (CSS)",
          image: "/images/projects/PJ8.3.png",
          description: `Compact Substations integrate transformers, switchgear, and metering into a single pre-fabricated unit for efficient medium-to-low voltage distribution. At CORE4 Engineers, we design CSS units that are ideal for space-constrained environments, urban installations, or industrial sites, minimizing installation time while maximizing safety and reliability. These substations provide a ready-to-deploy solution with easy maintenance and long-term operational efficiency.`
        },
        {
          name: "Feeder Pillars & Distribution Boards",
          image: "/images/projects/PJ8.4.png",
          description: `Feeder pillars and distribution boards are key components of structured electrical networks. CORE4 Engineers designs and installs these units to manage and distribute power safely, whether in outdoor junctions or indoor industrial layouts. With proper circuit protection and isolation mechanisms, our solutions enhance operational continuity, safeguard equipment, and improve energy management efficiency.`
        },
        {
          name: "CRP & Protection Panels",
          image: "/images/projects/PJ8.5.png",
          description: `Control relay panels (CRP) and protection panels are critical for monitoring electrical parameters and activating automated safeguards. CORE4 Engineers provides tailored CRP and protection solutions that minimize equipment downtime, prevent electrical faults, and maintain operational safety. Our panels integrate seamlessly with industrial systems, offering reliable protection for both low- and high-voltage installations.`
        },
        {
          name: "Power & Control Cable installation",
          image: "/images/projects/PJ8.6.png",
          description: `Power and control cables form the lifeline of industrial electrical networks. CORE4 Engineers undertakes end-to-end cable installation, including routing, laying, termination, and testing, following stringent quality standards. Our structured cable management ensures minimal energy loss, maximizes safety, and guarantees seamless operation of all connected systems.`
        }
      ]
    },
    {
      id: 9,
      title: "Public–Private Partnership (PPP) Projects",
      image: "/images/projects/PJ9.3.png",
      subItems: [
        {
          name: "Urban infrastructure",
          image: "/images/projects/PJ9.1.png",
          description: `Urban infrastructure projects require robust and reliable electrical systems to support growing cities and industrial areas. CORE4 Engineers designs and implements electrical solutions for roads, transportation hubs, commercial complexes, and public facilities, ensuring safe, efficient, and scalable power distribution. Our expertise ensures that urban infrastructure is powered with minimal downtime and maximum operational efficiency, meeting the demands of modern city environments.`
        },
        {
          name: "Smart city electrical works",
          image: "/images/projects/PJ9.2.png",
          description: `Smart city initiatives demand intelligent, technology-driven electrical systems. At CORE4 Engineers, we deliver integrated solutions for smart lighting, automated energy management, IoT-enabled monitoring, and centralized control systems. Our designs focus on energy efficiency, sustainability, and seamless connectivity, enabling cities to operate smarter, safer, and more efficiently.`
        },
        {
          name: "Utility & public service projects",
          image: "/images/projects/PJ9.3.png",
          description: `Utility and public service projects, including power distribution, street lighting, and municipal electrical installations, require dependable and maintainable systems. CORE4 Engineers provides turnkey solutions for these projects, incorporating high-quality panels, switchgear, and cable networks to ensure uninterrupted services for communities and institutions. Our solutions enhance reliability, reduce operational costs, and support long-term infrastructure growth.`
        },
        {
          name: "Water supply & distribution networks",
          image: "/images/projects/PJ9.4.png",
          description: `Reliable water supply systems depend on efficient electrical control and distribution networks for pumping, treatment, and monitoring. CORE4 Engineers designs and installs electrical systems for water supply and distribution networks, including control panels, automation systems, and power supply arrangements. Our solutions ensure uninterrupted water delivery, energy-efficient operations, and integration with smart monitoring platforms for improved resource management.`
        }
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
              <img src={modalContent.image} alt={modalContent.name} className="w-full max-h-[70vh] object-contain rounded-lg"/>
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



