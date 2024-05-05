import ServiceCard from "../Fragments/WhyChooseUs.jsx/ServiceCard";
import orderOnline from "../../assets/order online.png";
import onlinePayment from "../../assets/onlinepayment.png";
import delivery from "../../assets/delivery.png";
import realProduct from "../../assets/realproduct.png";
import TitleSection from "../Elements/TitleSection";

export default function WhyChooseUs() {
  return (
    <div className="w-full py-28 xl:px-32 lg:px-16 md:px-16">
      <TitleSection title={"Why Choose Us?"} />
      <div className="xl:mt-24 lg:mt-20 md:mt-16 sm:mt-12 flex lg:flex-nowrap sm:flex-wrap lg:justify-between sm:justify-center lg:gap-4 sm:gap-8">
        <ServiceCard
          image={orderOnline}
          title={"order online"}
          desc={"melakukan pesanan secara online tanpa harus datang"}
          style={'2xl:mt-0 xl:mt-[20px] xl:w-auto lg:w-150 sm:mx-auto lg:h-[177px]'}
        />
        <ServiceCard
          image={onlinePayment}
          title={"online payment"}
          desc={"pembayaran praktis melalui e-wallet atau transfer"}
          style={'xl:w-auto lg:w-150 sm:mx-auto lg:h-[177px]'}
        />
        <ServiceCard
          image={delivery}
          title={"delivery"}
          desc={"pengiriman cepat dan gratis untuk area jabodetabek"}
          style={'xl:w-auto lg:w-150 sm:mx-auto lg:h-[177px]'}
        />
        <ServiceCard
          image={realProduct}
          title={"real product"}
          desc={"barang original dan sesuai dengan yang ada di katalog"}
          style={'xl:w-auto lg:w-100 sm:mx-auto lg:h-[177px]'}
        />
      </div>
    </div>
  );
}
