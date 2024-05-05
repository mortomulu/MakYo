export default function ServiceCard({ image, title, desc, style }) {
  return (
    <div className="2xl:w-[261px] xl:w-[200px] md:w-[300px] xl:h-fit">
      <img className={`${style} xl:w-full`} src={image} alt="" />
      <div className="text-center font-lexend-deca mt-5">
        <h2 className="lg:text-2xl sm:text-xl">{title}</h2>
        <p className="lg:text-lg sm:text-sm text-center mt-2 mx-auto">{desc}</p>
      </div>
    </div>
  );
}
