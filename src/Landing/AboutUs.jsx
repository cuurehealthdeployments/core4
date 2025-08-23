import { useState } from "react";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("AboutUs");

  const content = {
    AboutUs: {
      text:
        "CORE4 ENGINEERS was founded as a partnership firm in the year 2014, and was upgraded to Pvt Ltd company under Companies act in the year 2022. We are also manufacturer of MV / LV Distribution Panel/Switch boards, MV Compact Sub Stations with Total Type Tested by CPRI. We provide complete EPC Solutions for Electric Vehicle / Rail Transport system, Server & Networking companies, PCB manufacturing companies, and other manufacturing entities as per their needs.",
      image: "/images/PO6.png",
    },
  };

  return (
    <section className="px-4 py-12 bg-gray-100 md:px-8 lg:px-16">
      {/* Main About Us Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
        {/* Text Content */}
        <div>
          <h3 className="text-green-600 font-semibold text-center md:text-left">
            Welcome to Core4 Engineers
          </h3>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2 text-center md:text-left">
            Core4 Engineers Limited - Engineering The Future
          </h1>
          <div className="mt-6 flex flex-wrap justify-center md:justify-start space-x-4 pb-2">
            {Object.keys(content).map((tab) => (
              <span
                key={tab}
                className={`relative font-semibold cursor-pointer pb-2 ${
                  activeTab === tab ? "text-black border-b-2 border-green-500" : "text-gray-500"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </span>
            ))}
          </div>
          <p className="mt-4 text-gray-700 text-justify">{content[activeTab].text}</p>
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div>
              <h2 className="text-lg md:text-xl font-bold">20+</h2>
              <p className="text-gray-500">Countries Supplied</p>
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-bold">148</h2>
              <p className="text-gray-500">Completed Projects</p>
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-bold">11+</h2>
              <p className="text-gray-500">Years of Experience</p>
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div className="relative text-center">
          <img
            src={content[activeTab].image}
            alt={activeTab}
            className="w-full rounded-lg shadow-lg transition-all duration-500"
          />
        </div>
      </div>

      {/* Our Vision Section */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="relative text-center">
              <img
                src="/images/2.jpg"
                alt="Our Mission"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="text-center md:text-left mb-4">
              <h2 className="text-2xl md:text-3xl font-bold inline-block">
                Our Vision
              </h2>
              <div className="w-16 h-0.5 bg-green-500 mx-auto md:mx-0 mt-2"></div>
            </div>
            <p className="text-gray-700 text-justify">
                            Our vision is to maximize project execution speed and profitability in Small and Medium EPC contracts, also to create assets with new technology to provide infrastructure solutions under PPP for Small and Medium Infrastructure.

            </p>
          </div>
        </div>
      </div>
      

      {/* Our Mission Section */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-center md:text-left mb-4">
              <h2 className="text-2xl md:text-3xl font-bold inline-block">
                Our Mission
              </h2>
              <div className="w-16 h-0.5 bg-green-500 mx-auto md:mx-0 mt-2"></div>
            </div>
            <p className="text-gray-700 text-justify">
              Mission is to embrace and adapt new technologies to solve modern problems, by converting into opportunities for a profitable enterprise, driving towards more consistent and sustainable future which will ultimately leads to Engineering the Future.
            </p>
          </div>
          <div className="relative text-center">
            <img
              src="/images/1.jpg"
              alt="Our Vision"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
