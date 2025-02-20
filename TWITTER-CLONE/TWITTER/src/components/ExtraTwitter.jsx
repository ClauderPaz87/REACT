import { FaSearch } from "react-icons/fa";

const ExtraTwitter = () => {
  return (
    <div className="ml-3 mt-3 ">

      <div className="relative">
        <input
          className="outline-none rounded-full p-1 w-64 pl-8 text-twitter-extra-light-gray bg-slate-800 inputSearch"
          placeholder="Search Twitter"
          type="search"
        />
        <FaSearch className="text-twitter-dark-gray absolute top-2 left-2" />
      </div>

      <div className="bg-slate-800 mt-5 w-64 rounded-md">
        <p className="text-white font-bold text-xl ml-2">
          Subscribe to Premium
        </p>
        <p className="text-twitter-light-gray mt-3 ml-2">
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue
        </p>
        <button
          type="button"
          className="bg-twitter-blue text-white font-bold rounded-full p-2 mt-2 ml-2 mb-2 hover:bg-neutral-800 w-32"
        >
          Subscribe
        </button>
      </div>

    <div className="bg-slate-800 mt-5 w-64 rounded-md">
        <p className="text-white font-bold text-xl ml-2">
          Whats Happening
        </p>
        <div className="mt-5 ml-2">
            <p className="text-twitter-light-gray">
                NFL-Live
            </p>
            <p className="text-white font-bold">
                Cardilans at Bills
            </p>
            <p className="text-twitter-light-gray mt-4">
                Sports-Trending
            </p>
            <p className="text-white font-bold">
                Kyle Dugger
            </p>
            <p className="text-twitter-light-gray mt-4">
                Sports-Trending
            </p>
            <p className="text-white font-bold">
                Anthony Richardson
                <p className="text-xs text-twitter-light-gray">13.8K posts</p>
            </p>
            <p className="text-twitter-light-gray mt-4">
                Sports-Trending
            </p>
            <p className="text-white font-bold">
                Brice Young
                <p className="text-xs text-twitter-light-gray">5.4K posts</p>
            </p>
            <p className="text-twitter-light-gray mt-4">
                Sports-Trending
            </p>
            <p className="text-white font-bold">
                Daboll
                <p className="text-xs text-twitter-light-gray pb-5">1.162 posts</p>
            </p>
        </div>
    </div>
        
    </div>
  );
};

export default ExtraTwitter;
