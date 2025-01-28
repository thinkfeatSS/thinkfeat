import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import Service from "./Service";
import About from "./About";
import Services from "./Services";
import Choose from "./Choose";
import OurServices from "./OurProject";
import Footer from "../components/Footer";
import Courses from "./Courses";
import Team from "./Team";
import Contact from "./contact/Contact";
 



export default function Home() {
  return (
    <main className="relative">
      <div className="html dark:bg-surface-color bg-on-surface-color text-on-surface-color">
        <Hero />
        <Service/>
        <Courses/>
         
        <About/>
        {/* <Services/> */}
        {/* <Choose/> */}
        <OurServices/>
        <Team/>
        <Contact/>
        <Footer/>

        
      </div>
      
      {/* <div className="sticky top-0 h-[768px] flex flex-col items-center justify-center bg-indigo-600 text-white">
        <OutTeam />
      </div>
      <div className="sticky top-0 h-[768px] flex flex-col items-center justify-center bg-purple-600 text-white">
        <OutTeam />

      </div>
      <div className="sticky top-0 h-[768px] flex flex-col items-center justify-center bg-neutral-800 text-white">
        <OutTeam />

      </div> */}
    </main>
  );
}
