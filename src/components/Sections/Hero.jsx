import HeroContent from "../Fragments/Hero/HeroContent";
import Logo from "../Fragments/Hero/Logo";
import Navbar from "../Fragments/Hero/Navbar";
import poster from "../../assets/poster.png";

const Hero = () => {
  return (
    <div className="w-full bg-main pb-20 lg:pr-20 sm:pr-10">
      <Navbar />
      <Logo />
      <div className="flex pl-20 lg:pt-20 md:pt-16 sm:pt-10">
        <HeroContent />
        <img
          className="2xl:w-[900px] xl:w-[500px] lg:w-[400px] md:w-[300px] md:inline sm:hidden mt-[-80px] ml-auto"
          src={poster}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
