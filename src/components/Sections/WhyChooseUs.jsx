import ServiceCard from "../Fragments/WhyChooseUs.jsx/ServiceCard";
import orderOnline from "../../assets/order online.png"
import onlinePayment from "../../assets/onlinepayment.png"
import delivery from "../../assets/delivery.png"
import realProduct from "../../assets/realproduct.png"

export default function WhyChooseUs(){
    return (
        <div className="w-full py-28 px-32">
                <h1 className="font-lexend-deca text-section-title text-center">Why Choose Us?</h1>
                <div className="mt-24 flex justify-between">
                    <ServiceCard image={orderOnline} title={'order online'} desc={'melakukan pesanan secara online tanpa harus datang'}/>
                    <ServiceCard image={onlinePayment} title={'online payment'} desc={'pembayaran praktis melalui e-wallet atau transfer'}/>
                    <ServiceCard image={delivery} title={'delivery'} desc={'pengiriman cepat dan gratis untuk area jabodetabek'}/>
                    <ServiceCard image={realProduct} title={'real product'} desc={'barang original dan sesuai dengan yang ada di katalog'}/>
                </div>
        </div>
    )
}