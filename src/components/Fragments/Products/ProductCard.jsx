export default function ProductCard({ image, title, price }) {
  return (
    <div className="p-4 xl:h-[326px] lg:h-[276px] border-2 border-border-color rounded-xl xl:w-fit lg:w-[186px] md:w-[250px]">
      <div className="bg-gray-500 overflow-hidden xl:w-[217px] xl:h-[135px] lg:w-[150px] lg:h-[68px] md:w-[217px] md:h-[120px] sm:h-[200px]">
        <img src={image} alt={title} />
      </div>
      <div className="text-center font-magra mt-5">
        <h2 className="text-2xl font-semibold text-wrap">{title}</h2>
        <p className="text-[22px] text-center font-semibold mt-2  mx-auto">
          ${price}
        </p>
      </div>
    </div>
  );
}
