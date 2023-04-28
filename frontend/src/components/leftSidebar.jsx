import SidebarOption from "./sidebarOption"
import logo from "../assets/twitter_logo-icon.svg"
import blueIcon from "../assets/twitter_blue-icon.png"
import bookmarks from "../assets/twitter_bookmarks-icon.png"
import explore from "../assets/twitter_explore-icon.png"
import home from "../assets/twitter_home-icon.png"
import messages from "../assets/twitter_messages-icon.png"
import more from "../assets/twitter_more-icon.svg"
import notification from "../assets/twitter_notification-icon.svg"
import profile from "../assets/twitter_profile-icon.png"
import verified from "../assets/twitter_verified-icon.svg"



const LeftSidebar =() => {
    const sidebarItems = [{icon: home, text:"Home"},{icon:explore, text:"Explore"},{icon:notification,text:"Notifications"},{icon:messages,text:"Messages"},{icon:bookmarks,text:"Bookmarks"},{icon:blueIcon,text:"Twitter Blue"},{icon:verified, text:"Verified Organiza..."},{icon:profile,text: "Profile" },{icon:more,text:"More"}]

    return(
        <div className="w-72 border border-r-2">
        <div><img src={ logo } alt="twitter logo" className="mt-2 mx-3 w-10 h-10"/></div> 
        
        <div className="h-3/4">
            {sidebarItems.map( ({icon, text},index) => 
            <SidebarOption icon={icon} text={text} key={ index}/>
             )}
        </div>


        <button className="border rounded-full bg-[#49a3e3] w-56 h-14 mx-3 mt-10 text-white">Tweet</button>
        

        </div>
    )
}

export default LeftSidebar