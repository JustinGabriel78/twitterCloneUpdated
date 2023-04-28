// import Navbar from "../components/navbar"
import LeftSidebar from "../components/leftSidebar"
import Feed from "../components/feed"
const Home = () => {
    return(
        <div className="home flex row">
            <LeftSidebar />
            <Feed />
            
        </div>
    )
}  

export default Home