import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhoWeAre from "@/components/sections/WhoWeAre";
import Categories from "@/components/sections/Categories";
import Services from "@/components/sections/Services";
import ProjectTypes from "@/components/sections/ProjectTypes";
import HowItWorks from "@/components/sections/HowItWorks";
import Advantages from "@/components/sections/Advantages";
import Gallery from "@/components/sections/Gallery";
import Brands from "@/components/sections/Brands";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhoWeAre />
        <Categories />
        <Services />
        <ProjectTypes />
        <HowItWorks />
        <Advantages />
        <Gallery />
        <Brands />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
