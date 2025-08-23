// import { Link } from "react-router-dom";
// import { Facebook, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-[#0C1D35] text-white py-10 px-6 md:px-16">
//       <div className="container mx-auto text-center md:text-left">
//         {/* Logo */}
//         <div className="mb-6 flex justify-center md:justify-start">
//           <img src="images\logo.png" alt="Denta Logo" className="h-12" />
//         </div>

//         {/* Quick Links & Address Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-bold">QUICK LINKS :</h3>
//             <ul className="mt-6 space-y-2">
//               {[
//                 { path: "/", label: "Home" },
//                 { path: "/about", label: "About Us" },
//                 { path: "/management-team", label: "Management Team" },
//                 { path: "/projects", label: "Project" },
//                 { path: "/investors", label: "Investors" },
//                 { path: "/contact", label: "Contact Us" },
//                 { path: "/privacy-policy", label: "Privacy Policy" },
//                 { path: "/csr", label: "CSR" },
//               ].map(({ path, label }) => (
//                 <li key={path}>
//                   <Link to={path} className="hover:text-blue-400 flex items-center">
//                     <span className="mr-2">➤</span> {label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Address */}
//           <div>
//             <h3 className="text-lg font-bold">ADDRESS :</h3>
//             <ul className="mt-6 space-y-3">
//               <li className="flex items-center justify-center md:justify-start">
//                 <Phone className="w-5 h-5 mr-2" /> +91-93640 09300 / +91-93640 09301
//               </li>
//               <li className="flex items-center justify-center md:justify-start">
//                 <Mail className="w-5 h-5 mr-2" /> core4engineerspvtltd@gmail.com
//               </li>
//               <li className="flex items-center justify-center md:justify-start">
//                 <MapPin className="w-7 h-9 mr-2" /> No. 12. 1st Floor, Near New Law Court, K-Block, Kuvempunagar, Mysuru - 570 023, KARNATAKA, INDIA
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Social Media Icons */}
//       <div className="container mx-auto flex justify-center md:justify-end space-x-4 mt-8">
//         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-white rounded">
//           <Facebook className="w-5 h-5" />
//         </a>
//         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-white rounded">
//           <Twitter className="w-5 h-5" />
//         </a>
//         <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-white rounded">
//           <Youtube className="w-5 h-5" />
//         </a>
//       </div>

//       {/* Copyright */}
//       <div className="text-center mt-8 text-sm">
//         © {currentYear}, All Rights Reserved By Denta Water and Infra Solutions Limited
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaGlobe, FaWindows, FaAndroid, FaApple } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
          
          {/* Column 1 */}
          <div>
            <h3 className="font-bold text-lg">Get Core4</h3>
            <ul className="mt-4 space-y-2">
              <li>Residential Construction</li>
              <li>Commercial Construction</li>
              <li>Renovation & Remodeling</li>
              <li>Infrastructure Development</li>
              <li>Project Management</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <div className="flex items-center gap-2">
              <FaGlobe className="text-xl" />
              <h3 className="font-bold text-lg">Web Browser</h3>
            </div>
            <ul className="mt-4 space-y-2">
              <li>Industries Served</li>
              <li>Client Testimonials</li>
              <li>Case Studies</li>
              <li>Recent Project</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <div className="flex items-center gap-2">
              <FaWindows className="text-xl" />
              <h3 className="font-bold text-lg">Windows</h3>
            </div>
            <ul className="mt-4 space-y-2">
              <li>Construction Guides</li>
              <li>Safety & Compliance</li>
              <li>Cost Estimation Tool</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <div className="flex items-center gap-2">
              <FaAndroid className="text-xl" />
              <h3 className="font-bold text-lg">Android</h3>
            </div>
            <ul className="mt-4 space-y-2">
              <li>Help Center</li>
              <li>FAQs</li>
              <li>Webinars</li>
              <li>Consultation Booking</li>
              <li>Site Inspection Services</li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <div className="flex items-center gap-2">
              <FaApple className="text-xl" />
              <h3 className="font-bold text-lg">iOS</h3>
            </div>
            <ul className="mt-4 space-y-2">
              <li>About Us</li>
              <li>Contact</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Investors Report</li>
              <li>Press & Media</li>
              <li>Legal Policies</li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center mt-10 space-x-6 text-gray-600">
          <FaFacebook className="text-2xl cursor-pointer hover:text-gray-800" />
          <FaInstagram className="text-2xl cursor-pointer hover:text-gray-800" />
          <FaTwitter className="text-2xl cursor-pointer hover:text-gray-800" />
          <FaLinkedin className="text-2xl cursor-pointer hover:text-gray-800" />
          <FaYoutube className="text-2xl cursor-pointer hover:text-gray-800" />
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-600 mt-6">
          © 2025 Design by Linqway
        </p>
      </div>
    </footer>
  );
};

export default Footer;