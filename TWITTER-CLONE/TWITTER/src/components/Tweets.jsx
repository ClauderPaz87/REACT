import UsersTweets from "./UsersTweets";
import { useRef} from "react";
import { useTwitterStore } from "../store/TwitterStore";
import { GrGallery } from "react-icons/gr";
import { FaSquareLetterboxd } from "react-icons/fa6";
import { SlEmotsmile } from "react-icons/sl";
import { RiEmotionUnhappyLine } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Tweets = () => {
  const valueTweet = useRef("");
  const {addUsers} = useTwitterStore()

  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date().toLocaleString([], { hour:"2-digit", minute:"2-digit"})
    const seed = Math.random().toString(36).substring(7);
    const url = `https://api.dicebear.com/7.x/pixel-art/svg?seed=${seed}`;

    addUsers(valueTweet.current.value, url, date, Math.floor(Math.random() * 1000),);

  };

  return (
    <div className="grid-rows-2 border-e-2 border-twitter-dark-gray text-white">
      <form
        onSubmit={handleSubmit}
        className="h-48 w-full mr-0 mt-3 justify-center border-b-2 border-twitter-dark-gray"
      >
        <div>
          <p className="font-semibold ml-3">For Your</p>
        </div>

        <div className="ml-3">
          <textarea
            ref={valueTweet}
            className="bg-twitter-background outline-none w-full h-20 resize-none mt-5"
            placeholder="Whats's Happening"
          ></textarea>
        </div>

        <div className="h-8 relative mt-2">
          <div
            style={{ alignItems: "center" }}
            className="ml-3 flex absolute bottom-0"
          >
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

          <button
            className="w-24 mr-3 absolute right-0 bg-twitter-blue rounded-full p-1 font-semibold hover:bg-twitter-dark-gray"
            type="submit"
          >
            Tweet
          </button>
        </div>
      </form>

      <UsersTweets />
    </div>
  );
};

export default Tweets;
