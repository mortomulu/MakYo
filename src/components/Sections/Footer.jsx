import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import whatsapp from "../../assets/whatsapp.png";

export default function Footer() {
  return (
    <div className="w-full h-[216px] bg-main flex flex-col pt-16">
      <ul className="flex gap-6 justify-center">
        <li>
          <a href="">
            <img src={instagram} alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={youtube} alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={whatsapp} alt="" />
          </a>
        </li>
      </ul>
      <div className="flex py-5 bg-black justify-center items-center mt-10">
        <p className="text-center text-white font-mulish text-xs">
          Copyright 2024 MakYo. All Rights Reserved
        </p>
      </div>
    </div>
  );
}
