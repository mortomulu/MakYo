import Mak from "../../../assets/Mak.png"
import Yo from "../../../assets/Yo.png"

export default function Logo (){
    return (
        <div className="w-[213px] h-[73] flex ml-44">
            <img className="" src= {Yo} alt="mak" />
            <img className="ml-[-210px]" src= {Mak} alt="mak" />
        </div>
    )
}