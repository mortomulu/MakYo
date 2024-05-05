export default function Navbar() {
  return (
    <div className="pt-6">
      <ul className="flex font-magra text-white xl:text-2xl lg:text-xl md:text-md sm:text-sm justify-end">
        <li className="py-1 px-8 border-r border-white">
          <a href="">HOME</a>
        </li>
        <li className="py-1 px-8 border-r border-white">
          <a href="">ORDER</a>
        </li>
        <li className="py-1 pl-6">
          <a href="">Testimonial</a>
        </li>
      </ul>
    </div>
  );
}
