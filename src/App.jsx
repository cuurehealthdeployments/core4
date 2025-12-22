import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ManagementTeam from "./pages/ManagementTeam";
import Gallery from "./pages/Gallery";
import Investors from "./pages/Investors";
import BusinessDetails from "./pages/Investors/BusinessDetails";
import KMP from "./pages/Investors/KMP";
import BOD from "./pages/Investors/BOD";
import BoardCommittee from "./pages/Investors/BoardCommittee";
import CorporatePolicies from "./pages/Investors/CorporatePolicies";
import CSR from "./pages/CSR";
import Contact from "./pages/Contact";
import IPO from "./pages/IPO";
import Reports from "./pages/Reports";
import PoliciesPage from "./pages/Policies";
import Updates from "./pages/Updates";
import ProjectsPage from "./pages/Projects";
import ServicePage from "./pages/Services";
import ProductPage from "./pages/Products";
import CSRSection from "./pages/CSR";
import MarqueeNews from "./Landing/Marquee";
import ChatbotScriptsLoader from "./scripts/ChatbotScriptsLoader";


const App = () => {
  return (
    <>
    <Router> {/* Ensure Router is wrapping everything */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
          <Route path="*" element={<Home/>} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/management-team" element={<ManagementTeam />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/investors/csr" element={<CSR />} />
            <Route path="/business-details" element={<BusinessDetails />} />
            <Route path="/kmp" element={<KMP />} /> 
            <Route path="/board-of-directors" element={<BOD />} />
            <Route path="/board-committee" element={<BoardCommittee />} />
            <Route path="/corporate-oversight" element={<CorporatePolicies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/investors/IPO" element={<IPO />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/investors/polices" element={<PoliciesPage/>} />
            <Route path="/investors/latestupdates" element={<Updates/>} />
            <Route path="/projects" element={<ProjectsPage/>} />
            <Route path="/services" element={<ServicePage/>} />
            <Route path="/products" element={<ProductPage/>} />
            <Route path="/investors/csr" element={<CSRSection/>} />
            
          </Routes>
        
        </div>
        <Footer />
      </div>
    </Router>
<ChatbotScriptsLoader/>
    </>
  );
};

export default App;
