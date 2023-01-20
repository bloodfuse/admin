import React from "react";
import { Logo } from "../assets/images";

const ViewOnDesktop = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="flex justify-between items-center w-full border-b-2 border-slate px-8 py-2">
          <img src={Logo.Dark} />
          <div className="right1">
            <a
              className="font-semibold text-[#DC2626] hover:font-bold"
              href="https://bloodfuse.com"
            >
              Visit Site
            </a>{" "}
          </div>
        </div>
        <div className="flex items-center justify-center h-[650px] font-bold text-xl">
          ⚠️ You can only access the admin from a desktop.
        </div>
      </div>
    </>
  );
};

export default ViewOnDesktop;
