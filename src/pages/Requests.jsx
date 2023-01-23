import RequestsMain from "../components/molecules/RequestsMain";
import SideBar from "../components/molecules/SideBar";

const Home = () => {
  return (
    <div className="flex w-full h-screen">
      <SideBar />
      <RequestsMain />
    </div>
  );
};

export default Home;