import { IoChatbubbleSharp } from "react-icons/io5";
import { RiChatDeleteLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaCloudArrowUp } from "react-icons/fa6";
import { useTwitterStore } from "../../store/TwitterStore";

const ButtonsUser = ({user}) => {
  const { updateCountChat , updateCountHeart , deleteUser , editUser } = useTwitterStore();

  const btnEdit = (id,text)=>{
    const newText = prompt("nova tarefa:", text)
    editUser(id,newText)

  }

  return (
    <div className="flex justify-between w-96 mt-6 ml-14 mb-2">
      <button
        onClick={() => updateCountChat(user.id)}
        style={{ alignItems: "center" }}
        className="flex hover:text-twitter-dark-gray"
        type="button"
      >
        <IoChatbubbleSharp className="mr-2" />{" "}
        <span className="text-sm text-twitter-dark-gray">{user.chat}</span>
      </button>
      <button
        onClick={() => deleteUser(user.id)}
        className="hover:text-red-700"
        type="button"
      >
        <RiChatDeleteLine size={17} />
      </button>
      <button
        onClick={() => updateCountHeart(user.id)}
        style={{ alignItems: "center" }}
        className="flex hover:text-red-700"
        type="button"
      >
        <FaHeart className="mr-2" />{" "}
        <span className="text-sm text-twitter-dark-gray">{user.heart}</span>
      </button>
      <button
        onClick={() => btnEdit(user.id, user.text)}
        type="button"
        className="hover:text-emerald-500"
      >
        <FaRegEdit />
      </button>
      <button type="button">
        <FaCloudArrowUp />
      </button>
    </div>
  );
};

export default ButtonsUser;
