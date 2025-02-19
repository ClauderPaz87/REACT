import { IoChatbubbleSharp } from "react-icons/io5";
import { RiChatDeleteLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaCloudArrowUp } from "react-icons/fa6";
import { useTwitterStore } from "../store/TwitterStore";

const UsersTweets = () => {

  const {users,updateCountChat,updateCountHeart,deleteUser,editUser} = useTwitterStore();    

  const btnEdit = (id,text)=>{
    const newText = prompt("nova tarefa:", text)
    editUser(id,newText)

  }

  const randomTweets = [
    'Acabei de entrar no clone do Twitter! Estou animado para me
    conectar com todos aqui. 👋 #NovoUsuário',
    'Mais um dia, mais uma linha de código. Continuem avançando,
    colegas desenvolvedores! 💻 #VidaDeCodificação',
    'Quem mais vai ficar acordado até tarde para assistir à chuva de
    meteoros hoje à noite? 🌠 #CéuNoturno',
    'Lembrete: seja gentil consigo mesmo e com os outros. Um pouco
    de compaixão faz toda a diferença. ️ #Positividade
    'Dica técnica do dia: sempre faça backup dos seus dados! Você vai
    agradecer a si mesmo mais tarde. 💾 #ConselhoTecnológico',
    
    ]
  

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
          <div className="w-80 mr-7 mt-3">
            
            <div className="flex justify-between w-96 mt-6 ml-14 mb-2">

              <button onClick={()=>updateCountChat(user.id)} style={{alignItems:'center'}} className="flex hover:text-twitter-dark-gray" type="button">
                <IoChatbubbleSharp className="mr-2" /> <span className="text-sm text-twitter-dark-gray">{user.chat}</span>
              </button>
              <button onClick={()=>deleteUser(user.id)} className="hover:text-red-700" type="button">
                <RiChatDeleteLine size={17}/>
              </button>
              <button onClick={()=>updateCountHeart(user.id)} style={{alignItems:'center'}} className="flex hover:text-red-700" type="button">
                <FaHeart  className="mr-2" /> <span className="text-sm text-twitter-dark-gray">{user.heart}</span>
              </button>
              <button onClick={()=>btnEdit(user.id,user.text)} type="button" className="hover:text-emerald-500">
                <FaRegEdit />
              </button>
              <button type="button">
                <FaCloudArrowUp />
              </button>

            </div>

          </div>

        </div>

      ))}
    </div>
  );
};

export default UsersTweets;
