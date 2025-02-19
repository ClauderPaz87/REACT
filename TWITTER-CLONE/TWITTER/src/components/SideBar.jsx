import { GrTwitter } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { HiHashtag } from "react-icons/hi";
import { IoNotifications } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { CiBookmark } from "react-icons/ci";
import { IoMdPersonAdd } from "react-icons/io";
import { FiTwitter } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";

const SideBar = () => {

  return (
    <div className="grid justify-end border-r-2 h-screen border-twitter-dark-gray">
        <nav className="text-white font-semibold flex flex-col mt-5 gap-6 mr-5">
            <GrTwitter className="text-twitter-blue mb-4" size={35}/>
            <p className="flex"><IoHomeOutline className="mr-4" size={20}/>Home</p>
            <p className="flex"><HiHashtag className="mr-4" size={20}/>Explore</p>
            <p className="flex"><IoNotifications className="mr-4" size={20}/>Notifications</p>
            <p className="flex"><HiOutlineMail className="mr-4" size={20}/>Message</p>
            <p className="flex"><CiBookmark className="mr-4" size={20}/>BookMarks</p>
            <p className="flex"><IoMdPersonAdd className="mr-4" size={20}/>Communities</p>
            <p className="flex"><FiTwitter className="mr-4" size={20}/>Premium</p>
            <p className="flex"><IoPersonOutline className="mr-4" size={20}/>Profile</p>
            <p className="flex"><IoHomeOutline className="mr-4" size={20}/>...More</p>
            <button className="w-52 bg-twitter-blue rounded-full p-2 hover:bg-twitter-dark-gray" type="button">Tweet</button>
        </nav>
    </div>
  )
}

export default SideBar