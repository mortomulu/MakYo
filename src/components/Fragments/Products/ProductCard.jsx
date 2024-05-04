export default function ProductCard({ image, title, price }) {
  return (
    <div className="w-[256px] h-[326px] border-2 border-border-color rounded-xl p-4">
      <div className="bg-gray-500 overflow-hidden w-[217px] h-[135px]">
        <img src={image} alt={title} />
      </div>
      <div className="text-center font-magra mt-5">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-[22px] text-center font-semibold mt-2 w-[210px] mx-auto">
          ${price}
        </p>
      </div>
    </div>
  );
}
