import Contacts from "../components/Sections/Contact";
import Hero from "../components/Sections/Hero";
import Products from "../components/Sections/Products";
import WhyChooseUs from "../components/Sections/WhyChooseUs";

export default function LandingPage() {
  return (
    <div className="w-full border-none">
      <Hero />
      <WhyChooseUs />
      <Products />
      <Contacts/>
    </div>
  );
}
