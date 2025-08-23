import React from "react";

const CSRSection = () => {
  return (
    <div className="w-full">
      {/* Banner Section */}
      <div
        className="bg-blue-900 text-white text-center py-12 px-4 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/image.png')",
          backgroundBlendMode: "overlay",
        }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold">Corporate Social Responsibility</h1>
        <p className="text-sm sm:text-base mt-2">
          <a href="/" className="text-gray-300 hover:text-white">Home</a> &gt; Corporate Social Responsibility
        </p>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">2022-2023</h2>
          <p className="text-gray-700 mt-4 text-sm sm:text-base">
            At Water and Infra Solutions Limited, we believe in empowering communities through sustainable
            infrastructure development. As part of our Corporate Social Responsibility (CSR) initiatives, we have
            undertaken the refurbishment, restoration, and renovation of the Government Pre-Graduation College (High
            School Division) in Santhebachahalli, K.R. Pete Taluk, Mandya District. Our commitment to fostering a
            conducive learning environment for students has driven us to enhance educational facilities that shape the
            future of young minds.
          </p>

          {/* Scope of the Initiative */}
          <h3 className="text-xl font-semibold mt-6 text-gray-800">Scope of the Initiative</h3>
          <ul className="list-decimal list-inside text-gray-700 mt-4 space-y-4 text-sm sm:text-base">
            <li>
              <strong>Infrastructure Development:</strong>
              <ul className="list-disc ml-5 mt-1 space-y-1">
                <li>Construction and repair of classrooms to ensure a safe and conducive learning environment.</li>
                <li>Upgrading school premises with better flooring, roofing, and sanitation facilities.</li>
              </ul>
            </li>
            <li>
              <strong>Refurbishing & Restoration:</strong>
              <ul className="list-disc ml-5 mt-1 space-y-1">
                <li>Revamping the existing school buildings with fresh paint, improved ventilation, and modernized learning spaces.</li>
                <li>Repairing damaged furniture and providing new classroom essentials.</li>
              </ul>
            </li>
            <li>
              <strong>Sanitation & Hygiene Improvements:</strong>
              <ul className="list-disc ml-5 mt-1 space-y-1">
                <li>Building new restrooms and upgrading existing sanitation facilities for both students and staff.</li>
                <li>Installing clean drinking water facilities to promote hygiene and well-being.</li>
              </ul>
            </li>
            <li>
              <strong>Electrical & Technological Advancements:</strong>
              <ul className="list-disc ml-5 mt-1 space-y-1">
                <li>Enhancing lighting and electrical systems for a well-lit and secure campus.</li>
                <li>Providing digital learning tools, projectors, and smart classroom facilities to improve education quality.</li>
              </ul>
            </li>
          </ul>

          {/* Impact on the Community */}
          <h3 className="text-xl font-semibold mt-6 text-gray-800">Impact on the Community</h3>
          <p className="text-gray-700 mt-2 text-sm sm:text-base">
            The initiative aims to create a significant impact by improving access to quality education in rural areas. By
            modernizing the school infrastructure, we strive to provide students with a motivating atmosphere that fosters
            learning, creativity, and overall development. Teachers and students will benefit from enhanced resources,
            contributing to better academic performance and an enriched educational experience.
          </p>

          {/* Commitment to Sustainable Development */}
          <h3 className="text-xl font-semibold mt-6 text-gray-800">Commitment to Sustainable Development</h3>
          <p className="text-gray-700 mt-2 text-sm sm:text-base">
            Denta Water and Infra Solutions Limited is dedicated to contributing towards the Sustainable Development Goals
            (SDGs), particularly Goal 4: Quality Education, and Goal 6: Clean Water and Sanitation. Through this initiative,
            we reaffirm our commitment to social progress, community welfare, and long-term sustainability.
          </p>

          <p className="text-gray-700 mt-4 text-sm sm:text-base font-semibold">
            Together, we build a brighter future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CSRSection;
