import { Request,Home, Transaction, History } from "./Icons"
export const NavText = [
    {
        key:1,
        title: "Dashboard",
        icon: <Home className={`w-[22px]`}/>,
        links: "/",
        isActive: !0,
    },
    {
        key:2,
        title: "Requests",
        icon: <Request className={`w-[22px]`}/>,
        links: "/requests",
        isActive: !1
    },
    {
        key:3,
        title: "Transaction",
        icon: <Transaction className={`w-[22px]`} />,
        links: "/transaction",
        isActive: !1
    },
    {
        key:4,
        title: "History",
        icon: <History className={`w-[22px]`}/>,
        links: "/history",
        isActive: !1
    }
]