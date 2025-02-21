import { GrGallery } from "react-icons/gr";
import { FaSquareLetterboxd } from "react-icons/fa6";
import { SlEmotsmile } from "react-icons/sl";
import { RiEmotionUnhappyLine } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useTwitterStore } from "../../store/TwitterStore";

const IconsForms = ({valueT}) => {
  
  const {smile,anger}= useTwitterStore()

  const btnEmojiHappy = ()=>{
    valueT.current.value += smile 
  }

  const btnEmojiAnger = ()=>{
    valueT.current.value += anger
  }

  return (
    <div style={{ alignItems: "center" }} className="ml-3 mt-4 max-w-12 flex absolute bottom-0">
      <p className="mr-4 md:mr-2">
        <GrGallery className="text-twitter-blue" />
      </p>
      <p className="mr-4 md:mr-2">
        <FaSquareLetterboxd className="text-twitter-blue" />
      </p>
      <button type="button" onClick={btnEmojiHappy} className="mr-4 md:mr-2">
        <SlEmotsmile className="text-twitter-blue" />
      </button>
      <button type="button" onClick={btnEmojiAnger} className="mr-4 md:mr-2">
        <RiEmotionUnhappyLine size={20} className="text-twitter-blue" />
      </button>
      <p className="mr-4 md:mr-2">
        <FaCalendarAlt className="text-twitter-blue" />
      </p>
      <p className="">
        <FaLocationDot className="text-twitter-blue" />
      </p>
    </div>
  );

};

export default IconsForms;
