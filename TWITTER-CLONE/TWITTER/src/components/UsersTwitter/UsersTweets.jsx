import { useTwitterStore } from "../../store/TwitterStore";
import ButtonsUser from "./ButtonsUser";

const UsersTweets = () => {

  const {users} = useTwitterStore();    

  return (
    <div className="">
      {users
      .filter((user)=> user.text !== '')
      .map((user) => (

        <div key={user.id} className="border-b-2 border-twitter-dark-gray">

          <div style={{alignItems:"center"}} className="flex">

            <p className="ml-4 mr-4 mt-2 mb-0 w-8 h-8"><img src={user.avatar} alt="Avatar" /></p>
            <p className="">User</p>
            <p className="text-sm text-twitter-dark-gray ml-2">
              @user-{user.random} - {user.date > '12' ? `${user.date} PM` : `${user.date} AM`}
            </p>

          </div>

          <div className="flex mt-2">

            <p className="ml-16">{user.text}</p>

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
