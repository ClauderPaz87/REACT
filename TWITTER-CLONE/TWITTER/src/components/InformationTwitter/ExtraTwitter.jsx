import { FaSearch } from "react-icons/fa";
import EventsTwitter from "./EventsTwitter";
import SubscribeTwitter from "./SubscribeTwitter";
import { useTwitterStore } from "../../store/TwitterStore";

const ExtraTwitter = () => {
  const {searchUser} = useTwitterStore()

  const inputSearch = (e)=>{
    searchUser(e.toLowerCase())
  }

  return (
    <div className="ml-3 mt-3 ">

      <div className="relative">
        <input
          onChange={(e)=>inputSearch(e.target.value)}
          className="outline-none rounded-full p-1 w-64 pl-8 text-twitter-extra-light-gray bg-slate-800 inputSearch"
          placeholder="Search Twitter"
          type="search"
        />
        <FaSearch className="text-twitter-dark-gray absolute top-2 left-2" />
      </div>

      <div>
        <SubscribeTwitter/>
      </div>

      <div>
          <EventsTwitter/>
      </div>
        
    </div>
  );
};

export default ExtraTwitter;
