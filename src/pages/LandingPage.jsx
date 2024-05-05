import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import Hero from "../components/Sections/Hero";
import Products from "../components/Sections/Products";
import WhyChooseUs from "../components/Sections/WhyChooseUs";

export default function LandingPage() {
  return (
    <div className="w-full border-none">
      <Hero />
      <WhyChooseUs />
      <Products />
      <Contact/>
      <Footer/>
    </div>
  );
}
