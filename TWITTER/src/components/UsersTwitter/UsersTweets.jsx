import { useTwitterStore } from "../../store/TwitterStore.jsx";
import ButtonsUser from "./ButtonsUser.jsx";

const UsersTweets = () => {

  const {users,search} = useTwitterStore();
  
  return (
    <div className="flex flex-col">
      {users
      .filter((user)=> user.text.toLowerCase().includes(search))
      .map((user) => (

        <div key={user.id} className="border-b-2 hover:bg-slate-800 border-slate-800">

          <div style={{alignItems:"center"}} className="flex">

            <p className="ml-4 mr-4 mt-2 mb-0 w-8 h-8"><img src={user.avatar} alt="Avatar" /></p>
            <p className="">User</p>
            <p className="text-sm text-twitter-dark-gray ml-2">
              @user-{user.random} - {user.date > '12' ? `${user.date} PM` : `${user.date} AM`}
            </p>

          </div>

          <div className="flex mt-2 w-full ">
            <p className="ml-14 ">{user.text}</p>
          </div>

          <div className="w-full max-h-56 ml-2 flex mt-4 justify-center">
            <img className="rounded-xl shadow-sm w-40 sm:w-96 lg:w-72 md:w-60 xl:w-96 h-auto" src={user.image} alt="" />
          </div>


          <div className=" mr-7 mt-3">
          
            <ButtonsUser user={user}/>

          </div>

        </div>

      ))}
    </div>
  );
};

export default UsersTweets;
