export default function ServiceCard({ image, title, desc }) {
  return (
    <div className="w-[261px]">
      <img src={image} alt="" />
      <div className="text-center font-lexend-deca mt-5  ">
        <h2 className="text-2xl">{title}</h2>
        <p className="text-lg text-center mt-2 w-[210px] mx-auto">{desc}</p>
      </div>
    </div>
  );
}
