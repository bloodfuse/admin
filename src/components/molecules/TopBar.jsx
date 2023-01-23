import Text from "../atoms/Text";
import Dropdowns from "./Dropdowns";
import Notify from "./Notify";
import { Images } from "../../assets/images";
import { menuItem } from "../../utils/DemoConst";
import { DoubleRight } from "../atoms/Icons";

const TopBar = () => {
  return (
    <div className="w-full flex justify-between p-5 py-5 bg-white">
      <div className="flex items-center gap-2 mr-2 font-semibold">
        <Text>Dashboard</Text>
        <DoubleRight className="w-[16px] font-bold mx-2" />
        <Text>Admin</Text>
      </div>
      <div className="flex items-center gap-5 mx-5">
        <Notify isNotify={!0}>99+</Notify>
        <Dropdowns
          name={"BloodFuse Admin"}
          img={Images.AvatarIcon}
          items={menuItem}
        />
      </div>
    </div>
  );
};

export default TopBar;
