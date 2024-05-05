import TitleSection from "../Elements/TitleSection";
import orderOnline from "../../assets/order online.png"
import MessageForm from "../Fragments/Contact/MessageForm";

export default function Contacts() {
  return (
    <div className="w-full py-28 xl:px-32 lg:px-24 flex flex-col">
      <TitleSection title={'Contact Us'} />
      <div className="mx-auto mt-16 xl:w-[901px] lg:w-[801px] md:w-[656px] sm:w-[500px] h-[487px] border-2 border-border-color rounded-lg pt-10 pl-16 flex">
        <MessageForm/>
        <img className="w-[403px] md:inline sm:hidden h-[352px] xl:ml-20 lg:ml-10" src={orderOnline} alt="order online" />
      </div>
    </div>
  );
}