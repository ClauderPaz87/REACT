
const SubscribeTwitter = () => {
  return (
    <div className="bg-slate-800 mt-5 w-64 rounded-md">
      <p className="text-white font-bold text-xl ml-2">Subscribe to Premium</p>
      <p className="text-twitter-light-gray mt-3 ml-2">
        Subscribe to unlock new features and if eligible, receive a share of ads
        revenue
      </p>
      <button
        type="button"
        className="bg-twitter-blue text-white font-bold rounded-full p-2 mt-2 ml-2 mb-2 hover:bg-neutral-800 w-32"
      >
        Subscribe
      </button>
    </div>
  );
};

export default SubscribeTwitter;
