import { GrGallery } from "react-icons/gr";
import { FaSquareLetterboxd } from "react-icons/fa6";
import { SlEmotsmile } from "react-icons/sl";
import { RiEmotionUnhappyLine } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const IconsForms = () => {

  return (
    <div style={{ alignItems: "center" }} className="ml-3 flex absolute bottom-0">
      <p className="mr-4">
        <GrGallery className="text-twitter-blue" />{" "}
      </p>
      <p className="mr-4">
        <FaSquareLetterboxd className="text-twitter-blue" />
      </p>
      <p className="mr-4">
        <SlEmotsmile className="text-twitter-blue" />
      </p>
      <p className="mr-4">
        <RiEmotionUnhappyLine size={20} className="text-twitter-blue" />
      </p>
      <p className="mr-4">
        <FaCalendarAlt className="text-twitter-blue" />
      </p>
      <p className="">
        <FaLocationDot className="text-twitter-blue" />
      </p>
    </div>
  );

};

export default IconsForms;
