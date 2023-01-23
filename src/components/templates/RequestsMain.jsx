import React from "react";
import TopBar from "../molecules/TopBar";
import SearchBar from "../molecules/SearchBar";
import {
  PlusOutline,
  Settings,
  Send,
  XMark,
  ArrowSendOut,
} from "../atoms/Icons";
import Text from "../atoms/Text";
import RequestTableRow from "../organisms/RequestTableRow";
import { Requests } from "../../utils/DemoConst";
import EmptyState from "../molecules/EmptyState";

const RequestsMain = () => {
  return (
    <>
      <div className="w-full h-auto  overflow-auto bg-zinc-100">
        {/* topbar */}
        <TopBar />

        {/* request table  */}
        <div className="px-5 py-10">
          <div className="w-full bg-white rounded-t-md">
            {/* table head */}
            <div className=" flex h-40 justify-start items-center">
              <div className="p-[52px] border-gray-200 border-r-2 border-b-2">
                <div className="w-14 h-14 rounded-md bg-rose-600">
                  <PlusOutline className={"w-18 text-white  font-medium"} />
                </div>
              </div>
              <div className="w-full flex h-40 justify-between items-center px-6 border-gray-200 border-b-2">
                <SearchBar />
                <Settings className={"w-[24px]"} />
              </div>
            </div>
            {/* table body */}
            <div className=" flex h-full">
              <div className="flex-col h-auto border-gray-200 border-r-2">
                <div className="flex items-center py-6 px-6 border-gray-200 border-b-2 flex-col w-100">
                  <span className="flex justify-center items-center">
                    <Send
                      className={
                        "w-[26px] py-4 text-rose-600 font-medium -rotate-45"
                      }
                    />
                  </span>
                  <Text className={"font-medium !text-[16px]"}>
                    All Requests
                  </Text>
                </div>
                <div className="flex items-center py-6 px-6 border-gray-200 border-b-2 flex-col w-100">
                  <span className="flex justify-center items-center">
                    <XMark
                      className={"w-[26px] py-4 text-rose-600 font-medium"}
                    />
                  </span>
                  <Text className={"font-medium !text-[16px]"}>Canceled</Text>
                </div>
                <div className="flex items-center py-8 px-6 border-gray-200 border-b-2 flex-col w-100">
                  <span className="flex justify-center items-center">
                    <ArrowSendOut
                      className={"w-[26px] py-4 text-rose-600 font-medium"}
                    />
                  </span>
                  <Text className={"font-medium !text-[16px]"}>
                    Running Requests
                  </Text>
                </div>
              </div>
              <div className="w-full h-100 flex-col items-center pt-5 px-6">
                {Requests.length ? (
                  Requests.map((x, i) => (
                    <span key={i}>
                      <RequestTableRow data={x} />
                    </span>
                  ))
                ) : (
                  <EmptyState message={"No Requests"} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestsMain;
