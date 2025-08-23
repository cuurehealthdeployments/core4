

import { useEffect } from "react";
import { ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PoliciesPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Header Section */}
      <div className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Policies</h1>
          <div className="flex items-center space-x-2">
            <span>Home</span>
            <span>»</span>
            <span>Policies</span>
          </div>
        </div>
      </div>

      {/* Policies List */}
      <div className="container mx-auto px-4 py-8">
        <ul className="space-y-4">
          {[
            "Board Diversity Policy",
            "Code of Conduct Policy",
            "CSR Policy",
            "Materiality Policy",
            "Policy of Prevention of Sexual Harassment at Workplace",
            "Succession Plan",
            "Terms & Conditions of Appointment of Independent Directors",
            "Vigil Mechanism Policy",
            "Board Evaluation Policy",
            "Code on Prohibition of Insider Trading",
            "Familiarization Program for Independent Directors",
          ].map((policy) => (
            <li key={policy} data-aos="fade-up">
              <a href="#" className="flex items-center text-blue-500 hover:text-blue-700">
                <ChevronRight size={16} className="mr-2" />
                <span>{policy}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
