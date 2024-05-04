import TitleSection from "../Elements/TitleSection";
import orderOnline from "../../assets/order online.png"
import MessageForm from "../Fragments/Contact/MessageForm";

export default function Contacts() {
  return (
    <div className="w-full py-28 px-32 flex flex-col">
      <TitleSection title={'Contact Us'} />
      <div className="mx-auto mt-16 w-[901px] h-[487px] border-2 border-border-color rounded-lg pt-10 pl-16 flex">
        <MessageForm/>
        <img className="w-[403px] h-[352px] ml-20" src={orderOnline} alt="order online" />
      </div>
    </div>
  );
}
