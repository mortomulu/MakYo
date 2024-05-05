import logo from "../../../assets/logo.png";

export default function Logo() {
  return (
    <div className="flex lg:ml-16 sm:ml-16">
      <img
        className="lg:w-[213px] md:w-[150px] sm:w-[140px] "
        src={logo}
        alt=""
      />
    </div>
  );
}
