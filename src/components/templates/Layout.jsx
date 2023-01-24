import SideBar from "../molecules/SideBar";

const Layout = ({ children }) => {
  return (
    <div className="flex w-full h-screen">
      <SideBar />
      {children}
    </div>
  );
};

export default Layout;
