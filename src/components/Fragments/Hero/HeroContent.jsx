export default function HeroContent() {
  return (
    <div className="flex-col text-white w-[1/2] md:pr-32">
      <h1 className="font-linden-hill 2xl:text-hero-title xl:text-[65px] lg:text-[55px] md:text-[43px] sm:text-[39px] ">
        Best Quality <br />
        E-Commerce in the World
      </h1>
      <p className="font-mulish 2xl:text-2xl xl:text-xl lg:text-sm sm:text-[12px]">Menyediakan berbagai macam barang yang anda butuhkan</p>
      <a className=" xl:mt-16 lg:mt-10 sm:mt-8 lg:w-[175px] sm:w-[130px] lg:h-[44px] sm:h-[30px] bg-button-color lg:text-base md:text-sm font-noto-serif text-center flex items-center justify-center" href="">Order Now</a>
    </div>
  );
}
