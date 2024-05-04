import HeroContent from "../Fragments/Hero/HeroContent";
import Logo from "../Fragments/Hero/Logo";
import Navbar from "../Fragments/Hero/Navbar";
import poster from "../../assets/poster.png";

const Hero = () => {
  return (
    <div className="w-full h-[1092px] bg-main">
      <Navbar />
      <Logo />
      <div className="flex pl-28 pt-20 pr-20 ">
        <HeroContent />
        <img className="w-[618px] h-[854px] mt-[-80px] ml-10" src={poster} alt="" />
      </div>
    </div>
  );
};

export default Hero;
