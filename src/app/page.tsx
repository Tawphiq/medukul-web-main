import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TeleHealth from "./components/TeleHealth";
import TestimonialsSlider from "./components/TestimonialsSlider";
import WhatWeProvide from "./components/WhatWeProvide";

export default function Home() {
  return (
    <div className="bg-background">
      {/* Navbar */}
      <div>
        <Navbar />
      </div>
      {/* Body of Home page */}
      <div className="lg:pt-20 pt-16">
        {/* hero section */}
        <Hero />
        {/* WhatWeProvide */}
        <WhatWeProvide />
        {/* TeleHealth */}
        <TeleHealth />
        {/* TestimonialsSlider */}
        <TestimonialsSlider />
      </div>
      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
