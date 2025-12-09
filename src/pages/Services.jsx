import React, { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

// Import images
import service1 from "/images/services/SR1.jpg";
import service2 from "/images/services/SR2.png";
import service3 from "/images/services/SR3.jpg";
import service4 from "/images/services/SR4.jpg";
import service5 from "/images/services/SR5.jpg";
import service6 from "/images/services/SR6.jpg";

const services = [
  {
    title: "Railway Infrastructure",
    preview: `At CORE4 ENGINEERS Limited, we specialize in delivering comprehensive
        engineering solutions for the railway infrastructure sector, combining innovation,
        technical excellence, and safety-driven design. Our dedicated team of railway
        engineers, planners, and project managers support modernization, expansion,
        and maintenance of rail networks that connect communities and drive economic growth.`,
    description: (
      <>
        At CORE4 ENGINEERS Limited, we specialize in delivering comprehensive
        engineering solutions for the railway infrastructure sector, combining innovation,
        technical excellence, and safety-driven design. Our dedicated team of railway
        engineers, planners, and project managers support modernization, expansion,
        and maintenance of rail networks that connect communities and drive economic growth.
        <br /><br />
        <span className="font-bold">Our Expertise :</span>
        <br />
        We provide end-to-end railway infrastructure services covering every stage of a
        project — from feasibility studies and detailed design to construction supervision
        and asset management.
        <br /><br />
        <span className="font-bold">Our Railway Infrastructure Services Include :</span><br />
        <span className="font-bold">➣ Railway Electrification </span><br />
        Precision engineering for Over Head Electrification (OHE) works, associated Traction Sub-Stations (TSS) with necessary Power Supply Installations for 1 X 25KV and 2 X 25KV systems.
        <br />
        <span className="font-bold">➣ Railway Foot-over Bridges & Structures </span><br />
        Design, Engineer, Fabrication and Erection of Footover bridges, culverts, retaining walls, and other civil structures.
        <br />
        <span className="font-bold">➣ Railway Stations & Terminals </span>
        Planning and engineering of Railway Station Redevelopment of passenger and freight stations with an emphasis on accessibility, functionality, commercial and safety.
        <br />
        <span className="font-bold">➣ Signalling & Telecom works </span>
        <br />
        Integration of track and systems interfaces to ensure safe and efficient operations.
        <br />
        <span className="font-bold">➣ Drainage & Earthworks </span>
        <br />
        Design of subgrade, embankments, and drainage systems to ensure long-term stability and durability.
        <br />
        <span className="font-bold">➣ Project Management & Supervision </span>
        <br />
        Comprehensive oversight to ensure quality, cost, and schedule targets are achieved.
        <br />
        <span className="font-bold">➣ Rehabilitation & Upgrading Works </span>
        <br />
        Modernization of existing railway assets for improved performance and reduced maintenance costs.
        <br />
        <span className="font-bold">➣ Pre – Engineered Building </span>
        <br />
        Design, Fabrication, and Erection of Pre – Engineered buildings focusing on reduced construction time, reliability and safety.
        <br /><br />

        <span className="font-bold">Why Choose CORE4 ENGINEERS ?</span><br />
        ➣ Proven experience in Railway design, Construction, and Project delivery.<br />
        ➣ Commitment to Railway standards and local regulatory compliance.<br />
        ➣ A multidisciplinary approach integrating Civil, Structural, Geotechnical, Electrical, OHE, S&T and systems engineering.<br />
        ➣ Focus on Safety, Sustainability, and Innovation in every project.
        <br /><br />
        At CORE4 ENGINEERS Limited, we understand the complexity of railway systems and the importance of reliability in transport networks. Our mission is to deliver infrastructure that enhances connectivity, supports economic growth, and contributes to a sustainable future.
      </>
    ),
    img: service1,
  },
  {
    title: "Water and Wastewater Treatment",
    preview: `At CORE4 ENGINEERS Limited, we provide innovative, sustainable, and cost-effective Water
        and Wastewater Treatment solutions designed to meet the needs of municipalities,
        industries, and communities.`,
    description: (
      <>
        At CORE4 ENGINEERS Limited, we provide innovative, sustainable, and cost-effective Water
        and Wastewater Treatment solutions designed to meet the needs of municipalities,
        industries, and communities.
        <br /><br />
        <span className="font-bold">Our Expertise :</span><br />
        We specialize in the Planning, Design, Construction, and Optimization of water and
        wastewater treatment systems.
        <br /><br />
        <span className="font-bold">Our Water & Wastewater Services Include :</span>
        <br />
        <span className="font-bold">➣ Water Treatment Plants (WTP):</span><br />
        Design and implementation of plants for purification, filtration, and disinfection of
        raw water.
        <br />
        <span className="font-bold">➣ Wastewater Treatment Plants (WWTP):</span><br />
        Comprehensive solutions for domestic and industrial wastewater, including
        biological, chemical, and physical treatment systems.
        <br />
        <span className="font-bold">➣ Sewage Treatment Systems:</span><br />
        Design and rehabilitation of sewer networks, pumping stations, and treatment
        facilities.
        <br />
        <span className="font-bold">➣ Effluent Treatment Plants (ETP):</span>
        <br />
        Custom solutions for industrial clients to treat effluents and meet environmental discharge regulations.
        <br />
        <span className="font-bold">➣ Sludge Management:</span>
        <br />
        Sustainable handling, treatment, and disposal or reuse of sludge.
        <br />
        <span className="font-bold">➣ Water Recycling & Reuse:</span>
        <br />
        Integration of advanced technologies for water reuse and resource recovery.
        <br />
        <span className="font-bold">➣ Operation & Maintenance Support:</span>
        <br />
        Long-term operational services, performance monitoring, and capacity-building.
        <br /><br />
        <span className="font-bold">Why Choose CORE4 ENGINEERS Limited?</span><br />
        ➣ Proven experience in Designing and Executing Treatment facilities.<br />
        ➣ Commitment to Environmental sustainability.<br />
        ➣ Integration of state-of-the-art technologies.<br />
        ➣ A client-focused approach for every project.
        <br /><br />
        At CORE4 ENGINEERS Limited, we believe that access to clean water and responsible
        wastewater management are essential to sustainable development. Our goal is to engineer
        smart, reliable, and environmentally sound systems that protect natural resources and
        improve quality of life.
      </>
    ),
    img: service2,
  },
  {
    title: "EHV Transmission and Distribution Systems",
    preview: `At CORE4 ENGINEERS Limited, we provide innovative, sustainable, and cost-effective EHV Transmission and Distribution 
        solutions. Our team covers full project cycles, from design to commissioning, for overhead lines, substations, 
        urban & rural electrification, cable engineering, SCADA and grid upgrades.`,
    description: (
      <>
        At CORE4 ENGINEERS Limited, we provide innovative, sustainable, and cost-effective EHV Transmission and Distribution 
        solutions. Our team covers full project cycles, from design to commissioning, for overhead lines, substations, 
        urban & rural electrification, cable engineering, SCADA and grid upgrades.
        <br /><br />
        <span className="font-bold">Our Services Include:</span>
        <br />
        <span className="font-bold">➣ Transmission Line Works (Up to 440 kV):</span>
        Engineering design and optimization of overhead transmission lines, including route selection and tower design for 11kV to 400kV.
        <br />
        <span className="font-bold">➣ Substation Design (AIS & GIS):</span>
        Design, Supply, Erection and Commissioning of Air-Insulated and Gas-Insulated substations.
        <br />
        <span className="font-bold">➣ Distribution Network Systems:</span>
        Planning and implementation of medium and low-voltage distribution networks for urban and rural electrification.
        <br />
        <span className="font-bold">➣ Cable Engineering:</span>
        Design and installation of EHV underground systems.
        <br />
        <span className="font-bold">➣ Protection, Control & SCADA Systems:</span>
        Integration of automation, monitoring, and control for efficient grid operation.
        <br />
        <span className="font-bold">➣ Project Management & Supervision:</span>
        Support for design, procurement, construction, testing and commissioning.
        <br />
        <span className="font-bold">➣ Upgrading & Rehabilitation Works:</span>
        Modernization of existing infrastructure for better reliability and capacity.
        <br /><br />
        <span className="font-bold">Why Choose CORE4 ENGINEERS Limited?</span><br />
        ➣ Proven expertise in EHV system design.<br />
        ➣ International standards (IEC, IEEE, IS).<br />
        ➣ Cutting-edge, sustainable engineering.<br />
        ➣ Commitment to Quality, Safety, and Timely delivery.<br /><br />
        At CORE4 ENGINEERS Limited, our mission is to empower communities and industries with
        efficient, resilient, and future-ready power infrastructure. We ensure that every project we
        deliver contributes to a stronger, smarter, and more sustainable energy network.
      </>
    ),
    img: service3,
  },
  {
    title: "Manufacturing of HT / LT Distribution Panels",
    preview: ` At CORE4 ENGINEERS Limited, we deliver advanced engineering solutions for Extra High
        Voltage (EHV) Transmission and Distribution Systems, enabling reliable power delivery from generation sources to consumers.`,
    description: (
      <>
        At CORE4 ENGINEERS Limited, we deliver advanced engineering solutions for Extra High
        Voltage (EHV) Transmission and Distribution Systems, enabling reliable power delivery from generation sources to consumers.
        <br /><br />
        <span className="font-bold">Our Product Range Includes:</span>
        <br />
        <span className="font-bold">➣ Compact / Packaged Sub – Stations (Up to 33kV):</span>
        CSS for up to 2.5MVA, with protection systems and optional metering units.
        <br />
        <span className="font-bold">➣ HT Panels (Up to 33kV):</span>
        VCB/ACB panels and control panels for high-voltage applications.
        <br />
        <span className="font-bold">➣ LT Panels (Up to 1.1kV):</span>
        Main LT panels, PCC, MCC, and boards for power distribution.
        <br />
        <span className="font-bold">➣ AMF & Synchronizing Panels:</span>
        Automated panels for generator synchronization and load sharing.
        <br />
        <span className="font-bold">➣ Capacitor Panels & APFC Panels:</span>
        Intelligent PF correction panels for energy efficiency.
        <br />
        <span className="font-bold">➣ Power Quality Restorer Panels:</span>
        Power quality improvement devices for voltage and harmonic reliability.
        <br />
        <span className="font-bold">➣ Feeder Pillars & Metering Panels:</span>
        Weatherproof metering and distribution; supports IoT systems.
        <br />
        <span className="font-bold">➣ PLC & Automation Panels:</span>
        Industrial process management and smart power solutions.
        <br /><br />
        <span className="font-bold">Quality and Standards</span><br />
        All panels are designed and manufactured in compliance with IEC, IS, and relevant utility standards.<br /><br />
        <span className="font-bold">Why Choose CORE4 ENGINEERS Limited?</span><br />
        ➣ In-house design, manufacturing and testing.<br />
        ➣ Customized industrial, commercial and utility solutions.<br />
        ➣ Premium components and compliance with safety standards.<br />
        ➣ Timely delivery with after-sales support.<br /><br />
        At CORE4 ENGINEERS Limited, we are committed to powering progress through innovation,
        precision engineering, and uncompromising quality. Our HT and LT panels are not just
        products — they are reliable power solutions engineered to perform in demanding
        environments.
      </>
    ),
    img: service4,
  },
  {
    title: "Automation and SCADA Systems",
    preview: `At CORE4 ENGINEERS Limited, we design and implement advanced Automation and SCADA
        (Supervisory Control and Data Acquisition) systems that enhance the efficiency, reliability,
        and safety of industrial and infrastructure operations. Our automation solutions empower
        clients with real-time monitoring, intelligent control, and data-driven decision-making —
        ensuring optimized performance and reduced operational costs.`,
    description: (
      <>
        At CORE4 ENGINEERS Limited, we design and implement advanced Automation and SCADA
        (Supervisory Control and Data Acquisition) systems that enhance the efficiency, reliability,
        and safety of industrial and infrastructure operations. Our automation solutions empower
        clients with real-time monitoring, intelligent control, and data-driven decision-making —
        ensuring optimized performance and reduced operational costs.
        <br /><br />
        <span className="font-bold">Our Expertise</span>
        <br />
        With a team of skilled automation engineers, control specialists, and software developers,
        we deliver end-to-end system integration — from concept design and hardware selection
        to programming, commissioning, and maintenance. We work across diverse sectors
        including power, water and wastewater, manufacturing, transportation, and process
        industries.<br /><br />
        <span className="font-bold">Our Automation &amp; SCADA Services Include:</span>
        <br />
        <span className="font-bold">➣ SCADA System Design &amp; Integration:</span>
        Development and implementation of centralized monitoring and control systems for
        utility networks, substations, and industrial plants.
        <br />
        <span className="font-bold">➣ PLC Programming &amp; Control Systems:</span>
        Design and configuration of programmable logic controllers (PLC) for process
        automation, equipment control, and system interlocking.
        <br />
        <span className="font-bold">➣ HMI &amp; Control Room Solutions:</span>
        User-friendly Human Machine Interface (HMI) systems for intuitive operation, fault
        diagnosis, and performance visualization.
        <br />
        <span className="font-bold">➣ RTU &amp; Remote Monitoring Systems:</span>
        Integration of Remote Terminal Units (RTUs) for data acquisition and control across
        geographically distributed assets.
        <br />
        <span className="font-bold">➣ Energy Management Systems (EMS):</span>
        Smart automation for optimizing energy usage, monitoring consumption, and
        improving power efficiency.
        <br />
        <span className="font-bold">➣ Instrumentation &amp; Sensor Integration:</span>
        Complete instrumentation solutions with smart sensors, transmitters, and field
        devices for precise control and feedback.
        <br />
        <span className="font-bold">➣ System Upgrades &amp; Retrofit Solutions:</span>
        Modernization of existing automation and SCADA systems to improve performance,
        reliability, and cybersecurity.
        <br /><br />
        <span className="font-bold">Why Choose CORE4 ENGINEERS Limited?</span><br />
        ➣ Proven expertise in industrial automation and control system design.<br />
        ➣ Partnership with leading PLC/SCADA technology providers (Siemens, Schneider,
        ABB, Rockwell, etc.).<br />
        ➣ Custom-engineered solutions that ensure interoperability and scalability.<br />
        ➣ Focus on cybersecurity, system reliability, and long-term service support.<br />
        ➣ Dedicated engineering teams for commissioning, training, and O&amp;M support.<br /><br />

        At CORE4 ENGINEERS Limited, we believe automation is the key to a smarter, safer, and
        more sustainable future. Our customized SCADA and automation solutions help industries
        and utilities achieve higher productivity, improved efficiency, and full control over their
        operations.
      </>
    ),
    img: service5,
  },
  {
    title: "PMC (Project Management Consultancy)",
    preview: `Professional project planning, DPR assistance, execution monitoring, budgeting, costing, documentation (MIS, progress reports) and quality/safety oversight for infrastructure and industrial projects..`,
    description: (
      <>
        Professional project planning, DPR assistance, execution monitoring, budgeting, costing, documentation (MIS, progress reports) and quality/safety oversight for infrastructure and industrial projects.
        <br /><br />
        
        <span className="font-bold">Our PMC Services Include :</span>
        <br />
        <span className="font-bold">➣Project Planning & Scheduling:</span><br />
         Preparation of detailed project timelines, resource allocation plans, and milestone charts using industry-standard project management tools. Critical Path analysis ensures seamless coordination among all stakeholders.
        <br />
        <span className="font-bold">➣ DPR Preparation & Technical Documentation:</span><br />
        Development of Detailed Project Reports (DPR) including feasibility analysis, BOQ preparation, cost estimation, layout drawings, and engineering documentation as per project requirements.
        <br />
        <span className="font-bold">➣ Cost Estimation, Budgeting & Control:</span><br />
        Accurate budget planning with continuous cost monitoring to prevent overruns. Includes vendor price evaluation, cost optimization, and financial progress tracking.
        <br />
        <span className="font-bold">➣ Onsite Monitoring & Supervision:</span>
        <br />
        Regular onsite inspections covering quality checks, material verification, work progress validation, and adherence to safety standards. Daily/weekly monitoring ensures timely project execution.        <br />
        <span className="font-bold">➣ Vendor & Contractor Coordination:</span>
        <br />
        End-to-end coordination with suppliers, contractors, clients, and consultants for smooth execution. Includes material approvals, design clarifications, and interface management.
        <br />
        <span className="font-bold">➣ MIS Reporting & Progress Tracking:</span>
        <br />
        Preparation of structured MIS reports with photographs, progress charts, bar schedules, inspection logs, and work status updates for client review.
        <br />
        <span className="font-bold">➣ Quality & Safety Assurance:</span>
        <br />
        Implementation of QA/QC procedures, safety guidelines, method statements, and site checklists to ensure compliance with standards and reduce operational risk.
        <br />
         <span className="font-bold">➣  Testing, Commissioning & Handover Support:</span>
        <br />
        Coordination of final testing activities, documentation of as-built drawings, and preparation of handover reports for seamless project completion and client acceptance.        <br /><br />
        <br />

        <span className="font-bold">Why Choose CORE4 ENGINEERS Limited?</span><br />
        ➣ End-to-end Project Management Expertise covering planning, engineering coordination, vendor management, execution monitoring, and final commissioning.<br />
        ➣ Systematic project tracking methods using project schedules, DPR/MIS reporting, risk assessment, and milestone-based progress monitoring.<br />
        ➣ Strong technical background in electrical, civil, mechanical, and utility-based project supervision to ensure complete compliance and quality.<br />
        ➣ Transparent coordination with contractors, OEMs, and clients, ensuring smooth communication and timely closure of activities.<br />
        ➣ Strict adherence to safety standards, QA/QC procedures, statutory norms, and industry best practices.<br />
        ➣ Cost and time optimization approach, reducing delays and avoiding rework through proactive planning and technical review.<br />
        ➣ Strict adherence to safety standards, QA/QC procedures, statutory norms, and industry best practices.<br /> <br />
         At CORE4 ENGINEERS Limited, our PMC services ensure your project is executed with precision, quality, and complete transparency—delivering the results you expect, within the timelines you commit.
      </>
    ),
    img: service6,
  },
];

const ServicePage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function openModal(service) {
    setSelected(service);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setModalOpen(false);
    setSelected(null);
    document.body.style.overflow = "";
  }

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
              className={`flex flex-col md:flex-row items:center gap-6 bg-white p-6 rounded-2xl shadow-lg w-full ${
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
                  {service.preview}
                </p>

                {/* Read more button (opens modal) */}
                <div className="mt-4 flex justify-center md:justify-start">
                  <button
                    onClick={() => openModal(service)}
                    className="px-6 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal: centered with top 10% / bottom 10% / left 20% / right 20% and scrollable */}
      {modalOpen && selected && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center"
          aria-modal="true"
          role="dialog"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={closeModal}
            aria-hidden="true"
          />

          {/* Modal container */}
          <div
            className="relative bg-white rounded-2xl shadow-2xl overflow-hidden"
            style={{
              position: "fixed",
              top: "7vh",
              bottom: "7vh",
              left: "17vw",
              right: "17vw",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              aria-label="Close"
              className="absolute top-3 right-3 z-50 rounded-full p-2 transition close-btn"
              style={{
                background: "transparent",
              }}
            >
              <span className="text-gray-600 text-lg close-icon">✕</span>
            </button>

            <style>{`
              .close-btn:hover {
                background: #dc2626;
              }
              .close-btn:hover .close-icon {
                color: white;
              }
              button[aria-label="Close"]:hover {
                background: #dc2626;
              }
              button[aria-label="Close"]:hover span {
                color: white;
              }
            `}</style>

            {/* Image first */}
            <div className="w-full h-48 sm:h-56 bg-gray-200 flex-shrink-0">
              <img
                src={selected.img}
                alt={selected.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Scrollable content area */}
            <div
              className="p-6 overflow-y-auto"
              style={{
                height: "calc(100% - 10rem)",
              }}
            >
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-bold">{selected.title}</h3>
              </div>
              <div className="mt-4 text-gray-700 leading-relaxed">
                {selected.description}
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicePage;
