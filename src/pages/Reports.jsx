import { useEffect } from "react";
import { ChevronRight, Download } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const reportDocuments = [
  {
    title: "Financial Statement – FY 2022-23",
    filePath: "/pdf/FY_22-23.pdf",
  },
  {
    title: "Financial Statement – FY 2023-24",
    filePath: "/pdf/FY_23-24.pdf",
  },
];

export default function Reports() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-6 sm:px-10">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4">
            Reports
          </h1>
          <div className="flex items-center space-x-2 text-sm sm:text-base">
            <span>Home</span>
            <span>»</span>
            <span>Reports</span>
          </div>
        </div>
      </div>

      {/* Reports List */}
      <div className="container mx-auto px-6 sm:px-10 py-8">
        <div className="flex flex-col items-start space-y-4">
          {reportDocuments.map((doc, index) => (
            <a
              key={index}
              href={doc.filePath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
              data-aos="fade-up"
            >
              <ChevronRight size={16} className="mr-2" />
              <span className="flex-1 text-sm sm:text-base">
                {doc.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
