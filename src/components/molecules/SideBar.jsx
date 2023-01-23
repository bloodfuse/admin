import Links from "../atoms/Links";
import { NavText } from "../atoms/NavText";
import { Logo } from "../../assets/images";
import { useLocation } from "react-router";

const SideBar = () => {
  const location = useLocation();
  return (
    <div className="max-w-[20%] w-[15rem] shrink-0 bg-white shadow-sm h-full">
      <div className="h-[100] overflow-hidden">
        <div className="flex justify-center items-center mt-3 mb-5 py-3">
          <img src={Logo.Dark} alt="logo" className="w-[100px] h-[60px]" />
        </div>
        <>
          {NavText.map((nav) => (
            <div
              key={nav.key}
              className={`w-full py-4 my-2 ${
                nav.links === location.pathname
                  ? "bg-red-100 border-l-4 rounded-l-sm border-[#dc2626] text-[#dc2626]"
                  : ""
              } font-bold hover:bg-red-100 hover:border-l-4 hover:rounded-l-sm hover:border-[#dc2626] hover:text-[#dc2626]`}
            >
              <Links
                href={nav.links}
                className={`flex justify-start items-start gap-2 pl-5 text-sm `}
                isIcon={!0}
              >
                <span className="px-5 md:px-10 lg:px-0">{nav.icon}</span>
                <span className="hidden md:block lg:block">{nav.title}</span>
              </Links>
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

export default SideBar;
