// import Hero from "../Landing/Hero";
// import AboutUs from "../Landing/AboutUs";
// import IndiaMap from "../Landing/India";
// import HomeProjects from "../Landing/HomeProjects";
// import InfrastructureComponent from "../Landing/Infrasturcture";
// import ContactSection from "../Landing/HomeContact";
// import Gallery from "../Landing/HomeGallery";
// import OurClients from "../Landing/Clients";
// import StatsSection from "../Landing/StatsSection";
// import Testimonial from "../Landing/Testimonials";
// import SolutionLanding from "../Landing/SolutionLanding";



// const Home = () =>{
//     return(
//         <>
//             <Hero/>
//             <AboutUs/>
//             <IndiaMap/>
//             <HomeProjects/>
//             <InfrastructureComponent/>
//             <SolutionLanding/>
//             <ContactSection/>
//             <Gallery/>
//             <OurClients/>
//             <StatsSection/>
//             <Testimonial/>
//         </>
//     )
// }


// export default Home;

import Hero from "../Landing/Hero";
import AboutUs from "../Landing/AboutUs";
import IndiaMap from "../Landing/India";
import HomeProjects from "../Landing/HomeProjects";
import InfrastructureComponent from "../Landing/Infrasturcture";
import ContactSection from "../Landing/HomeContact";
import Gallery from "../Landing/HomeGallery";
import OurClients from "../Landing/Clients";
import StatsSection from "../Landing/StatsSection";
import Testimonial from "../Landing/Testimonials";
import SolutionLanding from "../Landing/SolutionLanding";
import MarqueeNews from "../Landing/Marquee";
import LatestUpdates from "../Landing/LatestUpdate";
// import FloatingIcon from "../Landing/floating-energies";
import WhatsAppFloating from "../Landing/watsapp-floating";

const Home = () => {
  return (
    <>
     {/* <MarqueeNews/> */}
      <Hero />
      {/* Add id to AboutUs section */}
      <div id="about-section">
        <AboutUs />
      </div>
      <IndiaMap />
      <HomeProjects />
      <LatestUpdates/>
      <InfrastructureComponent />
      <SolutionLanding />
      <div id = "contact-section">
        <ContactSection />
      </div>
      <Gallery />
      <OurClients />
      <StatsSection />
      <Testimonial />
      {/* <FloatingIcon /> */}
      <WhatsAppFloating />
    </>
  );
};

export default Home;