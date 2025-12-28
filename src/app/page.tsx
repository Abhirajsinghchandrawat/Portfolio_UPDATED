import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import ServicesIntro from "@/components/sections/services-intro";
import WhyChooseUs from "@/components/sections/why-choose-us";
import ToolStack from "@/components/sections/tools-stack";
import ProjectsHighlight from "@/components/sections/projects-highlight";
import ServiceCards from "@/components/sections/service-cards";
import ContactForm from "@/components/sections/contact-form";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesIntro />
      <WhyChooseUs />
      <ToolStack />
      <ProjectsHighlight />
      <ServiceCards />
      <ContactForm />
      <Footer />
    </main>
  );
}
