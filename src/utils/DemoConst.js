import { Images } from "../assets/images";
import { Envelope, Settings, LogOut } from "../components/atoms/Icons";
import { genBarValues, genChartData, genData, genDonors, genRequests } from "./func";

export const listItems = [
  { name: "This Month" },
  { name: "Last 14 Days" },
  { name: "Last Month" },
  { name: "Last 90 Days" },
  { name: "Last 120 Days" },
];
export const listItems2 = [
  { name: "Year" },
  { name: "6 Months" },
  { name: "3 Months" },
];
export const menuItem = [
  {

    uid: 1,
    title: "Accounts Settings",
    isActive: !1,
    icon: "settings",
    link: "/settings",
  },
  {
    uid: 2,
    title: "Messages",
    isActive: !1,
    icon: "envelope",
    link: "/messages",
  },
  // {
  //   title: "Settings",
  //   isActive: !1,
  //   icon: <Settings className={"w-[12px]"} />,
  //   link: "/bxdgbgf"
  // },
  {
    uid: 3,
    title: "Logout",
    isActive: !1,
    icon: "logout",
    link: "/logout",
  },
];


// Auto Generate
export const chartData = genChartData();

export const data = genData()

export const donors = genDonors();

export const Requests = genRequests();

export const BarValue = genBarValues();
