import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WhyDrinkWell from "@/components/WhyDrinkWell";
import HowItWorks from "@/components/HowItWorks";
import BrandingShowcase from "@/components/BrandingShowcase";
import ProductShowcase from "@/components/ProductShowcase";
import Industries from "@/components/Industries";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <WhyDrinkWell />
        <HowItWorks />
        <BrandingShowcase />
        <ProductShowcase />
        <Industries />
        <Benefits />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
