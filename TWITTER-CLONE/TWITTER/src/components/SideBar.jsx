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
    <div className="border-r-2 border-slate-800 ml-3 flex md:justify-end md:grid">
        <nav className="relative text-white font-semibold flex flex-row mt-5 gap-6 mr-5 md:flex-col">
            <GrTwitter className="relative text-twitter-blue mb-4" size={35}/>
            <div className="flex flex-col sm:flex-row gap-5 md:flex-col mr-1">
              <p className="flex"><IoHomeOutline className="mr-4 md:mr-4" size={20}/>Home</p>
              <p className="flex"><HiHashtag className="mr-4 md:mr-4" size={20}/>Explore</p>
              <p className="flex"><IoNotifications className="mr-4 md:mr-4" size={20}/>Notifications</p>
              <p className="flex"><HiOutlineMail className="mr-4 md:mr-4" size={20}/>Message</p>
            </div>
            <div className="flex flex-col gap-5 sm:flex-col mr-1">
              <p className="flex"><CiBookmark className="mr-4 md:mr-4" size={20}/>BookMarks</p>
              <p className="flex"><IoMdPersonAdd className="mr-4 md:mr-4" size={20}/>Communities</p>
              <p className="flex"><FiTwitter className="mr-4 md:mr-4" size={20}/>Premium</p>
              <p className="flex"><IoPersonOutline className="mr-4 md:mr-4" size={20}/>Profile</p>
              <p className="flex absolute mt-2 right-32 top-40 sm:right-16  md:right-12 md:top-96 md:mt-11"><IoHomeOutline className="mr-1 md:mr-4" size={20}/>...More</p>
            </div>
        </nav>
    </div>
  )
}

export default SideBar