import React from "react";

export default function KMP() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* ===== Header ===== */}
      <div className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-6 sm:px-10">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4">
            Key Management Personnel
          </h1>
          <div className="flex items-center space-x-2 text-sm sm:text-base">
            <span>Home</span>
            <span>»</span>
            <span>List Of KMP</span>
          </div>
        </div>
      </div>

      {/* ===== Cards Section ===== */}
      <div className="container mx-auto px-6 sm:px-10 py-16">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">

            {/* ===== CFO Card ===== */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-md px-10 py-8 text-center w-72 flex flex-col items-center">
              
              {/* Image */}
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gray-200 overflow-hidden mb-4">
                <img
                  src="/images/investors icon/dummy.png"   
                  alt="CFO"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-2xl font-semibold mb-2">
                CFO
              </h2>
              <p className="text-lg font-medium">
                Mr. Vinod Kumar S
              </p>
              <p className="text-gray-600 mt-1">
                Chief Financial Officer
              </p>
            </div>

            {/* ===== CS Card ===== */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-md px-10 py-8 text-center w-72 flex flex-col items-center">
              
              {/* Image */}
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gray-200 overflow-hidden mb-4">
                <img
                  src="/images/investors icon/dummy.png"  
                  alt="CS"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-2xl font-semibold mb-2">
                CS
              </h2>
              <p className="text-lg font-medium">
                Ms. Theja R
              </p>
              <p className="text-gray-600 mt-1">
                Company Secretary
              </p>
            </div>

            {/* ===== CTO Card ===== */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-md px-10 py-8 text-center w-72 flex flex-col items-center">
              
              {/* Image */}
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gray-200 overflow-hidden mb-4">
                <img
                  src="/images/investors icon/dummy.png"  
                  alt="CS"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-2xl font-semibold mb-2">
                CTO
              </h2>
              <p className="text-lg font-medium">
                Mr. Siddesh N
              </p>
              <p className="text-gray-600 mt-1">
                Chief Technical Officer
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
