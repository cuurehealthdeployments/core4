import { useEffect } from "react";
import { ChevronRight, Download } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const reportDocuments = [
  {
    title: "Familiarization Programme of ID",
    filePath: "/pdf/corporate-oversights/1.Familiarization Programme of ID.pdf",
  },
  {
    title: "Nomination and Remuneration Policy",
    filePath: "/pdf/corporate-oversights/2.Nomination and Remuneration Policy.pdf",
  },
  {
    title: "Vigil Mechanism & Whistler Blower Policy",
    filePath: "/pdf/corporate-oversights/3.Vigil Mechanism & Whistler Blower Policy.pdf",
  },
  {
    title: "Code of Conduct for Prevention of Insider Trading",
    filePath: "/pdf/corporate-oversights/4.Code of Conduct for Prevention of Insider Trading.pdf",
  },
  {
    title: "Criteria of Independence of Directors",
    filePath: "/pdf/corporate-oversights/5.Criteria of Independence of Directors.pdf",
  },
  {
    title: "Policy on Related Party Transactions",
    filePath: "/pdf/corporate-oversights/6.Policy on Related Party Transactions.pdf",
  },
  {
    title: "Code of Conduct for prevention of Insider Trading",
    filePath: "/pdf/corporate-oversights/7.Code of Conduct for prevention of Insider Trading.pdf",
  },
  {
    title: "Policy for disclosure of material events and information",
    filePath: "/pdf/corporate-oversights/8.Policy for disclosure of material events and information.pdf",
  },
  {
    title: "Policy on preservation and Archival of documents",
    filePath: "/pdf/corporate-oversights/9.Policy on preservation and Archival of documents.pdf",
  },
  {
    title: "Policy on prevention of Sexual Harassment at workplace(POSH)",
    filePath: "/pdf/corporate-oversights/10.Policy on prevention of Sexual Harassment at workplace(POSH).pdf",
  },
  {
    title: "Dividend Policy",
    filePath: "/pdf/corporate-oversights/11.Dividend Policy.pdf",
  },
  {
    title: "Terms & Conditions for appointment of Independent Directors",
    filePath: "/pdf/corporate-oversights/12.Terms & Conditions for appointment of Independent Directors.pdf",
  },
  {
    title: "POLICY ON CSR",
    filePath: "/pdf/corporate-oversights/13.POLICY ON CSR.pdf",
  },
  {
    title: "Policy on Fair Disclosure",
    filePath: "/pdf/corporate-oversights/14.Policy on Fair Disclosure.pdf",
  },
  {
    title: "Materiality of and Dealing with RPT",
    filePath: "/pdf/corporate-oversights/15. Materiality of and Dealing with RPT",
  },
  {
    title: "Policy on identification of group companies, Material creditors, Material",
    filePath: "/pdf/corporate-oversights/16.Policy on identification of group companies, Material creditors, Materialpdf",
  },
];

export default function CorporateOversights() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-6 sm:px-10">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4">
            Corporate Oversights
          </h1>
          <div className="flex items-center space-x-2 text-sm sm:text-base">
            <span>Home</span>
            <span>»</span>
            <span>Corporate Oversights</span>
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
              download
              className="flex items-center w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
              data-aos="fade-up"
            >
              <ChevronRight size={16} className="mr-2" />
              <span className="flex-1 text-sm sm:text-base">
                {doc.title}
              </span>
              <Download size={20} className="ml-2" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
