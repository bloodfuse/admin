import HomeMain from "../components/molecules/HomeMain";
import SideBar from '../components/molecules/SideBar'

const Home = () => {
  return (
    <div className="flex w-full h-screen">
      <SideBar />
      <HomeMain />
    </div>
  );
}

export default Home